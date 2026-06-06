# Hello OpenSpec COBOL

A beginner-friendly COBOL program demonstrating basic file I/O operations with OpenSpec specification-driven development.

## 🎯 Learning Objectives

After completing this tutorial, you will understand:

- Basic COBOL program structure (four divisions)
- File I/O operations in COBOL
- Working with sequential files
- String manipulation in COBOL
- Error handling basics
- How to integrate OpenSpec with COBOL projects
- Compiling and running COBOL programs

## 📋 Prerequisites

- **GnuCOBOL 3.x or higher** installed
  - Windows: Download from [GnuCOBOL Downloads](https://sourceforge.net/projects/gnucobol/)
  - Linux: `sudo apt-get install gnucobol` (Ubuntu/Debian) or `sudo yum install gnucobol` (RHEL/CentOS)
  - macOS: `brew install gnucobol`
- **Text editor** or IDE (VS Code, Notepad++, etc.)
- **OpenSpec CLI** installed (optional, for spec validation)
- Basic understanding of file systems

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/shobhitguptaInd/openspec-tutorials.git
cd openspec-tutorials/cobol-jcl/hello-openspec-cobol
```

### 2. Verify GnuCOBOL Installation

```bash
cobc --version
```

You should see output like:
```
cobc (GnuCOBOL) 3.x.x
```

### 3. Create Sample Input File

Create a file named `INPUT.TXT` with some names:

```bash
echo Alice > INPUT.TXT
echo Bob >> INPUT.TXT
echo Charlie >> INPUT.TXT
echo Diana >> INPUT.TXT
```

Or create it manually with your favorite text editor.

### 4. Compile the Program

```bash
cobc -x -o hello src/HELLO.cbl
```

**Flags explained:**
- `-x`: Create executable
- `-o hello`: Output file name
- `src/HELLO.cbl`: Source file

### 5. Run the Program

**Windows:**
```bash
.\hello.exe
```

**Linux/macOS:**
```bash
./hello
```

### 6. View the Output

```bash
cat OUTPUT.TXT
```

You should see:
```
Hello, Alice! Welcome to OpenSpec COBOL.
Hello, Bob! Welcome to OpenSpec COBOL.
Hello, Charlie! Welcome to OpenSpec COBOL.
Hello, Diana! Welcome to OpenSpec COBOL.
```

## 📖 Detailed Tutorial

### Understanding the Program Structure

COBOL programs are organized into four divisions:

#### 1. IDENTIFICATION DIVISION
```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-OPENSPEC.
AUTHOR. OpenSpec Community.
```
This section identifies the program and provides metadata.

#### 2. ENVIRONMENT DIVISION
```cobol
ENVIRONMENT DIVISION.
INPUT-OUTPUT SECTION.
FILE-CONTROL.
    SELECT INPUT-FILE ASSIGN TO "INPUT.TXT"
        ORGANIZATION IS LINE SEQUENTIAL
        FILE STATUS IS WS-INPUT-STATUS.
```
This section defines the environment, including file assignments and organization.

#### 3. DATA DIVISION
```cobol
DATA DIVISION.
FILE SECTION.
FD  INPUT-FILE.
01  INPUT-RECORD.
    05  INPUT-NAME          PIC X(50).
```
This section defines all data structures, including file records and working storage variables.

#### 4. PROCEDURE DIVISION
```cobol
PROCEDURE DIVISION.
MAIN-LOGIC.
    PERFORM INITIALIZE-PROGRAM
    PERFORM PROCESS-FILE
    PERFORM FINALIZE-PROGRAM
    STOP RUN.
```
This section contains the executable logic of the program.

### Key COBOL Concepts

#### File Operations

**Opening Files:**
```cobol
OPEN INPUT INPUT-FILE
OPEN OUTPUT OUTPUT-FILE
```

**Reading Records:**
```cobol
READ INPUT-FILE
    AT END
        MOVE 'Y' TO WS-EOF-FLAG
    NOT AT END
        ADD 1 TO WS-RECORD-COUNT
END-READ
```

**Writing Records:**
```cobol
WRITE OUTPUT-RECORD
```

**Closing Files:**
```cobol
CLOSE INPUT-FILE
CLOSE OUTPUT-FILE
```

#### String Manipulation

```cobol
STRING WS-GREETING-PREFIX DELIMITED BY SIZE
       INPUT-NAME DELIMITED BY "  "
       WS-GREETING-SUFFIX DELIMITED BY SIZE
       INTO OUTPUT-LINE
END-STRING
```

#### Error Handling

```cobol
IF WS-INPUT-STATUS NOT = "00"
    DISPLAY WS-ERROR-MSG
    DISPLAY "File Status: " WS-INPUT-STATUS
    MOVE 1 TO RETURN-CODE
    STOP RUN
END-IF
```

## ✅ Testing

### Test 1: Empty Input File

```bash
# Create empty input file
echo. > INPUT.TXT

# Run program
./hello

# Check output
cat OUTPUT.TXT
```

**Expected:** Empty output file, counter = 0

### Test 2: Single Name

```bash
echo John > INPUT.TXT
./hello
cat OUTPUT.TXT
```

**Expected:** `Hello, John! Welcome to OpenSpec COBOL.`

### Test 3: Multiple Names

```bash
echo Alice > INPUT.TXT
echo Bob >> INPUT.TXT
echo Charlie >> INPUT.TXT
./hello
cat OUTPUT.TXT
```

**Expected:** Three greetings

### Test 4: Special Characters

```bash
echo Mary-Jane > INPUT.TXT
echo O'Brien >> INPUT.TXT
./hello
cat OUTPUT.TXT
```

**Expected:** Greetings preserve hyphens and apostrophes

## 🎯 Exercises

### Exercise 1: Modify the Greeting
Change the greeting message to include the current date.

**Hint:** Use `ACCEPT WS-DATE FROM DATE` to get the current date.

### Exercise 2: Add Input Validation
Modify the program to skip empty lines in the input file.

**Hint:** Check if `INPUT-NAME` is all spaces before processing.

### Exercise 3: Count Statistics
Add counters to track:
- Total lines read
- Empty lines skipped
- Greetings written

### Exercise 4: Multiple Greeting Formats
Allow the user to choose between different greeting formats:
- Formal: "Dear [NAME], Welcome to OpenSpec COBOL."
- Casual: "Hi [NAME]! Welcome to OpenSpec COBOL."
- Professional: "Greetings, [NAME]. Welcome to OpenSpec COBOL."

**Solutions:** See the `exercises/solutions/` directory

## 🔧 Troubleshooting

### Problem: "cobc: command not found"
**Solution:** GnuCOBOL is not installed or not in PATH. Install GnuCOBOL and ensure it's in your system PATH.

### Problem: "Error: Unable to open input file"
**Solution:** Make sure `INPUT.TXT` exists in the same directory as the executable.

### Problem: Compilation errors
**Solution:** Check that you're using GnuCOBOL 3.x or higher. Some syntax may not work with older versions.

### Problem: Output file not created
**Solution:** Check file permissions in the directory. Ensure you have write access.

## 📚 Additional Resources

- [GnuCOBOL Programmer's Guide](https://gnucobol.sourceforge.io/guides.html)
- [COBOL Tutorial](https://www.tutorialspoint.com/cobol/index.htm)
- [OpenSpec Documentation](https://github.com/shobhitguptaInd/OpenSpec)
- [COBOL Best Practices](https://www.ibm.com/docs/en/cobol-zos)

## 🤝 Contributing

Found an issue or have an improvement? Please open an issue or submit a pull request!

## 📄 License

This sample project is part of the OpenSpec Tutorials repository and is licensed under the MIT License.

---

**Next Steps:**
- Try the [Batch Processing System](../batch-processing-system) sample (Intermediate)
- Explore [DB2 Integration](../db2-integration) sample (Advanced)
- Check out [Java samples](../../java/) for multi-language learning

Made with ❤️ by the OpenSpec Community