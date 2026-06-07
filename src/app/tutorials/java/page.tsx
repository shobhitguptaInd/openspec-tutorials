export default function JavaTutorial() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-4xl mb-4 block">☕</span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Java with OpenSpec</h1>
        <p className="text-xl text-gray-600">
          Build enterprise Java applications with spec-driven development
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            This tutorial teaches you how to use OpenSpec for Java development, focusing on Spring Boot, 
            microservices, and enterprise patterns. You'll learn to specify REST APIs, data access layers, 
            and integrate with CI/CD pipelines.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <p className="text-gray-800">
              <strong>Prerequisites:</strong> Java 17+, Maven or Gradle, Spring Boot knowledge, 
              and OpenSpec CLI installed.
            </p>
          </div>
        </section>

        {/* Module 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 1: Setup & Configuration</h2>
          <p className="text-gray-700 mb-4">Duration: 30 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Configure OpenSpec for Java</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-sm">{`# openspec/config.yaml
project:
  name: "Enterprise Java Application"
  language: java
  framework: spring-boot
  version: "3.2.0"
  
conventions:
  naming:
    packages: "com.company.project"
    classes: "PascalCase"
    methods: "camelCase"
  
tools:
  - name: "Maven"
    version: "3.9"
  - name: "Spring Boot"
    version: "3.2.0"
  - name: "PostgreSQL"
    version: "15"`}</pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Project Structure</h3>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800">{`your-java-project/
├── openspec/
│   ├── config.yaml
│   ├── changes/
│   └── specs/
├── src/
│   ├── main/java/
│   └── test/java/
├── pom.xml
└── README.md`}</pre>
          </div>
        </section>

        {/* Module 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 2: Spring Boot Basics</h2>
          <p className="text-gray-700 mb-4">Duration: 45 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Example: User Management API</h3>
          <p className="text-gray-700 mb-4">Create a specification for a REST API:</p>
          
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <code>openspec change create user-management-api</code>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">{`# User Management API

## Problem
Need a RESTful API to manage user accounts with CRUD operations
and proper validation.

## Solution
Create Spring Boot REST API with:
- User entity and repository
- REST controller with endpoints
- Input validation
- Exception handling
- API documentation with OpenAPI

## Requirements
- REQ-1: GET /api/users - List all users
- REQ-2: GET /api/users/{id} - Get user by ID
- REQ-3: POST /api/users - Create new user
- REQ-4: PUT /api/users/{id} - Update user
- REQ-5: DELETE /api/users/{id} - Delete user
- REQ-6: Validate email format and uniqueness
- REQ-7: Return appropriate HTTP status codes

## API Specification

### User Model
\`\`\`json
{
  "id": "long",
  "email": "string (required, unique)",
  "firstName": "string (required)",
  "lastName": "string (required)",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
\`\`\`

### Endpoints

#### GET /api/users
Response: 200 OK
\`\`\`json
[
  {
    "id": 1,
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
]
\`\`\`

#### POST /api/users
Request Body:
\`\`\`json
{
  "email": "jane@example.com",
  "firstName": "Jane",
  "lastName": "Smith"
}
\`\`\`
Response: 201 Created

### Error Handling
- 400 Bad Request: Invalid input
- 404 Not Found: User not found
- 409 Conflict: Email already exists
- 500 Internal Server Error: Server error`}</pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Working with Bob</h3>
          <div className="bg-blue-50 border-l-4 border-primary-500 p-6 mb-6">
            <p className="text-gray-800 mb-3">
              <strong>Prompt for Bob:</strong>
            </p>
            <p className="text-gray-700 italic">
              "Bob, please implement the User Management API according to the specification in 
              openspec/changes/user-management-api/proposal.md. Use Spring Boot 3.2, Spring Data JPA, 
              and include proper validation and exception handling."
            </p>
          </div>
        </section>

        {/* Module 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 3: Microservices Specifications</h2>
          <p className="text-gray-700 mb-4">Duration: 45 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Service Architecture</h3>
          <p className="text-gray-700 mb-4">
            Specify microservices architecture with OpenSpec:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Service boundaries and responsibilities</li>
            <li>Inter-service communication (REST, messaging)</li>
            <li>Service discovery and configuration</li>
            <li>API gateway patterns</li>
            <li>Circuit breakers and resilience</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Example: Order Service</h3>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">{`## Order Service Specification

### Service Responsibilities
- Manage order lifecycle
- Validate order items
- Calculate order totals
- Communicate with Inventory Service
- Publish order events

### Dependencies
- Inventory Service (REST)
- Payment Service (REST)
- Kafka (event publishing)
- PostgreSQL (data storage)

### API Endpoints
- POST /orders - Create order
- GET /orders/{id} - Get order details
- PUT /orders/{id}/status - Update order status
- GET /orders/user/{userId} - Get user orders

### Events Published
- OrderCreated
- OrderConfirmed
- OrderShipped
- OrderCancelled`}</pre>
          </div>
        </section>

        {/* Module 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 4: Data Access & Persistence</h2>
          <p className="text-gray-700 mb-4">Duration: 30 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">JPA Entity Specifications</h3>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">{`## Data Model Specification

### User Entity
- Table: users
- Primary Key: id (auto-generated)
- Unique Constraint: email
- Indexes: email, lastName

### Relationships
- User has many Orders (one-to-many)
- User has one Profile (one-to-one)
- User has many Roles (many-to-many)

### Repository Methods
- findByEmail(String email)
- findByLastName(String lastName)
- findActiveUsers()
- countByRole(Role role)`}</pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Transaction Management</h3>
          <p className="text-gray-700 mb-4">
            Specify transaction boundaries and isolation levels:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Service layer transaction demarcation</li>
            <li>Read-only transactions for queries</li>
            <li>Rollback rules for exceptions</li>
            <li>Optimistic locking for concurrent updates</li>
          </ul>
        </section>

        {/* Module 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 5: Testing Strategies</h2>
          <p className="text-gray-700 mb-4">Duration: 30 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Test Specifications</h3>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">{`## Testing Requirements

### Unit Tests
- Test service layer business logic
- Mock repository dependencies
- Test validation rules
- Test exception handling

### Integration Tests
- Test REST endpoints with MockMvc
- Test database operations with @DataJpaTest
- Test with embedded database (H2)
- Verify transaction behavior

### Contract Tests
- Define API contracts with Spring Cloud Contract
- Generate consumer stubs
- Verify provider compliance`}</pre>
          </div>
        </section>

        {/* Module 6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 6: CI/CD Integration</h2>
          <p className="text-gray-700 mb-4">Duration: 30 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Pipeline Specification</h3>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">{`## CI/CD Pipeline

### Build Stage
1. Checkout code
2. Validate OpenSpec specifications
3. Run Maven build
4. Execute unit tests
5. Generate code coverage report

### Quality Stage
1. Run SonarQube analysis
2. Check code coverage (>80%)
3. Verify OpenSpec compliance
4. Security scan with OWASP

### Deploy Stage
1. Build Docker image
2. Push to container registry
3. Deploy to staging
4. Run integration tests
5. Deploy to production (manual approval)`}</pre>
          </div>
        </section>

        {/* Case Study */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Study: Microservices Platform</h2>
          <p className="text-gray-700 mb-4">Duration: 45 minutes</p>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Scenario</h3>
            <p className="text-gray-800 mb-4">
              An e-commerce company needs to build a microservices platform with multiple services 
              (User, Product, Order, Payment, Inventory) that communicate via REST and Kafka.
            </p>
            <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
            <p className="text-gray-800 mb-4">
              Ensure consistent API design, proper service boundaries, and maintainable specifications 
              across all services.
            </p>
            <h4 className="font-semibold text-gray-900 mb-2">Solution with OpenSpec:</h4>
            <ol className="list-decimal pl-6 text-gray-800 space-y-2">
              <li>Define service specifications in OpenSpec</li>
              <li>Specify API contracts and event schemas</li>
              <li>Use Bob to generate service scaffolding</li>
              <li>Implement business logic with Bob's assistance</li>
              <li>Validate implementations against specs</li>
              <li>Generate API documentation automatically</li>
            </ol>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/samples" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">📦 Sample Projects</h3>
              <p className="text-gray-600">Clone complete Java examples</p>
            </a>
            <a href="/playground" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🎮 Try Playground</h3>
              <p className="text-gray-600">Practice Java specs interactively</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

// Made with Bob
