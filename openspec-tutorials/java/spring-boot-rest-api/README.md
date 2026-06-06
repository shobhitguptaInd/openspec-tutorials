# Spring Boot REST API - Task Management

A complete Spring Boot REST API demonstrating CRUD operations, validation, error handling, and API documentation with OpenSpec integration.

## 🎯 Learning Objectives

- Build RESTful APIs with Spring Boot
- Implement CRUD operations with JPA/Hibernate
- Use Bean Validation for input validation
- Handle exceptions globally
- Document APIs with Swagger/OpenAPI
- Write unit and integration tests
- Integrate OpenSpec specifications

## 📋 Prerequisites

- **Java 17+** installed
- **Maven 3.6+** or **Gradle 7+**
- **IDE** (IntelliJ IDEA recommended, or VS Code with Java extensions)
- **Postman** or **curl** for API testing
- **OpenSpec CLI** (optional)
- Basic understanding of REST and HTTP

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/shobhitguptaInd/openspec-tutorials.git
cd openspec-tutorials/java/spring-boot-rest-api
```

### 2. Build the Project

**Using Maven:**
```bash
mvn clean install
```

**Using Gradle:**
```bash
./gradlew build
```

### 3. Run the Application

**Using Maven:**
```bash
mvn spring-boot:run
```

**Using Gradle:**
```bash
./gradlew bootRun
```

The application will start on `http://localhost:8080`

### 4. Access Swagger UI

Open your browser and navigate to:
```
http://localhost:8080/swagger-ui.html
```

### 5. Test the API

**Create a Task:**
```bash
curl -X POST http://localhost:8080/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn Spring Boot",
    "description": "Complete the REST API tutorial",
    "priority": "HIGH",
    "dueDate": "2026-12-31"
  }'
```

**Get All Tasks:**
```bash
curl http://localhost:8080/api/tasks
```

**Get Task by ID:**
```bash
curl http://localhost:8080/api/tasks/1
```

**Update Task:**
```bash
curl -X PUT http://localhost:8080/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn Spring Boot - Updated",
    "description": "Complete the REST API tutorial with tests",
    "status": "IN_PROGRESS",
    "priority": "HIGH",
    "dueDate": "2026-12-31"
  }'
```

**Delete Task:**
```bash
curl -X DELETE http://localhost:8080/api/tasks/1
```

## 📖 API Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| POST | `/api/tasks` | Create new task | TaskRequest | 201 + TaskResponse |
| GET | `/api/tasks` | Get all tasks (paginated) | - | 200 + List<TaskResponse> |
| GET | `/api/tasks/{id}` | Get task by ID | - | 200 + TaskResponse |
| GET | `/api/tasks/status/{status}` | Get tasks by status | - | 200 + List<TaskResponse> |
| PUT | `/api/tasks/{id}` | Update task | TaskRequest | 200 + TaskResponse |
| PATCH | `/api/tasks/{id}/status` | Update task status | StatusUpdate | 200 + TaskResponse |
| DELETE | `/api/tasks/{id}` | Delete task | - | 204 No Content |

## 📦 Project Structure

```
src/
├── main/
│   ├── java/com/openspec/taskapi/
│   │   ├── TaskApiApplication.java          # Main application class
│   │   ├── controller/
│   │   │   └── TaskController.java          # REST endpoints
│   │   ├── service/
│   │   │   ├── TaskService.java             # Service interface
│   │   │   └── TaskServiceImpl.java         # Service implementation
│   │   ├── repository/
│   │   │   └── TaskRepository.java          # JPA repository
│   │   ├── model/
│   │   │   ├── Task.java                    # Entity class
│   │   │   ├── Priority.java                # Priority enum
│   │   │   └── Status.java                  # Status enum
│   │   ├── dto/
│   │   │   ├── TaskRequest.java             # Request DTO
│   │   │   ├── TaskResponse.java            # Response DTO
│   │   │   └── ErrorResponse.java           # Error DTO
│   │   ├── mapper/
│   │   │   └── TaskMapper.java              # Entity-DTO mapper
│   │   ├── exception/
│   │   │   ├── TaskNotFoundException.java   # Custom exception
│   │   │   └── GlobalExceptionHandler.java  # Exception handler
│   │   └── config/
│   │       └── OpenApiConfig.java           # Swagger configuration
│   └── resources/
│       ├── application.yml                   # Application config
│       └── data.sql                          # Sample data
└── test/
    └── java/com/openspec/taskapi/
        ├── controller/
        │   └── TaskControllerTest.java       # Controller tests
        └── service/
            └── TaskServiceTest.java          # Service tests
```

## 🔧 Configuration

### Application Properties (application.yml)

```yaml
spring:
  application:
    name: task-api
  datasource:
    url: jdbc:h2:mem:taskdb
    driver-class-name: org.h2.Driver
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true
  h2:
    console:
      enabled: true

springdoc:
  api-docs:
    path: /api-docs
  swagger-ui:
    path: /swagger-ui.html
```

### Database

The application uses H2 in-memory database for development. Access H2 console at:
```
http://localhost:8080/h2-console
```

**Connection details:**
- JDBC URL: `jdbc:h2:mem:taskdb`
- Username: `sa`
- Password: (leave empty)

## 📝 Data Models

### Task Entity

```java
@Entity
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
    private Status status = Status.TODO;
    
    @Enumerated(EnumType.STRING)
    private Priority priority;
    
    private LocalDate dueDate;
    
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
```

### Enums

**Status:**
- `TODO` - Task not started
- `IN_PROGRESS` - Task in progress
- `DONE` - Task completed

**Priority:**
- `LOW` - Low priority
- `MEDIUM` - Medium priority
- `HIGH` - High priority

## ✅ Testing

### Run All Tests

**Maven:**
```bash
mvn test
```

**Gradle:**
```bash
./gradlew test
```

### Test Coverage

Generate coverage report:

**Maven:**
```bash
mvn jacoco:report
```

View report at: `target/site/jacoco/index.html`

### Sample Tests

**Controller Test:**
```java
@Test
void shouldCreateTask() throws Exception {
    TaskRequest request = new TaskRequest(
        "Test Task", 
        "Description", 
        Priority.HIGH, 
        LocalDate.now().plusDays(7)
    );
    
    mockMvc.perform(post("/api/tasks")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(request)))
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$.title").value("Test Task"));
}
```

## 🎯 Exercises

### Exercise 1: Add Task Search
Implement a search endpoint that finds tasks by title or description.

**Endpoint:** `GET /api/tasks/search?query={query}`

### Exercise 2: Add Task Assignment
Add a `User` entity and allow assigning tasks to users.

### Exercise 3: Add Task Comments
Implement a comment system for tasks.

**Endpoints:**
- `POST /api/tasks/{id}/comments`
- `GET /api/tasks/{id}/comments`

### Exercise 4: Add Authentication
Secure the API with Spring Security and JWT tokens.

## 🐛 Troubleshooting

### Port Already in Use
If port 8080 is already in use, change it in `application.yml`:
```yaml
server:
  port: 8081
```

### Database Connection Issues
Ensure H2 dependency is in your `pom.xml` or `build.gradle`.

### Tests Failing
Run `mvn clean` or `./gradlew clean` before running tests.

## 📚 Additional Resources

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- [Bean Validation](https://beanvalidation.org/)
- [SpringDoc OpenAPI](https://springdoc.org/)
- [OpenSpec Documentation](https://github.com/shobhitguptaInd/OpenSpec)

## 🤝 Contributing

Found an issue or have an improvement? Please open an issue or submit a pull request!

## 📄 License

This sample project is part of the OpenSpec Tutorials repository and is licensed under the MIT License.

---

**Next Steps:**
- Try the [Microservices Architecture](../microservices-architecture) sample (Intermediate)
- Explore [Event-Driven System](../event-driven-system) sample (Advanced)
- Check out [.NET samples](../../dotnet/) for cross-platform learning

Made with ❤️ by the OpenSpec Community