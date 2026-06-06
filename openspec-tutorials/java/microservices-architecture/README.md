# Microservices Architecture (Java)

Intermediate Spring Boot microservices application with service discovery and API gateway.

## 🎯 Overview

This intermediate sample demonstrates:
- Microservices architecture patterns
- Service discovery with Eureka
- API Gateway with Spring Cloud Gateway
- Inter-service communication
- Distributed configuration
- Load balancing

## 📋 Prerequisites

- Java 17+
- Maven 3.6+ or Gradle 7+
- Docker (optional, for containerization)
- Understanding of microservices concepts

## 🚀 Quick Start

```bash
git clone https://github.com/shobhitguptaInd/openspec-tutorials.git
cd openspec-tutorials/java/microservices-architecture

# Start Eureka Server
cd eureka-server && mvn spring-boot:run &

# Start API Gateway
cd api-gateway && mvn spring-boot:run &

# Start User Service
cd user-service && mvn spring-boot:run &

# Start Order Service
cd order-service && mvn spring-boot:run &
```

## 📖 Services

- **Eureka Server** (8761): Service registry
- **API Gateway** (8080): Entry point for all requests
- **User Service** (8081): User management
- **Order Service** (8082): Order processing

## 📖 What You'll Learn

- Microservices design patterns
- Service discovery and registration
- API Gateway pattern
- Circuit breaker with Resilience4j
- Distributed tracing
- OpenSpec for microservices

---

**Difficulty:** Intermediate | **Time:** 4-5 hours | **Topics:** Microservices, Spring Cloud, Eureka, API Gateway

Made with ❤️ by the OpenSpec Community