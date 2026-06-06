# Spring Boot REST API

## Problem Statement

Modern web applications require robust REST APIs for client-server communication. Developers learning Spring Boot need practical examples that demonstrate:
- RESTful API design principles
- CRUD operations with database persistence
- Input validation and error handling
- API documentation
- Testing strategies
- Integration with OpenSpec for specification-driven development

## Proposed Solution

Create a complete Spring Boot REST API for a Task Management system that demonstrates:
1. RESTful endpoints for CRUD operations
2. JPA/Hibernate for database persistence
3. Bean validation for input validation
4. Global exception handling
5. Swagger/OpenAPI documentation
6. Unit and integration tests
7. OpenSpec specifications

The API will manage tasks with properties: id, title, description, status, priority, and due date.

## Requirements

### Functional Requirements

**FR1: Task Creation**
- POST /api/tasks - Create a new task
- Request body must include: title (required), description (optional), priority (required), dueDate (optional)
- Return created task with generated ID and 201 status

**FR2: Task Retrieval**
- GET /api/tasks - List all tasks with pagination and sorting
- GET /api/tasks/{id} - Get task by ID
- GET /api/tasks/status/{status} - Filter tasks by status
- Return 404 if task not found

**FR3: Task Update**
- PUT /api/tasks/{id} - Update existing task
- PATCH /api/tasks/{id}/status - Update only task status
- Return updated task and 200 status
- Return 404 if task not found

**FR4: Task Deletion**
- DELETE /api/tasks/{id} - Delete task by ID
- Return 204 No Content on success
- Return 404 if task not found

**FR5: Input Validation**
- Title: Required, 3-100 characters
- Description: Optional, max 500 characters
- Priority: Required, enum (LOW, MEDIUM, HIGH)
- Status: Required, enum (TODO, IN_PROGRESS, DONE)
- DueDate: Optional, must be future date

**FR6: Error Handling**
- Return appropriate HTTP status codes
- Provide meaningful error messages
- Include validation errors in response

### Non-Functional Requirements

**NFR1: Performance**
- API response time < 200ms for single record operations
- Support pagination for list operations
- Use database indexing for frequently queried fields

**NFR2: Security**
- Input validation to prevent injection attacks
- CORS configuration for cross-origin requests
- API versioning support

**NFR3: Documentation**
- Swagger UI for API exploration
- OpenAPI 3.0 specification
- Comprehensive README with examples

**NFR4: Testing**
- Unit tests for service layer (>80% coverage)
- Integration tests for API endpoints
- Test data fixtures

**NFR5: Code Quality**
- Follow Spring Boot best practices
- Use DTOs for request/response
- Implement proper layered architecture (Controller, Service, Repository)

## Implementation Details

### Technology Stack
- Java 17+
- Spring Boot 3.x
- Spring Data JPA
- H2 Database (development)
- PostgreSQL (production)
- Lombok
- MapStruct
- SpringDoc OpenAPI
- JUnit 5 & MockMvc

### Project Structure
```
src/
├── main/
│   ├── java/com/openspec/taskapi/
│   │   ├── TaskApiApplication.java
│   │   ├── controller/
│   │   │   └── TaskController.java
│   │   ├── service/
│   │   │   ├── TaskService.java
│   │   │   └── TaskServiceImpl.java
│   │   ├── repository/
│   │   │   └── TaskRepository.java
│   │   ├── model/
│   │   │   ├── Task.java
│   │   │   ├── Priority.java
│   │   │   └── Status.java
│   │   ├── dto/
│   │   │   ├── TaskRequest.java
│   │   │   ├── TaskResponse.java
│   │   │   └── ErrorResponse.java
│   │   ├── mapper/
│   │   │   └── TaskMapper.java
│   │   └── exception/
│   │       ├── TaskNotFoundException.java
│   │       └── GlobalExceptionHandler.java
│   └── resources/
│       ├── application.yml
│       └── data.sql
└── test/
    └── java/com/openspec/taskapi/
        ├── controller/
        │   └── TaskControllerTest.java
        └── service/
            └── TaskServiceTest.java
```

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/tasks | Create new task |
| GET | /api/tasks | Get all tasks (paginated) |
| GET | /api/tasks/{id} | Get task by ID |
| GET | /api/tasks/status/{status} | Get tasks by status |
| PUT | /api/tasks/{id} | Update task |
| PATCH | /api/tasks/{id}/status | Update task status |
| DELETE | /api/tasks/{id} | Delete task |

### Sample Request/Response

**Create Task (POST /api/tasks):**
```json
Request:
{
  "title": "Implement REST API",
  "description": "Create Spring Boot REST API with CRUD operations",
  "priority": "HIGH",
  "dueDate": "2026-12-31"
}

Response (201 Created):
{
  "id": 1,
  "title": "Implement REST API",
  "description": "Create Spring Boot REST API with CRUD operations",
  "status": "TODO",
  "priority": "HIGH",
  "dueDate": "2026-12-31",
  "createdAt": "2026-06-06T12:00:00",
  "updatedAt": "2026-06-06T12:00:00"
}
```

## Testing Strategy

### Unit Tests
- Service layer business logic
- Validation rules
- Mapper conversions
- Exception handling

### Integration Tests
- API endpoint testing with MockMvc
- Database operations
- Request/response validation
- Error scenarios

### Test Coverage Goals
- Service layer: >80%
- Controller layer: >70%
- Overall: >75%

## Learning Objectives

After completing this sample, developers will understand:
1. Spring Boot project structure and configuration
2. RESTful API design principles
3. JPA/Hibernate entity mapping
4. Request/response DTOs and mapping
5. Bean validation
6. Exception handling strategies
7. API documentation with Swagger
8. Testing REST APIs
9. OpenSpec integration with Spring Boot

## Prerequisites

- Java 17 or higher
- Maven 3.6+ or Gradle 7+
- IDE (IntelliJ IDEA, Eclipse, or VS Code)
- Postman or curl for API testing
- Basic understanding of REST and HTTP
- OpenSpec CLI installed

## Success Criteria

The sample is successful if:
1. All API endpoints work correctly
2. Validation rules are enforced
3. Tests pass with >75% coverage
4. Swagger UI is accessible and functional
5. Documentation is clear and complete
6. New developers can run the project in under 10 minutes

## Future Enhancements

Potential extensions for learners:
1. Add authentication with Spring Security
2. Implement task assignment to users
3. Add file attachments to tasks
4. Create task comments/notes
5. Add email notifications
6. Implement task search functionality
7. Add audit logging
8. Deploy to cloud platform

---

**Difficulty Level**: Beginner  
**Estimated Time**: 2-3 hours  
**Topics**: Spring Boot, REST API, JPA, Validation