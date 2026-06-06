# Hello OpenSpec COBOL

## Problem Statement

New developers learning COBOL often struggle with:
- Understanding basic COBOL program structure
- Setting up a development environment
- Writing their first working COBOL program
- Integrating specification-driven development practices

This sample project addresses these challenges by providing a simple, well-documented "Hello World" style COBOL program that demonstrates OpenSpec integration from the ground up.

## Proposed Solution

Create a beginner-friendly COBOL program that:
1. Demonstrates basic COBOL syntax and structure
2. Reads input from a file
3. Processes the data
4. Writes output to another file
5. Includes comprehensive OpenSpec specifications
6. Provides step-by-step setup instructions

The program will greet users by reading names from an input file and writing personalized greetings to an output file, showcasing fundamental COBOL file I/O operations.

## Requirements

### Functional Requirements

**FR1: File Input Processing**
- The program shall read names from an input file (INPUT.TXT)
- Each line in the input file contains a single name
- The program shall handle up to 100 names

**FR2: Greeting Generation**
- For each name read, the program shall generate a personalized greeting
- Greeting format: "Hello, [NAME]! Welcome to OpenSpec COBOL."
- The greeting shall preserve the original case of the name

**FR3: File Output Generation**
- The program shall write all greetings to an output file (OUTPUT.TXT)
- Each greeting shall be on a separate line
- The output file shall be created if it doesn't exist

**FR4: Error Handling**
- The program shall handle missing input files gracefully
- The program shall report the number of names processed
- The program shall return appropriate status codes

**FR5: Program Structure**
- The program shall follow standard COBOL divisions (IDENTIFICATION, ENVIRONMENT, DATA, PROCEDURE)
- The program shall use meaningful variable names
- The program shall include inline comments

### Non-Functional Requirements

**NFR1: Portability**
- The program shall compile with GnuCOBOL 3.x or higher
- The program shall run on Windows, Linux, and macOS

**NFR2: Readability**
- Code shall be well-commented
- Variable names shall be descriptive
- Program structure shall be clear and logical

**NFR3: Performance**
- The program shall process 100 names in under 1 second
- Memory usage shall be minimal (< 1MB)

**NFR4: Documentation**
- Complete README with setup instructions
- Inline code comments explaining each section
- Example input and output files

## Implementation Details

### Program Structure

```
IDENTIFICATION DIVISION.
    PROGRAM-ID. HELLO-OPENSPEC.
    
ENVIRONMENT DIVISION.
    INPUT-OUTPUT SECTION.
        FILE-CONTROL.
            SELECT INPUT-FILE...
            SELECT OUTPUT-FILE...
            
DATA DIVISION.
    FILE SECTION.
        FD INPUT-FILE...
        FD OUTPUT-FILE...
    WORKING-STORAGE SECTION.
        01 WS-NAME...
        01 WS-GREETING...
        01 WS-COUNTER...
        
PROCEDURE DIVISION.
    MAIN-LOGIC.
        OPEN INPUT INPUT-FILE
        OPEN OUTPUT OUTPUT-FILE
        PERFORM READ-AND-PROCESS
        CLOSE INPUT-FILE
        CLOSE OUTPUT-FILE
        STOP RUN.
```

### File Formats

**Input File (INPUT.TXT):**
```
Alice
Bob
Charlie
```

**Output File (OUTPUT.TXT):**
```
Hello, Alice! Welcome to OpenSpec COBOL.
Hello, Bob! Welcome to OpenSpec COBOL.
Hello, Charlie! Welcome to OpenSpec COBOL.
```

### Key COBOL Concepts Demonstrated

1. **File I/O**: Reading from and writing to sequential files
2. **Data Division**: Defining file descriptions and working storage
3. **Procedure Division**: Main program logic and flow control
4. **PERFORM**: Looping and subroutine calls
5. **String Handling**: Concatenating strings for greetings

## Testing Strategy

### Unit Tests

1. **Test Empty Input File**
   - Input: Empty INPUT.TXT
   - Expected: Empty OUTPUT.TXT, counter = 0

2. **Test Single Name**
   - Input: One name in INPUT.TXT
   - Expected: One greeting in OUTPUT.TXT

3. **Test Multiple Names**
   - Input: Multiple names in INPUT.TXT
   - Expected: Corresponding greetings in OUTPUT.TXT

4. **Test Special Characters**
   - Input: Names with hyphens, apostrophes
   - Expected: Greetings preserve special characters

5. **Test Maximum Capacity**
   - Input: 100 names
   - Expected: 100 greetings, no errors

### Integration Tests

1. **End-to-End Test**
   - Run complete program with sample data
   - Verify output file contents
   - Check program exit status

2. **Error Handling Test**
   - Test with missing input file
   - Verify error message
   - Check graceful termination

## Learning Objectives

After completing this sample, developers will understand:

1. Basic COBOL program structure (four divisions)
2. File I/O operations in COBOL
3. Working with sequential files
4. String manipulation in COBOL
5. Error handling basics
6. How to integrate OpenSpec with COBOL projects
7. Compiling and running COBOL programs

## Prerequisites

- GnuCOBOL 3.x or higher installed
- Text editor or IDE
- Basic understanding of file systems
- OpenSpec CLI installed

## Success Criteria

The sample is successful if:
1. Program compiles without errors
2. All test cases pass
3. Documentation is clear and complete
4. New developers can set up and run the program in under 15 minutes
5. Code demonstrates COBOL best practices

## Future Enhancements

Potential extensions for learners:
1. Add input validation (check for empty names)
2. Support different greeting formats
3. Add date/time to greetings
4. Create a menu-driven interface
5. Add logging functionality
6. Support multiple input files

---

**Difficulty Level**: Beginner  
**Estimated Time**: 30-45 minutes  
**Topics**: COBOL, File I/O, Basic Specs