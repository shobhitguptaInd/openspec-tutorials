# OpenSpec Commands Showcase for Bob

This document showcases the OpenSpec commands available in Bob's `.bob` folder, demonstrating the prompts, purposes, and structures used for AI-driven software development workflows.

## Overview

OpenSpec provides a structured workflow for software development through five main commands that work together to guide projects from ideation through implementation to archival. Each command leverages the OpenSpec CLI and follows specific prompt patterns to ensure consistent, high-quality outputs.

---

## Command Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    OpenSpec Workflow                        │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
   ┌─────────┐          ┌─────────┐          ┌─────────┐
   │ EXPLORE │          │ PROPOSE │          │  APPLY  │
   │  Mode   │─────────▶│ Change  │─────────▶│  Tasks  │
   └─────────┘          └─────────┘          └─────────┘
        │                     │                     │
        │                     ▼                     ▼
        │               ┌─────────┐          ┌─────────┐
        └──────────────▶│  SYNC   │◀─────────│ ARCHIVE │
                        │  Specs  │          │ Change  │
                        └─────────┘          └─────────┘
```

---

## 1. `/opsx-explore` - Discovery & Thinking Mode

### Purpose
Enter a thinking-partner mode for exploring ideas, investigating problems, and clarifying requirements before or during implementation.

### Key Characteristics
- **Stance-based, not workflow-based** - No fixed steps or required outputs
- **Thinking, not implementing** - Can read code and create artifacts, but never implements features
- **Visual and adaptive** - Uses ASCII diagrams liberally, follows interesting threads

### Command Structure

```markdown
---
description: Enter explore mode - think through ideas, investigate problems, clarify requirements
argument-hint: command arguments
---
```

### Prompt Pattern

**Input Handling:**
```
The argument after /opsx-explore can be:
- A vague idea: "real-time collaboration"
- A specific problem: "the auth system is getting unwieldy"
- A change name: "add-dark-mode"
- A comparison: "postgres vs sqlite for this"
- Nothing (just enter explore mode)
```

**Core Stance:**
```
- Curious, not prescriptive
- Open threads, not interrogations
- Visual (ASCII diagrams liberally)
- Adaptive (follow interesting threads)
- Patient (let problems emerge)
- Grounded (explore actual codebase)
```

**OpenSpec Integration:**
```bash
# Check for existing context
openspec list --json

# If change exists, read artifacts
openspec status --change "<name>" --json
# Use changeRoot, artifactPaths, actionContext from JSON
```

### Example Interaction Flow

```
User: I'm thinking about adding real-time collaboration

Bot: Real-time collab is a big space. Let me think about this...

     COLLABORATION SPECTRUM
     ════════════════════════════════════════════

     Awareness          Coordination         Sync
         │                   │                 │
         ▼                   ▼                 ▼
     ┌────────┐         ┌────────┐        ┌────────┐
     │Presence│         │Cursors │        │  CRDT  │
     │  "3    │         │ Multi  │        │Conflict│
     │online" │         │ select │        │  free  │
     └────────┘         └────────┘        └────────┘
         │                   │                 │
      trivial            moderate           complex

     Where's your head at?
```

### Artifact Capture Offers

| Insight Type | Where to Capture |
|-------------|------------------|
| New requirement discovered | `specs/<capability>/spec.md` |
| Requirement changed | `specs/<capability>/spec.md` |
| Design decision made | `design.md` |
| Scope changed | `proposal.md` |
| New work identified | `tasks.md` |
| Assumption invalidated | Relevant artifact |

---

## 2. `/opsx-propose` - Change Proposal Generation

### Purpose
Create a new change with all artifacts (proposal, design, specs, tasks) generated in one step, ready for implementation.

### Key Characteristics
- **All-in-one artifact generation** - Creates complete change structure
- **Dependency-aware** - Follows artifact dependency graph
- **Template-driven** - Uses OpenSpec templates for consistency
- **Context-constrained** - Uses project context to guide artifact creation without copying it

### Command Structure

```markdown
---
description: Propose a new change - create it and generate all artifacts in one step
argument-hint: command arguments
---
```

---

## Detailed Workflow: `/opsx-propose`

### Step 1: Input Handling & Change Creation

**Prompt Pattern:**
```
Input: Change name (kebab-case) OR description

If no input provided:
  Use AskUserQuestion tool (open-ended, no preset options):
  "What change do you want to work on? Describe what you want to build or fix."
  
  From description, derive kebab-case name:
  - "add user authentication" → add-user-auth
  - "fix payment processing bug" → fix-payment-processing
  - "implement dark mode" → implement-dark-mode
```

**Example Interaction:**
```
User: /opsx-propose

Bot: What change do you want to work on? Describe what you want to build or fix.

User: I want to add a REST API for managing tasks in our Spring Boot application

Bot: Creating change: add-task-rest-api
     Running: openspec new change "add-task-rest-api"
     ✓ Change created at openspec/changes/add-task-rest-api/
```

**CLI Command:**
```bash
openspec new change "add-task-rest-api"
```

**What This Creates:**
```
openspec/changes/add-task-rest-api/
├── .openspec.yaml          # Change configuration
└── (empty, ready for artifacts)
```

---

### Step 2: Get Artifact Build Order

**CLI Command:**
```bash
openspec status --change "add-task-rest-api" --json
```

**JSON Response Structure:**
```json
{
  "schemaName": "spec-driven",
  "planningHome": {
    "root": "c:/project/openspec",
    "changesDir": "c:/project/openspec/changes",
    "specsDir": "c:/project/openspec/specs"
  },
  "changeRoot": "c:/project/openspec/changes/add-task-rest-api",
  "artifactPaths": {
    "proposal": {
      "pattern": "proposal.md",
      "existingOutputPaths": []
    },
    "design": {
      "pattern": "design.md",
      "existingOutputPaths": []
    },
    "specs": {
      "pattern": "specs/*/spec.md",
      "existingOutputPaths": []
    },
    "tasks": {
      "pattern": "tasks.md",
      "existingOutputPaths": []
    }
  },
  "actionContext": {
    "mode": "repo-planning",
    "allowedEditRoots": ["c:/project/src"]
  },
  "artifacts": [
    {
      "id": "proposal",
      "status": "ready",
      "dependencies": []
    },
    {
      "id": "design",
      "status": "pending",
      "dependencies": ["proposal"]
    },
    {
      "id": "specs",
      "status": "pending",
      "dependencies": ["proposal", "design"]
    },
    {
      "id": "tasks",
      "status": "pending",
      "dependencies": ["proposal", "design", "specs"]
    }
  ],
  "applyRequires": ["tasks"]
}
```

**Key Information Extracted:**
- `applyRequires`: ["tasks"] - Must complete tasks artifact before implementation
- `artifacts`: Dependency graph showing creation order
- `planningHome`, `changeRoot`: Path context for file operations
- `actionContext`: Scope constraints (what can be edited)

---

### Step 3: Artifact Creation Loop

The bot creates artifacts in dependency order, using a TODO list to track progress.

**Progress Tracking:**
```markdown
[ ] Create proposal.md
[ ] Create design.md
[ ] Create specs
[ ] Create tasks.md
```

#### Artifact 1: proposal.md

**CLI Command:**
```bash
openspec instructions proposal --change "add-task-rest-api" --json
```

**Instructions JSON Response:**
```json
{
  "context": "<project_context>\nThis is a Spring Boot tutorial project demonstrating REST API development.\nTarget audience: Beginner to intermediate Java developers.\nFocus on practical, runnable examples with clear documentation.\n</project_context>",
  
  "rules": "<rules>\n- Keep language clear and beginner-friendly\n- Include specific technical details\n- Provide concrete examples\n- Explain the 'why' not just the 'what'\n</rules>",
  
  "template": "# [Change Title]\n\n## Problem Statement\n\n[Describe the problem or opportunity]\n\n## Proposed Solution\n\n[Describe what you're building]\n\n## Requirements\n\n### Functional Requirements\n\n**FR1: [Requirement Name]**\n- [Requirement details]\n\n### Non-Functional Requirements\n\n**NFR1: [Requirement Name]**\n- [Requirement details]\n\n## Implementation Details\n\n[Technical approach]\n\n## Success Criteria\n\n[How to measure success]",
  
  "instruction": "Create a proposal that explains WHAT you're building and WHY. Focus on the problem, solution, and requirements. This is the foundation for all other artifacts.",
  
  "resolvedOutputPath": "c:/project/openspec/changes/add-task-rest-api/proposal.md",
  
  "dependencies": []
}
```

**Critical Understanding:**
- `context` and `rules` are **constraints for the AI** - they guide what to write
- These blocks should **NEVER appear in the output file**
- The AI uses them to understand project standards and requirements
- Only the filled-in `template` content goes into the file

**Generated proposal.md:**
```markdown
# Task Management REST API

## Problem Statement

Modern web applications require robust REST APIs for client-server communication.
Developers learning Spring Boot need practical examples that demonstrate:
- RESTful API design principles
- CRUD operations with database persistence
- Input validation and error handling
- API documentation
- Testing strategies

## Proposed Solution

Create a complete Spring Boot REST API for a Task Management system that demonstrates:
1. RESTful endpoints for CRUD operations
2. JPA/Hibernate for database persistence
3. Bean validation for input validation
4. Global exception handling
5. Swagger/OpenAPI documentation
6. Unit and integration tests

The API will manage tasks with properties: id, title, description, status,
priority, and due date.

## Requirements

### Functional Requirements

**FR1: Task Creation**
- POST /api/tasks - Create a new task
- Request body must include: title (required), description (optional),
  priority (required), dueDate (optional)
- Return created task with generated ID and 201 status

**FR2: Task Retrieval**
- GET /api/tasks - List all tasks with pagination and sorting
- GET /api/tasks/{id} - Get task by ID
- GET /api/tasks/status/{status} - Filter tasks by status
- Return 404 if task not found

[... more requirements ...]

## Success Criteria

The sample is successful if:
1. All API endpoints work correctly
2. Validation rules are enforced
3. Tests pass with >75% coverage
4. Swagger UI is accessible and functional
5. Documentation is clear and complete
```

**Progress Update:**
```markdown
[x] Create proposal.md
[-] Create design.md
[ ] Create specs
[ ] Create tasks.md
```

---

#### Artifact 2: design.md

**CLI Command:**
```bash
openspec instructions design --change "add-task-rest-api" --json
```

**Instructions JSON Response:**
```json
{
  "context": "<project_context>\nSpring Boot tutorial project...\n</project_context>",
  
  "rules": "<rules>\n- Include architecture diagrams (ASCII)\n- Explain design decisions\n- Show code structure\n</rules>",
  
  "template": "# Design: [Change Title]\n\n## Architecture Overview\n\n[High-level architecture]\n\n## Component Design\n\n### [Component Name]\n[Component details]\n\n## Data Model\n\n[Database schema, entities]\n\n## API Design\n\n[Endpoints, request/response formats]\n\n## Technology Choices\n\n[Why these technologies]",
  
  "instruction": "Create a design document that explains HOW you'll build the solution. Include architecture, components, data models, and technical decisions.",
  
  "resolvedOutputPath": "c:/project/openspec/changes/add-task-rest-api/design.md",
  
  "dependencies": ["proposal.md"]
}
```

**Key Point:** The bot reads `proposal.md` first to understand context, then creates design.md

**Generated design.md:**
```markdown
# Design: Task Management REST API

## Architecture Overview

```
┌─────────────────────────────────────────────────┐
│              Client Applications                │
│         (Web, Mobile, Postman, etc.)           │
└────────────────┬────────────────────────────────┘
                 │ HTTP/JSON
                 ▼
┌─────────────────────────────────────────────────┐
│           Spring Boot Application               │
│  ┌──────────────────────────────────────────┐  │
│  │      Controller Layer                    │  │
│  │  - TaskController                        │  │
│  │  - GlobalExceptionHandler                │  │
│  └──────────────┬───────────────────────────┘  │
│                 │                               │
│  ┌──────────────▼───────────────────────────┐  │
│  │      Service Layer                       │  │
│  │  - TaskService                           │  │
│  │  - Business Logic                        │  │
│  └──────────────┬───────────────────────────┘  │
│                 │                               │
│  ┌──────────────▼───────────────────────────┐  │
│  │      Repository Layer                    │  │
│  │  - TaskRepository (JPA)                  │  │
│  └──────────────┬───────────────────────────┘  │
└─────────────────┼───────────────────────────────┘
                  │
                  ▼
         ┌────────────────┐
         │   Database     │
         │  (H2/PostgreSQL)│
         └────────────────┘
```

## Component Design

### Controller Layer
**Responsibility:** Handle HTTP requests, validate input, return responses

**TaskController:**
- Maps REST endpoints to service methods
- Handles request/response DTOs
- Delegates business logic to service layer

[... more design details ...]

## Data Model

### Task Entity
```java
@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    @Size(min = 3, max = 100)
    private String title;
    
    @Size(max = 500)
    private String description;
    
    @Enumerated(EnumType.STRING)
    private Status status;
    
    @Enumerated(EnumType.STRING)
    private Priority priority;
    
    private LocalDate dueDate;
}
```

[... more design details ...]
```

**Progress Update:**
```markdown
[x] Create proposal.md
[x] Create design.md
[-] Create specs
[ ] Create tasks.md
```

---

#### Artifact 3: specs/task-management/spec.md

**CLI Command:**
```bash
openspec instructions specs --change "add-task-rest-api" --json
```

**Instructions JSON Response:**
```json
{
  "context": "<project_context>\nSpring Boot tutorial...\n</project_context>",
  
  "rules": "<rules>\n- Use SHALL for requirements\n- Include concrete scenarios\n- Make scenarios testable\n</rules>",
  
  "template": "# [Capability Name]\n\n## Overview\n\n[What this capability does]\n\n## Requirements\n\n### Requirement: [Name]\n\nThe system SHALL [requirement statement].\n\n#### Scenario: [Scenario Name]\n\n- **GIVEN** [precondition]\n- **WHEN** [action]\n- **THEN** [expected outcome]\n\n[... more requirements and scenarios ...]",
  
  "instruction": "Create specifications with testable requirements and scenarios. Each requirement should have concrete scenarios that can be verified.",
  
  "resolvedOutputPath": "c:/project/openspec/changes/add-task-rest-api/specs/task-management/spec.md",
  
  "dependencies": ["proposal.md", "design.md"]
}
```

**Generated specs/task-management/spec.md:**
```markdown
# Task Management

## Overview

This capability provides REST API endpoints for managing tasks, including
creation, retrieval, updating, and deletion of tasks with validation and
error handling.

## Requirements

### Requirement: Create Task

The system SHALL provide an endpoint to create new tasks with validation.

#### Scenario: Create task with valid data

- **GIVEN** a client has valid task data (title, priority)
- **WHEN** the client sends POST /api/tasks with the task data
- **THEN** the system creates the task
- **AND** returns 201 Created status
- **AND** returns the created task with generated ID

#### Scenario: Create task with missing required fields

- **GIVEN** a client has task data missing the title field
- **WHEN** the client sends POST /api/tasks with incomplete data
- **THEN** the system rejects the request
- **AND** returns 400 Bad Request status
- **AND** returns validation error details

### Requirement: Retrieve Tasks

The system SHALL provide endpoints to retrieve tasks by various criteria.

#### Scenario: Get all tasks

- **GIVEN** the system has 5 tasks stored
- **WHEN** the client sends GET /api/tasks
- **THEN** the system returns all 5 tasks
- **AND** returns 200 OK status

[... more requirements and scenarios ...]
```

**Progress Update:**
```markdown
[x] Create proposal.md
[x] Create design.md
[x] Create specs
[-] Create tasks.md
```

---

#### Artifact 4: tasks.md

**CLI Command:**
```bash
openspec instructions tasks --change "add-task-rest-api" --json
```

**Instructions JSON Response:**
```json
{
  "context": "<project_context>\nSpring Boot tutorial...\n</project_context>",
  
  "rules": "<rules>\n- Break down into small, actionable tasks\n- Order tasks logically\n- Each task should be completable in one session\n</rules>",
  
  "template": "# Implementation Tasks\n\n## Setup\n\n- [ ] Task description\n\n## Core Implementation\n\n- [ ] Task description\n\n## Testing\n\n- [ ] Task description\n\n## Documentation\n\n- [ ] Task description",
  
  "instruction": "Create a task list that breaks down the implementation into small, ordered steps. Each task should be clear and actionable.",
  
  "resolvedOutputPath": "c:/project/openspec/changes/add-task-rest-api/tasks.md",
  
  "dependencies": ["proposal.md", "design.md", "specs/task-management/spec.md"]
}
```

**Generated tasks.md:**
```markdown
# Implementation Tasks

## Setup

- [ ] Create Spring Boot project with dependencies (Spring Web, Spring Data JPA, H2, Lombok, Validation)
- [ ] Configure application.yml with database and server settings
- [ ] Set up project package structure (controller, service, repository, model, dto, exception)

## Core Implementation

- [ ] Create Task entity with JPA annotations
- [ ] Create Priority and Status enums
- [ ] Create TaskRepository interface extending JpaRepository
- [ ] Create TaskRequest and TaskResponse DTOs
- [ ] Create TaskMapper for entity-DTO conversion
- [ ] Create TaskService interface and implementation
- [ ] Create TaskController with CRUD endpoints
- [ ] Implement global exception handler
- [ ] Add bean validation annotations

## Testing

- [ ] Write unit tests for TaskService
- [ ] Write integration tests for TaskController
- [ ] Create test data fixtures
- [ ] Verify all endpoints with Postman/curl

## Documentation

- [ ] Add Swagger/OpenAPI configuration
- [ ] Write comprehensive README with setup instructions
- [ ] Add inline code comments
- [ ] Create example request/response documentation
```

**Progress Update:**
```markdown
[x] Create proposal.md
[x] Create design.md
[x] Create specs
[x] Create tasks.md
```

---

### Step 4: Completion Verification

**CLI Command:**
```bash
openspec status --change "add-task-rest-api" --json
```

**Response Verification:**
```json
{
  "artifacts": [
    {"id": "proposal", "status": "done"},
    {"id": "design", "status": "done"},
    {"id": "specs", "status": "done"},
    {"id": "tasks", "status": "done"}
  ],
  "applyRequires": ["tasks"]
}
```

**Check:** All artifacts in `applyRequires` have `status: "done"` ✓

---

### Step 5: Final Status Display

**CLI Command:**
```bash
openspec status --change "add-task-rest-api"
```

**Bot Output:**
```
## Change Proposed: add-task-rest-api

**Location:** openspec/changes/add-task-rest-api/

**Artifacts Created:**
- ✓ proposal.md - Problem statement, solution, and requirements
- ✓ design.md - Architecture, components, and technical approach
- ✓ specs/task-management/spec.md - Testable requirements and scenarios
- ✓ tasks.md - Step-by-step implementation checklist

**Status:** All artifacts created! Ready for implementation.

**Next Steps:**
Run `/opsx-apply` to start implementing the tasks.
```

---

## Key Prompts Used in `/opsx-propose`

### 1. Initial Input Prompt
```
What change do you want to work on? Describe what you want to build or fix.
```
**Purpose:** Get user's intent when no change name provided
**Type:** Open-ended question
**Tool:** AskUserQuestion

### 2. Artifact Instructions Prompt
```bash
openspec instructions <artifact-id> --change "<name>" --json
```
**Purpose:** Get template, context, and rules for each artifact
**Returns:** JSON with template structure and constraints
**Critical:** Context/rules guide AI but don't appear in output

### 3. Status Check Prompt
```bash
openspec status --change "<name>" --json
```
**Purpose:** Get current state and dependency graph
**Returns:** Artifact statuses, dependencies, paths
**Used:** After each artifact creation to check progress

### 4. Dependency Read Prompt
```
Read completed artifacts before creating new ones
```
**Purpose:** Maintain context and consistency across artifacts
**Example:** Read proposal.md before creating design.md

---

## Artifacts Generated by `/opsx-propose`

### Artifact Dependency Graph

```
proposal.md (no dependencies)
    │
    ├──> design.md (depends on: proposal)
    │       │
    │       └──> specs/*.md (depends on: proposal, design)
    │               │
    │               └──> tasks.md (depends on: proposal, design, specs)
```

### 1. proposal.md

**Purpose:** What and why
**Sections:**
- Problem Statement
- Proposed Solution
- Requirements (Functional & Non-Functional)
- Implementation Details
- Success Criteria

**Example Content:**
- Clear problem definition
- Concrete solution approach
- Specific, measurable requirements
- Technical stack decisions
- Acceptance criteria

### 2. design.md

**Purpose:** How to build it
**Sections:**
- Architecture Overview (with ASCII diagrams)
- Component Design
- Data Model
- API Design
- Technology Choices

**Example Content:**
- System architecture diagrams
- Component responsibilities
- Database schemas
- API endpoint specifications
- Design decision rationale

### 3. specs/[capability]/spec.md

**Purpose:** Testable requirements
**Sections:**
- Overview
- Requirements (with SHALL statements)
- Scenarios (GIVEN-WHEN-THEN format)

**Example Content:**
- Formal requirement statements
- Concrete test scenarios
- Expected behaviors
- Edge cases and error handling

### 4. tasks.md

**Purpose:** Implementation checklist
**Sections:**
- Setup tasks
- Core Implementation tasks
- Testing tasks
- Documentation tasks

**Example Content:**
- Small, actionable tasks
- Logical ordering
- Checkbox format for tracking
- Clear completion criteria

---

## Common Patterns & Best Practices

### Pattern 1: Context Constraints (NOT Output)

**What the AI Receives:**
```json
{
  "context": "<project_context>This is a tutorial project for beginners...</project_context>",
  "rules": "<rules>Keep language simple, include examples...</rules>"
}
```

**What the AI Does:**
- Uses context to understand project standards
- Applies rules to guide writing style
- **NEVER copies these blocks into the output file**

**What Goes in the File:**
- Only the filled-in template content
- Content that follows the context/rules constraints
- No XML tags or meta-information

### Pattern 2: Dependency-Driven Creation

**Order Matters:**
1. Create proposal first (foundation)
2. Create design (builds on proposal)
3. Create specs (builds on proposal + design)
4. Create tasks (builds on all previous)

**Why:**
- Each artifact provides context for the next
- Ensures consistency across artifacts
- Prevents contradictions

### Pattern 3: Template-Based Structure

**Template Provides:**
- Section headings
- Content placeholders
- Expected format

**AI Fills In:**
- Actual content based on user's description
- Specific details from context
- Examples and explanations

### Pattern 4: Incremental Progress Tracking

**Use TODO List:**
```markdown
[x] Create proposal.md
[-] Create design.md (in progress)
[ ] Create specs
[ ] Create tasks.md
```

**Benefits:**
- User sees progress
- Clear what's next
- Easy to resume if interrupted

---

## Real-World Example: Complete Flow

**User Input:**
```
/opsx-propose add-payment-gateway
```

**Bot Execution:**

1. **Create change:**
   ```bash
   openspec new change "add-payment-gateway"
   ```

2. **Get build order:**
   ```bash
   openspec status --change "add-payment-gateway" --json
   ```
   Result: proposal → design → specs → tasks

3. **Create proposal.md:**
   ```bash
   openspec instructions proposal --change "add-payment-gateway" --json
   ```
   Write proposal with problem, solution, requirements

4. **Create design.md:**
   ```bash
   openspec instructions design --change "add-payment-gateway" --json
   ```
   Read proposal.md, write design with architecture

5. **Create specs:**
   ```bash
   openspec instructions specs --change "add-payment-gateway" --json
   ```
   Read proposal + design, write testable specs

6. **Create tasks.md:**
   ```bash
   openspec instructions tasks --change "add-payment-gateway" --json
   ```
   Read all previous artifacts, write implementation tasks

7. **Verify completion:**
   ```bash
   openspec status --change "add-payment-gateway" --json
   ```
   Check all applyRequires artifacts are done

8. **Display summary:**
   Show created artifacts and next steps

**Time:** ~2-3 minutes for complete artifact generation

---

## Error Handling & Edge Cases

### Case 1: Change Already Exists

**Detection:**
```bash
openspec new change "existing-change"
# Returns error: change already exists
```

**Bot Response:**
```
A change named "existing-change" already exists.

Options:
1. Continue with existing change (will update artifacts)
2. Create a new change with a different name
3. Cancel

What would you like to do?
```

### Case 2: Unclear User Intent

**Scenario:** User provides vague description

**Bot Response:**
```
I need more details to create a meaningful proposal.

Could you clarify:
- What specific problem are you solving?
- What should the solution do?
- Who will use this feature?
```

### Case 3: Missing Dependencies

**Detection:** Artifact status shows "blocked"

**Bot Response:**
```
Cannot create design.md yet - proposal.md is not complete.

Creating proposal.md first...
```

### Case 4: Workspace Mode

**Detection:**
```json
{
  "actionContext": {
    "mode": "workspace-planning"
  }
}
```

**Bot Response:**
```
This change is in workspace-planning mode. Artifact creation
is supported, but implementation will need to happen in the
linked repository.

Continue with artifact creation?
```

---

## Success Metrics

**A successful `/opsx-propose` execution:**

✓ Creates all required artifacts in dependency order
✓ Each artifact follows its template structure
✓ Content is consistent across artifacts
✓ No context/rules blocks appear in output files
✓ All applyRequires artifacts have status "done"
✓ User can immediately run `/opsx-apply`
✓ Artifacts are clear, actionable, and complete

**Typical completion time:** 2-5 minutes
**Artifacts created:** 4-6 files
**Lines of documentation:** 500-1000 lines total

---

## 3. `/opsx-apply` - Task Implementation

### Purpose
Implement tasks from an OpenSpec change, working through the task list systematically while maintaining context from all artifacts.

### Key Characteristics
- **Schema-aware** - Adapts to different workflow schemas
- **Context-driven** - Reads all relevant artifacts before starting
- **Incremental progress** - Updates task checkboxes as work completes
- **Pause-friendly** - Can stop and resume at any point

### Command Structure

```markdown
---
description: Implement tasks from an OpenSpec change (Experimental)
argument-hint: command arguments
---
```

### Prompt Pattern

**Step 1: Change Selection**
```
If name provided: use it
Otherwise:
  - Infer from conversation context
  - Auto-select if only one active change
  - If ambiguous: openspec list --json → prompt user
```

**Step 2: Check Status**
```bash
openspec status --change "<name>" --json
```

**Extract:**
```json
{
  "schemaName": "spec-driven",
  "planningHome": "/path",
  "changeRoot": "/path/to/change",
  "actionContext": {
    "mode": "repo-planning",
    "allowedEditRoots": ["/src"]
  }
}
```

**Step 3: Get Apply Instructions**
```bash
openspec instructions apply --change "<name>" --json
```

**Response Structure:**
```json
{
  "state": "ready",
  "contextFiles": {
    "proposal": ["/path/to/proposal.md"],
    "specs": ["/path/to/spec.md"],
    "design": ["/path/to/design.md"],
    "tasks": ["/path/to/tasks.md"]
  },
  "progress": {
    "total": 7,
    "complete": 0,
    "remaining": 7
  },
  "tasks": [
    {"id": 1, "status": "pending", "description": "..."},
    {"id": 2, "status": "pending", "description": "..."}
  ],
  "instruction": "Dynamic guidance based on current state"
}
```

**State Handling:**
```
state: "blocked" → Show message, suggest /opsx-continue
state: "all_done" → Congratulate, suggest archive
state: "ready" → Proceed to implementation
```

**Step 4: Read Context Files**
```
Read ALL files from contextFiles object
Schema-dependent:
  - spec-driven: proposal, specs, design, tasks
  - Other schemas: follow contextFiles from CLI
```

**Step 5: Implementation Loop**
```
For each pending task:
  1. Show which task is being worked on
  2. Make minimal, focused code changes
  3. Mark complete: - [ ] → - [x]
  4. Continue to next task

Pause if:
  - Task unclear → ask for clarification
  - Design issue → suggest updating artifacts
  - Error/blocker → report and wait
  - User interrupts
```

### Output Format

**During Implementation:**
```
## Implementing: add-user-auth (schema: spec-driven)

Working on task 3/7: Create authentication middleware
[...implementation happening...]
✓ Task complete

Working on task 4/7: Add login endpoint
[...implementation happening...]
✓ Task complete
```

**On Completion:**
```
## Implementation Complete

**Change:** add-user-auth
**Schema:** spec-driven
**Progress:** 7/7 tasks complete ✓

### Completed This Session
- [x] Set up authentication module
- [x] Create user model
- [x] Create authentication middleware
- [x] Add login endpoint
- [x] Add logout endpoint
- [x] Add password reset flow
- [x] Write integration tests

All tasks complete! You can archive this change with `/opsx-archive`.
```

**On Pause:**
```
## Implementation Paused

**Change:** add-user-auth
**Schema:** spec-driven
**Progress:** 4/7 tasks complete

### Issue Encountered
The OAuth integration requires additional configuration that wasn't
specified in the design. We need to decide on the OAuth provider
configuration approach.

**Options:**
1. Add environment variables for OAuth config
2. Create a config file for OAuth settings
3. Use a configuration service

What would you like to do?
```

---

## 4. `/opsx-sync` - Delta Spec Synchronization

### Purpose
Sync delta specs from a change to main specs using intelligent, agent-driven merging that preserves existing content while applying targeted updates.

### Key Characteristics
- **Agent-driven** - AI reads and intelligently merges changes
- **Partial updates** - Can add scenarios without copying entire requirements
- **Intent-based** - Delta represents intent, not wholesale replacement
- **Idempotent** - Running twice gives same result

### Command Structure

```markdown
---
description: Sync delta specs from a change to main specs
argument-hint: command arguments
---
```

### Prompt Pattern

**Step 1: Change Selection**
```bash
openspec list --json
# Show changes with delta specs
# Prompt user to select
```

**Step 2: Resolve Context**
```bash
openspec status --change "<name>" --json
```

**Workspace Guard:**
```
If actionContext.mode: "workspace-planning":
  Explain workspace spec sync not supported
  STOP - do not edit linked repos
```

**Step 3: Find Delta Specs**
```
Use artifactPaths.specs.existingOutputPaths from status JSON
```

**Delta Spec Format:**
```markdown
## ADDED Requirements

### Requirement: New Feature
The system SHALL do something new.

#### Scenario: Basic case
- **WHEN** user does X
- **THEN** system does Y

## MODIFIED Requirements

### Requirement: Existing Feature
#### Scenario: New scenario to add
- **WHEN** user does A
- **THEN** system does B

## REMOVED Requirements

### Requirement: Deprecated Feature

## RENAMED Requirements

- FROM: `### Requirement: Old Name`
- TO: `### Requirement: New Name`
```

**Step 4: Apply Changes Intelligently**

```
For each delta spec:
  a. Read delta spec
  b. Read main spec at openspec/specs/<capability>/spec.md
  c. Apply changes:
  
     ADDED Requirements:
       - If doesn't exist → add it
       - If exists → update (treat as MODIFIED)
     
     MODIFIED Requirements:
       - Find requirement in main spec
       - Add new scenarios (preserve existing)
       - Modify existing scenarios
       - Change requirement description
       - Preserve content not mentioned
     
     REMOVED Requirements:
       - Remove entire requirement block
     
     RENAMED Requirements:
       - Find FROM requirement, rename to TO
  
  d. Create new main spec if capability doesn't exist
```

**Key Principle:**
```
Intelligent Merging - Apply partial updates:
✓ To add a scenario, just include that scenario under MODIFIED
✓ Don't copy existing scenarios
✓ Delta represents intent, not replacement
✓ Use judgment to merge sensibly
```

### Output Format

```
## Specs Synced: add-user-auth

Updated main specs:

**authentication**:
- Added requirement: "OAuth Integration"
- Modified requirement: "Login Flow" (added 2 scenarios)
- Removed requirement: "Legacy Auth Method"

**authorization**:
- Created new spec file
- Added requirement: "Role-Based Access Control"

Main specs are now updated. The change remains active - archive when
implementation is complete.
```

---

## 5. `/opsx-archive` - Change Archival

### Purpose
Archive a completed change after verifying artifact and task completion, with optional spec synchronization.

### Key Characteristics
- **Completion verification** - Checks artifacts and tasks
- **Spec sync integration** - Offers to sync delta specs before archiving
- **Warning-aware** - Allows archiving with warnings after confirmation
- **Date-stamped** - Archives with YYYY-MM-DD prefix

### Command Structure

```markdown
---
description: Archive a completed change in the experimental workflow
argument-hint: command arguments
---
```

### Prompt Pattern

**Step 1: Change Selection**
```bash
openspec list --json
# Show only active changes (not archived)
# Include schema for each change
# Prompt user to select
```

**Step 2: Check Artifact Completion**
```bash
openspec status --change "<name>" --json
```

**Parse:**
```json
{
  "schemaName": "spec-driven",
  "planningHome": {...},
  "changeRoot": "/path/to/change",
  "artifactPaths": {...},
  "actionContext": {...},
  "artifacts": [
    {"id": "proposal", "status": "done"},
    {"id": "design", "status": "done"},
    {"id": "tasks", "status": "pending"}
  ]
}
```

**Workspace Guard:**
```
If actionContext.mode: "workspace-planning":
  Explain workspace archive not supported
  STOP - do not move to repo-local archives
```

**If incomplete artifacts:**
```
Display warning listing incomplete artifacts
Prompt for confirmation
Proceed if confirmed
```

**Step 3: Check Task Completion**
```
Read tasks.md
Count: - [ ] (incomplete) vs - [x] (complete)

If incomplete tasks:
  Display warning with count
  Prompt for confirmation
  Proceed if confirmed
```

**Step 4: Assess Delta Spec Sync**
```
Use artifactPaths.specs.existingOutputPaths

If delta specs exist:
  - Compare each with main spec
  - Determine changes (adds, mods, removes, renames)
  - Show combined summary
  
  Prompt options:
    If changes needed: "Sync now (recommended)", "Archive without syncing"
    If synced: "Archive now", "Sync anyway", "Cancel"
  
  If sync chosen:
    Use Task tool → invoke openspec-sync-specs
```

**Step 5: Perform Archive**
```bash
# Create archive directory
mkdir -p "<planningHome.changesDir>/archive"

# Generate target name
target = "YYYY-MM-DD-<change-name>"

# Check if exists
if exists:
  Fail with error
  Suggest: rename existing or use different date
else:
  # Move to archive
  mv "<changeRoot>" "<planningHome.changesDir>/archive/<target>"
```

**Step 6: Display Summary**
```
Show:
- Change name
- Schema used
- Archive location
- Spec sync status
- Any warnings
```

### Output Format

**Success:**
```
## Archive Complete

**Change:** add-user-auth
**Schema:** spec-driven
**Archived to:** openspec/changes/archive/2026-06-09-add-user-auth/
**Specs:** ✓ Synced to main specs

All artifacts complete. All tasks complete.
```

**Success with Warnings:**
```
## Archive Complete (with warnings)

**Change:** add-user-auth
**Schema:** spec-driven
**Archived to:** openspec/changes/archive/2026-06-09-add-user-auth/
**Specs:** Sync skipped (user chose to skip)

**Warnings:**
- Archived with 2 incomplete artifacts
- Archived with 3 incomplete tasks
- Delta spec sync was skipped

Review the archive if this was not intentional.
```

**Error:**
```
## Archive Failed

**Change:** add-user-auth
**Target:** openspec/changes/archive/2026-06-09-add-user-auth/

Target archive directory already exists.

**Options:**
1. Rename the existing archive
2. Delete the existing archive if it's a duplicate
3. Wait until a different date to archive
```

---

## Command Relationships & Workflow

### Linear Flow
```
/opsx-explore → /opsx-propose → /opsx-apply → /opsx-sync → /opsx-archive
```

### Fluid Flow (Real-world)
```
┌──────────────────────────────────────────────────────────┐
│                    Fluid Workflow                        │
└──────────────────────────────────────────────────────────┘

/opsx-explore ←──────────────────────────────┐
     │                                       │
     ↓                                       │
/opsx-propose                                │
     │                                       │
     ↓                                       │
/opsx-apply ←────────┐                       │
     │               │                       │
     ↓               │                       │
/opsx-explore (mid-implementation)           │
     │               │                       │
     ↓               │                       │
Update artifacts     │                       │
     │               │                       │
     ↓               │                       │
/opsx-apply (continue) ──────────────────────┘
     │
     ↓
/opsx-sync (optional, can happen anytime)
     │
     ↓
/opsx-archive
```

### Key Principles

1. **Not Phase-Locked**: Can invoke actions anytime, interleave with other actions
2. **Artifact Updates Allowed**: If implementation reveals issues, update artifacts
3. **Context-Aware**: Each command reads current state from OpenSpec CLI
4. **User-Driven**: Commands prompt for clarification, don't guess
5. **Incremental**: Work can be paused and resumed at any point

---

## Common Patterns Across Commands

### 1. Change Selection Pattern
```
If name provided: use it
Otherwise:
  - Infer from context
  - Auto-select if only one
  - Prompt if ambiguous (NEVER guess)
```

### 2. Status Check Pattern
```bash
openspec status --change "<name>" --json
```
**Always extract:**
- `schemaName`: Workflow being used
- `planningHome`: Planning directory
- `changeRoot`: Change directory
- `artifactPaths`: Artifact locations
- `actionContext`: Scope and constraints

### 3. Workspace Guard Pattern
```
If actionContext.mode: "workspace-planning":
  Explain operation not supported in workspace mode
  STOP - do not edit linked repos or fall back to repo-local
```

### 4. Artifact Instructions Pattern
```bash
openspec instructions <artifact-id> --change "<name>" --json
```
**Response includes:**
- `context`: Constraints (NOT for output)
- `rules`: Constraints (NOT for output)
- `template`: Structure to use
- `instruction`: Guidance
- `resolvedOutputPath`: Where to write
- `dependencies`: Files to read first

### 5. User Confirmation Pattern
```
Use AskUserQuestion tool for:
- Change selection when ambiguous
- Confirmation before destructive operations
- Clarification when context unclear
- Options when multiple paths available
```

---

## Skills vs Commands

### Commands (`.bob/commands/`)
- User-facing slash commands
- Entry points for workflows
- Include argument hints and descriptions
- Markdown format with frontmatter

### Skills (`.bob/skills/`)
- Reusable capabilities
- Can be invoked by commands or other skills
- Include metadata (author, version, license)
- More detailed implementation guidance

### Relationship
```
Command (/opsx-propose)
    │
    └──> Invokes Skill (openspec-propose)
             │
             └──> Uses OpenSpec CLI
                      │
                      └──> Manages artifacts and state
```

---

## Best Practices for Using OpenSpec Commands

### 1. Start with Exploration
```
Use /opsx-explore when:
- Idea is vague or unclear
- Need to investigate existing code
- Want to compare approaches
- Stuck mid-implementation
```

### 2. Propose When Ready
```
Use /opsx-propose when:
- Requirements are clear enough
- Ready to formalize the approach
- Want complete artifact set
- Need implementation plan
```

### 3. Apply Incrementally
```
Use /opsx-apply when:
- Artifacts are ready (or tasks exist)
- Ready to start coding
- Want to continue implementation
- Need to work through task list
```

### 4. Sync Strategically
```
Use /opsx-sync when:
- Delta specs need to update main specs
- Before archiving (if prompted)
- After significant spec changes
- Want to share requirements across changes
```

### 5. Archive Thoughtfully
```
Use /opsx-archive when:
- All tasks complete
- Implementation verified
- Ready to close the change
- Want to clean up active changes
```

---

## CLI Integration Points

All commands integrate with the OpenSpec CLI:

```bash
# Core commands used across all workflows
openspec new change "<name>"           # Create new change
openspec list --json                   # List all changes
openspec status --change "<name>" --json  # Get change status
openspec instructions <artifact> --change "<name>" --json  # Get artifact instructions
openspec instructions apply --change "<name>" --json  # Get apply instructions
```

### JSON Response Patterns

**Status Response:**
```json
{
  "schemaName": "spec-driven",
  "planningHome": {
    "root": "/path",
    "changesDir": "/path/changes"
  },
  "changeRoot": "/path/changes/add-feature",
  "artifactPaths": {
    "proposal": {
      "pattern": "proposal.md",
      "existingOutputPaths": ["/path/proposal.md"]
    }
  },
  "actionContext": {
    "mode": "repo-planning",
    "allowedEditRoots": ["/src"]
  },
  "artifacts": [...],
  "applyRequires": ["tasks"]
}
```

---

## Conclusion

The OpenSpec command system provides a structured yet flexible approach to AI-driven software development. By combining:

- **Exploration** for thinking and discovery
- **Proposal** for planning and artifact generation
- **Application** for systematic implementation
- **Synchronization** for requirement management
- **Archival** for project completion

Teams can maintain high-quality documentation, clear requirements, and systematic implementation while preserving the flexibility to adapt as understanding evolves.

The key innovation is the **fluid workflow** model - not phase-locked, allowing artifact updates during implementation, and supporting the natural back-and-forth of real software development.