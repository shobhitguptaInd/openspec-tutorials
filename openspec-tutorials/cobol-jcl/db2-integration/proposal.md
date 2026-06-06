# DB2 Integration - OpenSpec Proposal

## Problem Statement

Enterprise applications need to interact with DB2 databases from COBOL programs, performing CRUD operations, managing transactions, and handling errors effectively. Developers need a clear example of embedded SQL in COBOL with proper connection management and error handling.

## Solution Overview

A COBOL program demonstrating:
- Embedded SQL statements in COBOL
- DB2 database connectivity
- CRUD operations (Create, Read, Update, Delete)
- Cursor operations for result sets
- Transaction management (COMMIT/ROLLBACK)
- Comprehensive error handling with SQLCODE

## Requirements

### Functional Requirements

1. **Database Connection**
   - Connect to DB2 database
   - Handle connection errors
   - Disconnect cleanly

2. **Data Operations**
   - INSERT: Create new employee records
   - SELECT: Query employee data with cursors
   - UPDATE: Modify employee salaries
   - DELETE: Remove employee records

3. **Transaction Management**
   - COMMIT successful operations
   - ROLLBACK on errors
   - Maintain data integrity

4. **Error Handling**
   - Check SQLCODE after each operation
   - Display meaningful error messages
   - Handle SQL errors gracefully

### Non-Functional Requirements

1. **Performance**
   - Efficient cursor operations
   - Minimize database round trips
   - Proper index usage

2. **Reliability**
   - Consistent error handling
   - Transaction integrity
   - Clean resource cleanup

3. **Maintainability**
   - Clear SQL statements
   - Modular procedure design
   - Comprehensive comments

## Technical Design

### Database Schema

```sql
CREATE TABLE EMPLOYEE (
    EMP_ID      INTEGER NOT NULL PRIMARY KEY,
    EMP_NAME    VARCHAR(50) NOT NULL,
    EMP_DEPT    VARCHAR(20),
    EMP_SALARY  DECIMAL(9,2),
    HIRE_DATE   DATE
);
```

### Host Variables

```cobol
01  HV-EMPLOYEE.
    05  HV-EMP-ID           PIC 9(6).
    05  HV-EMP-NAME         PIC X(50).
    05  HV-EMP-DEPT         PIC X(20).
    05  HV-EMP-SALARY       PIC 9(7)V99.
    05  HV-EMP-HIRE-DATE    PIC X(10).
```

### Program Flow

```
MAIN-PROCEDURE
├── 100-CONNECT-DB2
├── 200-CREATE-SAMPLE-DATA
│   ├── INSERT employee records
│   └── COMMIT transaction
├── 300-QUERY-EMPLOYEES
│   ├── DECLARE cursor
│   ├── OPEN cursor
│   ├── FETCH records
│   └── CLOSE cursor
├── 400-UPDATE-SALARIES
│   ├── UPDATE records
│   └── COMMIT transaction
├── 500-DELETE-EMPLOYEE
│   ├── DELETE record
│   └── COMMIT transaction
└── 600-DISCONNECT-DB2
```

### SQL Operations

**INSERT Example:**
```cobol
EXEC SQL
    INSERT INTO EMPLOYEE
    (EMP_ID, EMP_NAME, EMP_DEPT, EMP_SALARY, HIRE_DATE)
    VALUES
    (:HV-EMP-ID, :HV-EMP-NAME, :HV-EMP-DEPT, 
     :HV-EMP-SALARY, :HV-EMP-HIRE-DATE)
END-EXEC
```

**SELECT with Cursor:**
```cobol
EXEC SQL
    DECLARE EMP_CURSOR CURSOR FOR
    SELECT EMP_ID, EMP_NAME, EMP_SALARY
    FROM EMPLOYEE
    ORDER BY EMP_ID
END-EXEC

EXEC SQL OPEN EMP_CURSOR END-EXEC

EXEC SQL
    FETCH EMP_CURSOR
    INTO :HV-CURSOR-EMP-ID,
         :HV-CURSOR-EMP-NAME,
         :HV-CURSOR-SALARY
END-EXEC
```

**UPDATE Example:**
```cobol
EXEC SQL
    UPDATE EMPLOYEE
    SET EMP_SALARY = EMP_SALARY * 1.05
    WHERE EMP_DEPT = 'Engineering'
END-EXEC
```

**DELETE Example:**
```cobol
EXEC SQL
    DELETE FROM EMPLOYEE
    WHERE EMP_ID = :HV-EMP-ID
END-EXEC
```

## Error Handling Strategy

### SQLCODE Values

- **0**: Successful execution
- **100**: No data found (end of cursor)
- **Negative**: Error occurred

### Error Handling Procedure

```cobol
900-CHECK-SQLCODE.
    MOVE SQLCODE TO WS-SQLCODE
    IF WS-SQLCODE NOT = 0
        DISPLAY "ERROR: SQL operation failed"
        DISPLAY "SQLCODE: " WS-SQLCODE
        DISPLAY "SQLERRM: " SQLERRMC
        EXEC SQL ROLLBACK END-EXEC
        STOP RUN
    END-IF.
```

## Implementation Steps

1. **Setup**
   - Include SQLCA (SQL Communication Area)
   - Define host variables
   - Set up working storage

2. **Connection Management**
   - Implement CONNECT statement
   - Add error checking
   - Implement DISCONNECT

3. **CRUD Operations**
   - Implement INSERT operations
   - Add SELECT with cursor
   - Implement UPDATE operations
   - Add DELETE operations

4. **Transaction Control**
   - Add COMMIT statements
   - Implement ROLLBACK on errors
   - Ensure transaction integrity

5. **Testing**
   - Test each operation
   - Verify error handling
   - Check transaction behavior

## Testing Strategy

### Test Cases

1. **Connection Test**
   - Successful connection
   - Connection failure handling

2. **INSERT Test**
   - Insert valid records
   - Handle duplicate keys
   - Verify COMMIT

3. **SELECT Test**
   - Query all records
   - Handle empty result set
   - Test cursor operations

4. **UPDATE Test**
   - Update specific records
   - Verify changes
   - Test WHERE clause

5. **DELETE Test**
   - Delete specific record
   - Handle non-existent records
   - Verify deletion

6. **Transaction Test**
   - Test COMMIT behavior
   - Test ROLLBACK on error
   - Verify data integrity

## Sample Output

```
DB2 Integration Program Starting...
Connecting to DB2...
Connected to DB2 successfully
Creating sample employee records...
Sample data created successfully

Querying all employees...
ID      Name                    Salary
------  ----------------------  -----------
100001  John Smith              $   75,000.00
100002  Jane Doe                $   68,000.00
100003  Bob Johnson             $   82,000.00

Total Employees: 3
Average Salary: $   75,000.00

Updating salaries (5% increase for Engineering)...
Salaries updated successfully

Deleting employee 100002...
Employee deleted successfully

Disconnecting from DB2...
Disconnected successfully
Program completed successfully
```

## Prerequisites

- IBM COBOL compiler or GnuCOBOL with ESQL support
- DB2 database (v9.7 or higher)
- DB2 precompiler
- COBOL-DB2 development environment

## Build Process

```bash
# Precompile COBOL with embedded SQL
db2 prep src/DB2PROG.sqb bindfile

# Compile the program
cobc -x -o db2prog src/DB2PROG.cbl

# Bind the package
db2 bind DB2PROG.bnd

# Run the program
./db2prog
```

## Success Criteria

1. ✅ Successful DB2 connection
2. ✅ All CRUD operations work correctly
3. ✅ Cursor operations handle data properly
4. ✅ Transactions commit/rollback correctly
5. ✅ Error handling works as expected
6. ✅ Clean disconnection
7. ✅ No memory leaks
8. ✅ Code follows standards

## Future Enhancements

1. **Advanced Queries**: JOIN operations, subqueries
2. **Stored Procedures**: Call DB2 stored procedures
3. **Batch Operations**: Process multiple records efficiently
4. **Connection Pooling**: Reuse connections
5. **Performance Monitoring**: Track SQL execution times
6. **Dynamic SQL**: Build SQL statements at runtime
7. **Error Recovery**: Implement retry logic
8. **Logging**: Comprehensive operation logging

## References

- IBM DB2 for z/OS SQL Reference
- COBOL Programming Guide
- DB2 Application Programming Guide
- OpenSpec Documentation

---

**Version**: 1.0  
**Author**: OpenSpec Community  
**Last Updated**: 2026-06-06  
**Status**: Approved