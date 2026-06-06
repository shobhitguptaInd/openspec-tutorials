# Contributing to OpenSpec Tutorials

Thank you for your interest in contributing to OpenSpec Tutorials! This document provides guidelines for contributing sample projects to help other developers learn OpenSpec.

## 🎯 What Makes a Good Sample Project

A good sample project should:

- **Solve a Real Problem**: Address a common development scenario or challenge
- **Be Well-Documented**: Include clear specifications and explanations
- **Follow Best Practices**: Demonstrate proper OpenSpec usage and coding standards
- **Be Complete**: Include all necessary files, tests, and documentation
- **Be Tested**: Work correctly and include validation tests
- **Be Educational**: Help others learn through clear examples and exercises

## 📋 Sample Project Structure

Each sample project should follow this structure:

```
project-name/
├── .openspec.yaml           # OpenSpec configuration
├── README.md                # Project documentation
├── proposal.md              # OpenSpec specification
├── src/                     # Source code
├── tests/                   # Test files
├── exercises/               # Practice exercises
│   ├── exercise-1.md
│   ├── exercise-2.md
│   └── solutions/
└── docs/                    # Additional documentation
    └── setup.md
```

## 📝 Required Files

### 1. README.md

Your README should include:

```markdown
# Project Name

Brief description of what this sample demonstrates.

## 🎯 Learning Objectives

- Objective 1
- Objective 2
- Objective 3

## 📋 Prerequisites

- Requirement 1
- Requirement 2

## 🚀 Quick Start

\`\`\`bash
# Setup commands
\`\`\`

## 📖 Tutorial

Step-by-step guide...

## ✅ Running Tests

\`\`\`bash
# Test commands
\`\`\`

## 🎯 Exercises

Links to exercise files...

## 📚 Additional Resources

- Link 1
- Link 2
```

### 2. proposal.md

Follow the OpenSpec proposal format:

```markdown
# Project Name

## Problem Statement

Describe the problem this project solves...

## Proposed Solution

Explain the solution approach...

## Requirements

### Functional Requirements
- FR1: Description
- FR2: Description

### Non-Functional Requirements
- NFR1: Description
- NFR2: Description

## Implementation Details

Technical details...

## Testing Strategy

How to validate the implementation...
```

### 3. .openspec.yaml

Include OpenSpec configuration:

```yaml
version: 1.0
project:
  name: project-name
  description: Brief description
  language: [language]
  
specs:
  - path: proposal.md
    type: proposal
```

## 🔄 Contribution Process

### 1. Fork and Clone

```bash
git clone https://github.com/YOUR_USERNAME/openspec-tutorials.git
cd openspec-tutorials
```

### 2. Create a Branch

```bash
git checkout -b feature/your-sample-name
```

### 3. Create Your Sample

Follow the structure outlined above. Place your sample in the appropriate category:

- `cobol-jcl/` - COBOL and JCL samples
- `java/` - Java samples
- `.net/` - .NET samples
- `multi-language/` - Multi-language integration samples

### 4. Test Your Sample

Ensure your sample:
- Runs without errors
- Passes all tests
- Follows the documented setup process
- Works on a clean environment

### 5. Document Your Sample

- Write clear, comprehensive documentation
- Include code comments
- Provide exercise solutions
- Add troubleshooting tips

### 6. Submit a Pull Request

1. Commit your changes:
```bash
git add .
git commit -m "Add [Sample Name] sample project"
```

2. Push to your fork:
```bash
git push origin feature/your-sample-name
```

3. Open a Pull Request on GitHub with:
   - Clear title describing the sample
   - Description of what the sample demonstrates
   - Any special setup requirements
   - Screenshots or demos (if applicable)

## ✅ Pull Request Checklist

Before submitting, ensure:

- [ ] Sample follows the required structure
- [ ] All required files are included
- [ ] Code is well-commented
- [ ] Tests pass successfully
- [ ] README is complete and clear
- [ ] proposal.md follows OpenSpec format
- [ ] No sensitive information (API keys, passwords, etc.)
- [ ] License information is included
- [ ] Sample works on a clean environment
- [ ] Exercises have solutions
- [ ] Links and references are valid

## 🎨 Code Style Guidelines

### General
- Use meaningful variable and function names
- Add comments for complex logic
- Follow language-specific conventions
- Keep functions small and focused

### COBOL
- Use standard COBOL naming conventions
- Include proper division structure
- Document copybooks and includes

### Java
- Follow Java naming conventions
- Use proper package structure
- Include JavaDoc comments

### .NET
- Follow C# coding conventions
- Use proper namespace organization
- Include XML documentation comments

## 📊 Difficulty Levels

Classify your sample appropriately:

- **🟢 Beginner**: Basic concepts, minimal setup, clear learning path
- **🟡 Intermediate**: Multiple concepts, moderate complexity, some prerequisites
- **🔴 Advanced**: Complex scenarios, extensive setup, advanced topics

## 🐛 Reporting Issues

Found a problem with an existing sample?

1. Check if an issue already exists
2. Create a new issue with:
   - Sample name
   - Problem description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details

## 💡 Suggesting Improvements

Have ideas for improving samples?

1. Open a GitHub Discussion
2. Describe your suggestion
3. Explain the benefits
4. Provide examples if possible

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn
- Follow community guidelines

## 📞 Getting Help

Need help with your contribution?

- **Questions**: Open a GitHub Discussion
- **Issues**: Create a GitHub Issue
- **Chat**: Join our Discord community
- **Email**: contact@openspec.dev

## 🎉 Recognition

Contributors will be:
- Listed in the project README
- Credited in the sample documentation
- Recognized in release notes

Thank you for contributing to OpenSpec Tutorials! Your samples help developers worldwide learn specification-driven development.

---

Made with ❤️ by the OpenSpec Community