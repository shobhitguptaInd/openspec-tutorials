# Azure Cloud Integration (.NET)

Advanced .NET application deployed to Azure with full cloud services integration.

## 🎯 Overview

This advanced sample demonstrates:
- Azure App Service deployment
- Azure Blob Storage for file storage
- Azure Key Vault for secrets management
- Azure SQL Database
- Azure Application Insights for monitoring
- Azure Service Bus for messaging
- CI/CD with Azure DevOps

## 📋 Prerequisites

- .NET 8 SDK
- Azure subscription
- Azure CLI installed
- Visual Studio 2022 or VS Code
- Understanding of cloud concepts

## 🚀 Quick Start

```bash
git clone https://github.com/shobhitguptaInd/openspec-tutorials.git
cd openspec-tutorials/dotnet/azure-cloud-integration

# Login to Azure
az login

# Create Azure resources
./scripts/setup-azure.sh

# Configure app settings
cp appsettings.example.json appsettings.json
# Update with your Azure resource details

# Run locally
dotnet run
```

## 📖 Azure Services Used

- **App Service**: Web application hosting
- **SQL Database**: Relational data storage
- **Blob Storage**: File and media storage
- **Key Vault**: Secure secrets management
- **Application Insights**: Monitoring and diagnostics
- **Service Bus**: Asynchronous messaging

## 📖 What You'll Learn

- Azure service integration
- Managed identities
- Secrets management with Key Vault
- Blob storage operations
- Application monitoring
- CI/CD pipelines
- OpenSpec for cloud applications

---

**Difficulty:** Advanced | **Time:** 5-6 hours | **Topics:** Azure, App Service, Blob Storage, Key Vault

Made with ❤️ by the OpenSpec Community