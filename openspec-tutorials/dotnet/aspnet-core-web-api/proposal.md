# ASP.NET Core Web API

## Problem Statement

Modern .NET developers need practical examples of building RESTful APIs with ASP.NET Core. Common challenges include:
- Understanding ASP.NET Core project structure
- Implementing CRUD operations with Entity Framework Core
- Handling authentication and authorization
- Input validation and error handling
- API documentation and testing
- Integrating specification-driven development with OpenSpec

## Proposed Solution

Create a complete ASP.NET Core Web API for a Product Catalog system that demonstrates:
1. RESTful API design with ASP.NET Core
2. Entity Framework Core for data access
3. JWT authentication and authorization
4. Data validation with Data Annotations
5. Global exception handling
6. Swagger/OpenAPI documentation
7. Unit and integration testing
8. OpenSpec integration

The API will manage products with properties: id, name, description, price, category, and stock quantity.

## Requirements

### Functional Requirements

**FR1: Product Management**
- POST /api/products - Create new product
- GET /api/products - List all products with pagination
- GET /api/products/{id} - Get product by ID
- PUT /api/products/{id} - Update product
- DELETE /api/products/{id} - Delete product
- GET /api/products/category/{category} - Filter by category

**FR2: Authentication**
- POST /api/auth/register - Register new user
- POST /api/auth/login - Login and receive JWT token
- Protected endpoints require valid JWT token

**FR3: Authorization**
- Admin role can perform all operations
- User role can only read products
- Anonymous users can only view products

**FR4: Input Validation**
- Name: Required, 3-100 characters
- Description: Optional, max 500 characters
- Price: Required, positive decimal
- Category: Required, valid category enum
- StockQuantity: Required, non-negative integer

**FR5: Error Handling**
- Return appropriate HTTP status codes
- Provide detailed error messages
- Include validation errors in response
- Log errors for debugging

### Non-Functional Requirements

**NFR1: Performance**
- API response time < 200ms
- Support pagination for large datasets
- Use async/await for I/O operations
- Implement caching where appropriate

**NFR2: Security**
- JWT token-based authentication
- Password hashing with BCrypt
- HTTPS enforcement
- CORS configuration
- SQL injection prevention

**NFR3: Documentation**
- Swagger UI for API exploration
- XML documentation comments
- Comprehensive README
- API versioning support

**NFR4: Testing**
- Unit tests for business logic (>80% coverage)
- Integration tests for API endpoints
- Test fixtures and mocking

**NFR5: Code Quality**
- Follow .NET coding conventions
- Use dependency injection
- Implement repository pattern
- Use DTOs for data transfer

## Implementation Details

### Technology Stack
- .NET 8
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server / SQLite
- JWT Authentication
- AutoMapper
- FluentValidation
- Swashbuckle (Swagger)
- xUnit & Moq

### Project Structure
```
src/
├── ProductCatalog.API/
│   ├── Controllers/
│   │   ├── ProductsController.cs
│   │   └── AuthController.cs
│   ├── Models/
│   │   ├── Product.cs
│   │   ├── User.cs
│   │   └── Category.cs
│   ├── DTOs/
│   │   ├── ProductDto.cs
│   │   ├── CreateProductDto.cs
│   │   ├── UpdateProductDto.cs
│   │   ├── LoginDto.cs
│   │   └── RegisterDto.cs
│   ├── Services/
│   │   ├── IProductService.cs
│   │   ├── ProductService.cs
│   │   ├── IAuthService.cs
│   │   └── AuthService.cs
│   ├── Repositories/
│   │   ├── IProductRepository.cs
│   │   └── ProductRepository.cs
│   ├── Data/
│   │   └── ApplicationDbContext.cs
│   ├── Middleware/
│   │   └── ExceptionMiddleware.cs
│   ├── Helpers/
│   │   └── JwtHelper.cs
│   └── Program.cs
└── ProductCatalog.Tests/
    ├── Controllers/
    │   └── ProductsControllerTests.cs
    └── Services/
        └── ProductServiceTests.cs
```

### API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | /api/auth/register | No | Register new user |
| POST | /api/auth/login | No | Login and get JWT |
| POST | /api/products | Admin | Create product |
| GET | /api/products | No | Get all products |
| GET | /api/products/{id} | No | Get product by ID |
| GET | /api/products/category/{category} | No | Get by category |
| PUT | /api/products/{id} | Admin | Update product |
| DELETE | /api/products/{id} | Admin | Delete product |

### Sample Request/Response

**Register User (POST /api/auth/register):**
```json
Request:
{
  "username": "john.doe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "role": "User"
}

Response (200 OK):
{
  "message": "User registered successfully",
  "userId": "123e4567-e89b-12d3-a456-426614174000"
}
```

**Create Product (POST /api/products):**
```json
Request:
{
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 1299.99,
  "category": "Electronics",
  "stockQuantity": 50
}

Response (201 Created):
{
  "id": 1,
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 1299.99,
  "category": "Electronics",
  "stockQuantity": 50,
  "createdAt": "2026-06-06T12:00:00Z",
  "updatedAt": "2026-06-06T12:00:00Z"
}
```

## Testing Strategy

### Unit Tests
- Service layer business logic
- Repository operations
- JWT token generation/validation
- Validation rules
- AutoMapper profiles

### Integration Tests
- API endpoint testing
- Database operations
- Authentication flow
- Authorization rules
- Error handling

### Test Coverage Goals
- Service layer: >85%
- Controller layer: >75%
- Overall: >80%

## Learning Objectives

After completing this sample, developers will understand:
1. ASP.NET Core Web API architecture
2. Entity Framework Core for data access
3. JWT authentication implementation
4. Role-based authorization
5. Input validation strategies
6. Exception handling middleware
7. Dependency injection in .NET
8. API documentation with Swagger
9. Testing ASP.NET Core APIs
10. OpenSpec integration with .NET

## Prerequisites

- .NET 8 SDK installed
- Visual Studio 2022, VS Code, or Rider
- SQL Server or SQLite
- Postman or similar API testing tool
- Basic understanding of C# and REST APIs
- OpenSpec CLI (optional)

## Success Criteria

The sample is successful if:
1. All API endpoints function correctly
2. Authentication and authorization work properly
3. Tests pass with >80% coverage
4. Swagger documentation is complete
5. Code follows .NET best practices
6. New developers can run the project in under 10 minutes

## Future Enhancements

Potential extensions for learners:
1. Add refresh token functionality
2. Implement product reviews and ratings
3. Add image upload for products
4. Create shopping cart functionality
5. Implement order management
6. Add email notifications
7. Implement caching with Redis
8. Deploy to Azure App Service

---

**Difficulty Level**: Beginner  
**Estimated Time**: 2-3 hours  
**Topics**: ASP.NET Core, Entity Framework, JWT, SQL Server