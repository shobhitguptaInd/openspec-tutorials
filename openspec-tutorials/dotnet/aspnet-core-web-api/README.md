# ASP.NET Core Web API - Product Catalog

A complete ASP.NET Core Web API demonstrating CRUD operations, JWT authentication, Entity Framework Core, and OpenSpec integration.

## 🎯 Learning Objectives

- Build RESTful APIs with ASP.NET Core
- Implement JWT authentication and authorization
- Use Entity Framework Core for data access
- Apply input validation and error handling
- Document APIs with Swagger
- Write unit and integration tests
- Integrate OpenSpec specifications

## 📋 Prerequisites

- **.NET 8 SDK** installed
- **Visual Studio 2022**, **VS Code**, or **Rider**
- **SQL Server** or **SQLite**
- **Postman** or similar API testing tool
- Basic understanding of C# and REST APIs
- **OpenSpec CLI** (optional)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/shobhitguptaInd/openspec-tutorials.git
cd openspec-tutorials/dotnet/aspnet-core-web-api
```

### 2. Restore Dependencies

```bash
dotnet restore
```

### 3. Update Database Connection

Edit `appsettings.json` to configure your database connection:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=products.db"
  }
}
```

### 4. Run Migrations

```bash
dotnet ef database update
```

### 5. Run the Application

```bash
dotnet run
```

The API will start on `https://localhost:5001` (HTTPS) and `http://localhost:5000` (HTTP)

### 6. Access Swagger UI

Open your browser and navigate to:
```
https://localhost:5001/swagger
```

## 📖 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login and get JWT token | No |

### Products

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/products` | Create new product | Admin |
| GET | `/api/products` | Get all products | No |
| GET | `/api/products/{id}` | Get product by ID | No |
| GET | `/api/products/category/{category}` | Get products by category | No |
| PUT | `/api/products/{id}` | Update product | Admin |
| DELETE | `/api/products/{id}` | Delete product | Admin |

## 🔐 Authentication Flow

### 1. Register a User

```bash
curl -X POST https://localhost:5001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@example.com",
    "password": "Admin123!",
    "role": "Admin"
  }'
```

### 2. Login

```bash
curl -X POST https://localhost:5001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "Admin123!"
  }'
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiration": "2026-06-07T12:00:00Z"
}
```

### 3. Use Token in Requests

```bash
curl -X POST https://localhost:5001/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "name": "Laptop",
    "description": "High-performance laptop",
    "price": 1299.99,
    "category": "Electronics",
    "stockQuantity": 50
  }'
```

## 📦 Project Structure

```
ProductCatalog.API/
├── Controllers/
│   ├── ProductsController.cs      # Product endpoints
│   └── AuthController.cs          # Authentication endpoints
├── Models/
│   ├── Product.cs                 # Product entity
│   ├── User.cs                    # User entity
│   └── Category.cs                # Category enum
├── DTOs/
│   ├── ProductDto.cs              # Product response DTO
│   ├── CreateProductDto.cs        # Create product request
│   ├── UpdateProductDto.cs        # Update product request
│   ├── LoginDto.cs                # Login request
│   └── RegisterDto.cs             # Register request
├── Services/
│   ├── IProductService.cs         # Product service interface
│   ├── ProductService.cs          # Product service implementation
│   ├── IAuthService.cs            # Auth service interface
│   └── AuthService.cs             # Auth service implementation
├── Repositories/
│   ├── IProductRepository.cs      # Repository interface
│   └── ProductRepository.cs       # Repository implementation
├── Data/
│   └── ApplicationDbContext.cs    # EF Core DbContext
├── Middleware/
│   └── ExceptionMiddleware.cs     # Global exception handler
├── Helpers/
│   └── JwtHelper.cs               # JWT token helper
├── appsettings.json               # Configuration
└── Program.cs                     # Application entry point
```

## 🔧 Configuration

### JWT Settings (appsettings.json)

```json
{
  "Jwt": {
    "Key": "YourSuperSecretKeyHere_MustBe32CharactersOrMore",
    "Issuer": "ProductCatalogAPI",
    "Audience": "ProductCatalogClients",
    "ExpirationInMinutes": 60
  }
}
```

### Database Configuration

**SQLite (Development):**
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=products.db"
  }
}
```

**SQL Server (Production):**
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=ProductCatalog;Trusted_Connection=True;TrustServerCertificate=True"
  }
}
```

## ✅ Testing

### Run All Tests

```bash
dotnet test
```

### Run with Coverage

```bash
dotnet test /p:CollectCoverage=true /p:CoverletOutputFormat=opencover
```

### Sample Test

```csharp
[Fact]
public async Task CreateProduct_ReturnsCreatedProduct()
{
    // Arrange
    var createDto = new CreateProductDto
    {
        Name = "Test Product",
        Price = 99.99m,
        Category = Category.Electronics,
        StockQuantity = 10
    };

    // Act
    var result = await _controller.CreateProduct(createDto);

    // Assert
    var createdResult = Assert.IsType<CreatedAtActionResult>(result);
    var product = Assert.IsType<ProductDto>(createdResult.Value);
    Assert.Equal("Test Product", product.Name);
}
```

## 🎯 Exercises

### Exercise 1: Add Product Search
Implement a search endpoint that finds products by name or description.

**Endpoint:** `GET /api/products/search?query={query}`

### Exercise 2: Add Product Reviews
Create a review system for products with ratings and comments.

**Endpoints:**
- `POST /api/products/{id}/reviews`
- `GET /api/products/{id}/reviews`

### Exercise 3: Implement Caching
Add response caching for frequently accessed endpoints.

### Exercise 4: Add Refresh Tokens
Implement refresh token functionality for better security.

## 🐛 Troubleshooting

### Database Migration Issues
```bash
# Remove existing migrations
dotnet ef migrations remove

# Create new migration
dotnet ef migrations add InitialCreate

# Update database
dotnet ef database update
```

### Port Already in Use
Change the port in `Properties/launchSettings.json`:
```json
{
  "applicationUrl": "https://localhost:5002;http://localhost:5001"
}
```

### JWT Token Issues
Ensure the JWT key in `appsettings.json` is at least 32 characters long.

## 📚 Additional Resources

- [ASP.NET Core Documentation](https://docs.microsoft.com/aspnet/core)
- [Entity Framework Core](https://docs.microsoft.com/ef/core)
- [JWT Authentication](https://jwt.io/)
- [Swagger/OpenAPI](https://swagger.io/)
- [OpenSpec Documentation](https://github.com/shobhitguptaInd/OpenSpec)

## 🤝 Contributing

Found an issue or have an improvement? Please open an issue or submit a pull request!

## 📄 License

This sample project is part of the OpenSpec Tutorials repository and is licensed under the MIT License.

---

**Next Steps:**
- Try the [Clean Architecture Template](../clean-architecture-template) sample (Intermediate)
- Explore [Azure Cloud Integration](../azure-cloud-integration) sample (Advanced)
- Check out [Java samples](../../java/) for cross-platform learning

Made with ❤️ by the OpenSpec Community