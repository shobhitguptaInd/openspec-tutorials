# E-Commerce Platform (Java)

Advanced full-featured e-commerce backend with payment integration and comprehensive features.

## 🎯 Overview

This advanced sample demonstrates:
- Complete e-commerce backend architecture
- Product catalog management
- Shopping cart and checkout
- Payment gateway integration (Stripe)
- Order management system
- User authentication and authorization
- Redis caching for performance

## 📋 Prerequisites

- Java 17+
- PostgreSQL database
- Redis server
- Stripe account (for payment testing)
- Docker and Docker Compose
- Maven 3.6+

## 🚀 Quick Start

```bash
git clone https://github.com/shobhitguptaInd/openspec-tutorials.git
cd openspec-tutorials/java/e-commerce-platform

# Start dependencies with Docker Compose
docker-compose up -d

# Configure environment variables
cp .env.example .env
# Edit .env with your Stripe API keys

# Build and run
mvn clean install
mvn spring-boot:run
```

## 📖 Features

- **Product Management**: CRUD operations for products
- **Shopping Cart**: Add/remove items, calculate totals
- **Checkout**: Multi-step checkout process
- **Payment Processing**: Stripe integration
- **Order Management**: Track order status
- **User Management**: Registration, login, profiles
- **Admin Dashboard**: Manage products and orders

## 📖 What You'll Learn

- E-commerce architecture patterns
- Payment gateway integration
- Shopping cart implementation
- Order processing workflows
- Caching strategies with Redis
- Security best practices
- OpenSpec for complex systems

---

**Difficulty:** Advanced | **Time:** 6-8 hours | **Topics:** Spring Boot, PostgreSQL, Redis, Payment Gateway

Made with ❤️ by the OpenSpec Community