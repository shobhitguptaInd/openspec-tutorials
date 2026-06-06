# Event-Driven System (Java)

Advanced Kafka-based event processing system with multiple consumers and producers.

## 🎯 Overview

This advanced sample demonstrates:
- Event-driven architecture with Apache Kafka
- Event sourcing patterns
- CQRS (Command Query Responsibility Segregation)
- Multiple producers and consumers
- Event schema management
- Error handling and dead letter queues

## 📋 Prerequisites

- Java 17+
- Apache Kafka 3.x
- Docker and Docker Compose
- Understanding of event-driven architecture
- Maven 3.6+

## 🚀 Quick Start

```bash
git clone https://github.com/shobhitguptaInd/openspec-tutorials.git
cd openspec-tutorials/java/event-driven-system

# Start Kafka with Docker Compose
docker-compose up -d

# Build and run the application
mvn clean install
mvn spring-boot:run
```

## 📖 Components

- **Order Service**: Publishes order events
- **Inventory Service**: Consumes order events, updates inventory
- **Notification Service**: Sends notifications for order events
- **Analytics Service**: Processes events for analytics

## 📖 What You'll Learn

- Kafka producer and consumer setup
- Event schema design
- Event sourcing implementation
- CQRS pattern
- Saga pattern for distributed transactions
- OpenSpec for event-driven systems

---

**Difficulty:** Advanced | **Time:** 5-6 hours | **Topics:** Kafka, Event Sourcing, CQRS, Spring Boot

Made with ❤️ by the OpenSpec Community