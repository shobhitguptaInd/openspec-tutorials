# Exercise 1: Modify the Greeting Message

## Objective
Learn how to modify string constants and add date functionality to your COBOL program.

## Task
Modify the `HELLO.cbl` program to include the current date in the greeting message.

## Requirements
1. The greeting should include the current date in format: MM/DD/YYYY
2. The new greeting format should be: "Hello, [NAME]! Welcome to OpenSpec COBOL on [DATE]."
3. The program should still handle all input correctly

## Hints

### Hint 1: Getting the Current Date
COBOL provides the `ACCEPT` statement to get system information:
```cobol
01  WS-CURRENT-DATE.
    05  WS-YEAR         PIC 9(4).
    05  WS-MONTH        PIC 9(2).
    05  WS-DAY          PIC 9(2).

ACCEPT WS-CURRENT-DATE FROM DATE YYYYMMDD
```

### Hint 2: Formatting the Date
You'll need to format the date with slashes:
```cobol
01  WS-FORMATTED-DATE   PIC X(10).

STRING WS-MONTH DELIMITED BY SIZE
       "/" DELIMITED BY SIZE
       WS-DAY DELIMITED BY SIZE
       "/" DELIMITED BY SIZE
       WS-YEAR DELIMITED BY SIZE
       INTO WS-FORMATTED-DATE
END-STRING
```

### Hint 3: Updating the Greeting
Modify the `WS-GREETING-SUFFIX` to include the date:
```cobol
01  WS-GREETING-SUFFIX  PIC X(50).
```

And update the `CREATE-GREETING` paragraph to include the formatted date.

## Expected Output

If today is June 6, 2026, and the input file contains:
```
Alice
Bob
```

The output should be:
```
Hello, Alice! Welcome to OpenSpec COBOL on 06/06/2026.
Hello, Bob! Welcome to OpenSpec COBOL on 06/06/2026.
```

## Testing Your Solution

1. Compile your modified program:
   ```bash
   cobc -x -o hello-date src/HELLO.cbl
   ```

2. Run the program:
   ```bash
   ./hello-date
   ```

3. Check the output:
   ```bash
   cat OUTPUT.TXT
   ```

## Bonus Challenge
Add the current time to the greeting as well!

Format: "Hello, [NAME]! Welcome to OpenSpec COBOL on [DATE] at [TIME]."

**Hint:** Use `ACCEPT WS-TIME FROM TIME`

## Solution
See `solutions/exercise-1-solution.cbl` for the complete solution.

---

**Difficulty:** Easy  
**Estimated Time:** 15-20 minutes  
**Topics:** Date handling, String manipulation