# Clean Architecture Template (.NET)

Intermediate enterprise application template following clean architecture principles.

## 🎯 Overview

This intermediate sample demonstrates:
- Clean Architecture layers (Domain, Application, Infrastructure, Presentation)
- CQRS pattern with MediatR
- Domain-Driven Design (DDD) principles
- Repository and Unit of Work patterns
- Dependency injection
- Comprehensive testing strategy

## 📋 Prerequisites

- .NET 8 SDK
- Visual Studio 2022 or Rider
- SQL Server or PostgreSQL
- Understanding of SOLID principles
- Familiarity with DDD concepts

## 🚀 Quick Start

```bash
git clone https://github.com/shobhitguptaInd/openspec-tutorials.git
cd openspec-tutorials/dotnet/clean-architecture-template

# Restore dependencies
dotnet restore

# Run migrations
dotnet ef database update --project src/Infrastructure

# Run the application
dotnet run --project src/WebAPI
```

## 📖 Architecture Layers

- **Domain**: Entities, value objects, domain events
- **Application**: Use cases, DTOs, interfaces
- **Infrastructure**: Data access, external services
- **WebAPI**: Controllers, middleware, configuration

## 📖 What You'll Learn

- Clean Architecture principles
- CQRS with MediatR
- Domain-Driven Design
- Repository pattern
- Unit of Work pattern
- Dependency inversion
- OpenSpec for enterprise apps

---

**Difficulty:** Intermediate | **Time:** 4-5 hours | **Topics:** Clean Architecture, CQRS, MediatR, DDD

Made with ❤️ by the OpenSpec Community