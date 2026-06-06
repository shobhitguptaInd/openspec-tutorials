# COBOL-Java Integration

Advanced integration example showing mainframe COBOL calling Java microservices.

## 🎯 Overview

This advanced sample demonstrates:
- Mainframe COBOL to Java REST API integration
- Message queue communication (MQ)
- Data transformation between COBOL and JSON
- Error handling across platforms
- Security and authentication
- Performance optimization

## 📋 Prerequisites

- IBM COBOL or GnuCOBOL
- Java 17+
- IBM MQ or RabbitMQ
- Understanding of both COBOL and Java
- REST API concepts

## 🚀 Quick Start

```bash
git clone https://github.com/shobhitguptaInd/openspec-tutorials.git
cd openspec-tutorials/multi-language/cobol-java-integration

# Start Java microservice
cd java-service
mvn spring-boot:run &

# Compile and run COBOL program
cd ../cobol-client
cobc -x -o client src/RESTCLIENT.cbl
./client
```

## 📖 Architecture

```
┌─────────────┐         ┌──────────────┐
│   COBOL     │  HTTP   │    Java      │
│  Mainframe  │ ──────> │ Microservice │
│   Program   │ <────── │   REST API   │
└─────────────┘         └──────────────┘
```

## 📖 What You'll Learn

- COBOL HTTP client implementation
- REST API consumption from COBOL
- Data format conversion (COBOL ↔ JSON)
- Cross-platform error handling
- Integration patterns
- OpenSpec for multi-language systems

---

**Difficulty:** Advanced | **Time:** 6-8 hours | **Topics:** COBOL, Java, REST, Integration

Made with ❤️ by the OpenSpec Community