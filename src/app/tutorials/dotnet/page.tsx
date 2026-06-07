export default function DotNetTutorial() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-4xl mb-4 block">🔷</span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">.NET with OpenSpec</h1>
        <p className="text-xl text-gray-600">
          Build enterprise .NET applications with spec-driven development
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            This tutorial teaches you how to use OpenSpec for .NET development, covering ASP.NET Core, 
            Entity Framework, and Azure integration. You'll learn to specify web APIs, data access patterns, 
            and cloud deployments.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <p className="text-gray-800">
              <strong>Prerequisites:</strong> .NET 8+, Visual Studio or VS Code, C# knowledge, 
              and OpenSpec CLI installed.
            </p>
          </div>
        </section>

        {/* Module 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 1: Setup & Configuration</h2>
          <p className="text-gray-700 mb-4">Duration: 30 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Configure OpenSpec for .NET</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-sm">{`# openspec/config.yaml
project:
  name: "Enterprise .NET Application"
  language: csharp
  framework: aspnet-core
  version: "8.0"
  
conventions:
  naming:
    namespaces: "Company.Project.Module"
    classes: "PascalCase"
    methods: "PascalCase"
    properties: "PascalCase"
  
tools:
  - name: ".NET SDK"
    version: "8.0"
  - name: "Entity Framework Core"
    version: "8.0"
  - name: "SQL Server"
    version: "2022"`}</pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Project Structure</h3>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800">{`YourDotNetProject/
├── openspec/
│   ├── config.yaml
│   ├── changes/
│   └── specs/
├── src/
│   ├── YourProject.Api/
│   ├── YourProject.Core/
│   ├── YourProject.Infrastructure/
│   └── YourProject.Tests/
├── YourProject.sln
└── README.md`}</pre>
          </div>
        </section>

        {/* Module 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 2: ASP.NET Core Basics</h2>
          <p className="text-gray-700 mb-4">Duration: 45 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Example: Product Catalog API</h3>
          <p className="text-gray-700 mb-4">Create a specification for a Web API:</p>
          
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <code>openspec change create product-catalog-api</code>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">{`# Product Catalog API

## Problem
Need a RESTful Web API to manage product catalog with 
search, filtering, and pagination capabilities.

## Solution
Create ASP.NET Core Web API with:
- Product entity and DbContext
- API controllers with endpoints
- Data validation with FluentValidation
- Global exception handling
- Swagger/OpenAPI documentation
- Response caching

## Requirements
- REQ-1: GET /api/products - List products with pagination
- REQ-2: GET /api/products/{id} - Get product by ID
- REQ-3: POST /api/products - Create new product
- REQ-4: PUT /api/products/{id} - Update product
- REQ-5: DELETE /api/products/{id} - Delete product
- REQ-6: GET /api/products/search - Search products
- REQ-7: Validate SKU uniqueness
- REQ-8: Support filtering by category and price range

## API Specification

### Product Model
\`\`\`csharp
public class Product
{
    public int Id { get; set; }
    public string Sku { get; set; }  // Required, unique
    public string Name { get; set; }  // Required
    public string Description { get; set; }
    public decimal Price { get; set; }  // Required, > 0
    public int CategoryId { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
}
\`\`\`

### Endpoints

#### GET /api/products
Query Parameters:
- page: int (default: 1)
- pageSize: int (default: 20, max: 100)
- categoryId: int (optional)
- minPrice: decimal (optional)
- maxPrice: decimal (optional)

Response: 200 OK
\`\`\`json
{
  "items": [...],
  "totalCount": 150,
  "page": 1,
  "pageSize": 20,
  "totalPages": 8
}
\`\`\`

#### POST /api/products
Request Body:
\`\`\`json
{
  "sku": "PROD-001",
  "name": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "categoryId": 1
}
\`\`\`
Response: 201 Created

### Error Handling
- 400 Bad Request: Validation errors
- 404 Not Found: Product not found
- 409 Conflict: SKU already exists
- 500 Internal Server Error: Server error`}</pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Working with Bob</h3>
          <div className="bg-blue-50 border-l-4 border-primary-500 p-6 mb-6">
            <p className="text-gray-800 mb-3">
              <strong>Prompt for Bob:</strong>
            </p>
            <p className="text-gray-700 italic">
              "Bob, please implement the Product Catalog API according to the specification in 
              openspec/changes/product-catalog-api/proposal.md. Use ASP.NET Core 8, Entity Framework Core, 
              FluentValidation, and include proper error handling and Swagger documentation."
            </p>
          </div>
        </section>

        {/* Module 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 3: Entity Framework & Data Access</h2>
          <p className="text-gray-700 mb-4">Duration: 45 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">DbContext Specification</h3>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">{`## Data Model Specification

### Entities
1. Product
   - Primary Key: Id
   - Unique Index: Sku
   - Foreign Key: CategoryId -> Category.Id

2. Category
   - Primary Key: Id
   - Unique Index: Name

3. ProductImage
   - Primary Key: Id
   - Foreign Key: ProductId -> Product.Id

### Relationships
- Category has many Products (one-to-many)
- Product has many ProductImages (one-to-many)
- Product has one Category (many-to-one)

### DbContext Configuration
- Connection string from appsettings.json
- Enable lazy loading proxies
- Configure cascade delete for ProductImages
- Seed initial categories

### Migrations
- Initial migration: CreateProductCatalogSchema
- Add indexes for performance
- Add audit columns (CreatedAt, UpdatedAt)`}</pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Repository Pattern</h3>
          <p className="text-gray-700 mb-4">
            Specify repository interfaces and implementations:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Generic repository for common operations</li>
            <li>Specific repositories for complex queries</li>
            <li>Unit of Work pattern for transactions</li>
            <li>Async/await for all database operations</li>
          </ul>
        </section>

        {/* Module 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 4: Authentication & Authorization</h2>
          <p className="text-gray-700 mb-4">Duration: 30 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">JWT Authentication Specification</h3>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">{`## Authentication System

### Requirements
- JWT-based authentication
- Role-based authorization
- Refresh token support
- Password hashing with BCrypt
- Account lockout after failed attempts

### Endpoints
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/refresh
- POST /api/auth/logout

### JWT Configuration
- Issuer: your-app-name
- Audience: your-app-api
- Expiration: 15 minutes (access token)
- Expiration: 7 days (refresh token)
- Signing key: from configuration

### Authorization Policies
- AdminOnly: Requires Admin role
- ManagerOrAdmin: Requires Manager or Admin role
- AuthenticatedUser: Any authenticated user`}</pre>
          </div>
        </section>

        {/* Module 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 5: Azure Integration</h2>
          <p className="text-gray-700 mb-4">Duration: 30 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Azure Services Specification</h3>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">{`## Azure Integration

### Services Used
1. Azure App Service
   - Hosting: Web API
   - Tier: Standard S1
   - Auto-scaling: CPU > 70%

2. Azure SQL Database
   - Tier: Standard S2
   - Backup: Daily
   - Geo-replication: Enabled

3. Azure Blob Storage
   - Container: product-images
   - Access: Private
   - CDN: Enabled

4. Azure Key Vault
   - Secrets: Connection strings, API keys
   - Access: Managed Identity

5. Application Insights
   - Telemetry: Enabled
   - Alerts: Error rate > 5%

### Configuration
- Use Azure App Configuration
- Managed Identity for authentication
- Environment-specific settings`}</pre>
          </div>
        </section>

        {/* Module 6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 6: Legacy Modernization</h2>
          <p className="text-gray-700 mb-4">Duration: 30 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Migrating from .NET Framework</h3>
          <p className="text-gray-700 mb-4">
            Specify migration strategy from .NET Framework to .NET 8:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Identify dependencies and compatibility</li>
            <li>Replace incompatible libraries</li>
            <li>Update configuration system</li>
            <li>Migrate from System.Web to ASP.NET Core</li>
            <li>Update dependency injection</li>
            <li>Modernize authentication/authorization</li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">{`## Migration Specification

### Phase 1: Assessment
- Analyze existing codebase
- Identify breaking changes
- Document dependencies
- Create migration plan

### Phase 2: Infrastructure
- Set up .NET 8 project structure
- Configure build pipeline
- Set up testing environment

### Phase 3: Code Migration
- Migrate models and DTOs
- Update data access layer
- Migrate business logic
- Update API controllers

### Phase 4: Testing & Validation
- Unit tests
- Integration tests
- Performance testing
- User acceptance testing`}</pre>
          </div>
        </section>

        {/* Case Study */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Study: Enterprise .NET Application</h2>
          <p className="text-gray-700 mb-4">Duration: 45 minutes</p>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Scenario</h3>
            <p className="text-gray-800 mb-4">
              A financial services company needs to modernize their .NET Framework 4.8 application 
              to .NET 8, add new features, and deploy to Azure.
            </p>
            <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
            <p className="text-gray-800 mb-4">
              Migrate legacy code, maintain business continuity, add modern features (API, cloud integration), 
              and ensure security compliance.
            </p>
            <h4 className="font-semibold text-gray-900 mb-2">Solution with OpenSpec:</h4>
            <ol className="list-decimal pl-6 text-gray-800 space-y-2">
              <li>Document existing system with OpenSpec</li>
              <li>Create migration specifications</li>
              <li>Use Bob to assist with code migration</li>
              <li>Specify new features (REST API, Azure integration)</li>
              <li>Implement incrementally with Bob's help</li>
              <li>Validate against specifications</li>
              <li>Deploy to Azure with CI/CD pipeline</li>
            </ol>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/samples" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">📦 Sample Projects</h3>
              <p className="text-gray-600">Clone complete .NET examples</p>
            </a>
            <a href="/playground" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🎮 Try Playground</h3>
              <p className="text-gray-600">Practice .NET specs interactively</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

// Made with Bob
