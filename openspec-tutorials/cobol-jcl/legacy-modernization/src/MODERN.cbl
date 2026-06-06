       IDENTIFICATION DIVISION.
       PROGRAM-ID. MODERN.
       AUTHOR. OpenSpec Community.
      *****************************************************************
      * MODERNIZED CUSTOMER PROCESSING PROGRAM                        *
      * Refactored version with improved structure and practices      *
      * Demonstrates best practices for COBOL modernization           *
      *****************************************************************
       
       ENVIRONMENT DIVISION.
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           SELECT CUSTOMER-FILE ASSIGN TO "CUSTOMER.DAT"
               ORGANIZATION IS LINE SEQUENTIAL
               FILE STATUS IS WS-CUSTOMER-STATUS.
           
           SELECT REPORT-FILE ASSIGN TO "REPORT.TXT"
               ORGANIZATION IS LINE SEQUENTIAL
               FILE STATUS IS WS-REPORT-STATUS.
       
       DATA DIVISION.
       FILE SECTION.
       FD  CUSTOMER-FILE.
       01  CUSTOMER-RECORD.
           05  CUST-ID             PIC 9(5).
           05  CUST-NAME           PIC X(30).
           05  CUST-BALANCE        PIC 9(7)V99.
           05  CUST-STATUS         PIC X.
               88  ACTIVE-CUSTOMER VALUE 'A'.
               88  INACTIVE-CUSTOMER VALUE 'I'.
           05  FILLER              PIC X(32).
       
       FD  REPORT-FILE.
       01  REPORT-RECORD           PIC X(80).
       
       WORKING-STORAGE SECTION.
      * File Status Codes
       01  WS-FILE-STATUS.
           05  WS-CUSTOMER-STATUS  PIC XX.
               88  CUSTOMER-FILE-OK VALUE '00'.
           05  WS-REPORT-STATUS    PIC XX.
               88  REPORT-FILE-OK VALUE '00'.
       
      * Processing Flags
       01  WS-FLAGS.
           05  WS-END-OF-FILE      PIC X VALUE 'N'.
               88  END-OF-FILE     VALUE 'Y'.
               88  NOT-END-OF-FILE VALUE 'N'.
       
      * Counters and Totals
       01  WS-COUNTERS.
           05  WS-RECORDS-PROCESSED PIC 9(5) VALUE ZERO.
           05  WS-ACTIVE-COUNT     PIC 9(5) VALUE ZERO.
           05  WS-INACTIVE-COUNT   PIC 9(5) VALUE ZERO.
       
       01  WS-TOTALS.
           05  WS-TOTAL-BALANCE    PIC 9(9)V99 VALUE ZERO.
           05  WS-TOTAL-FEES       PIC 9(9)V99 VALUE ZERO.
       
      * Fee Rates (Constants)
       01  WS-FEE-RATES.
           05  WS-ACTIVE-FEE-RATE  PIC V99 VALUE 0.02.
           05  WS-INACTIVE-FEE     PIC 9(3)V99 VALUE 25.00.
       
      * Working Variables
       01  WS-CALCULATED-VALUES.
           05  WS-ORIGINAL-BALANCE PIC 9(7)V99.
           05  WS-FEE-AMOUNT       PIC 9(5)V99.
           05  WS-NEW-BALANCE      PIC 9(7)V99.
       
      * Display Formatting
       01  WS-FORMATTED-AMOUNT     PIC Z,ZZZ,ZZ9.99.
       
       PROCEDURE DIVISION.
       MAIN-PROCEDURE.
           DISPLAY "Customer Processing Program - Modernized Version"
           DISPLAY "================================================="
           
           PERFORM 100-INITIALIZE
           PERFORM 200-PROCESS-CUSTOMERS
           PERFORM 300-GENERATE-SUMMARY
           PERFORM 400-CLEANUP
           
           DISPLAY "Processing completed successfully"
           STOP RUN.
       
      *****************************************************************
      * Initialize files and variables                                *
      *****************************************************************
       100-INITIALIZE.
           DISPLAY "Initializing..."
           
           OPEN INPUT CUSTOMER-FILE
           IF NOT CUSTOMER-FILE-OK
               DISPLAY "ERROR: Cannot open customer file"
               DISPLAY "File Status: " WS-CUSTOMER-STATUS
               STOP RUN
           END-IF
           
           OPEN OUTPUT REPORT-FILE
           IF NOT REPORT-FILE-OK
               DISPLAY "ERROR: Cannot open report file"
               CLOSE CUSTOMER-FILE
               STOP RUN
           END-IF
           
           DISPLAY "Files opened successfully".
       
      *****************************************************************
      * Process all customer records                                  *
      *****************************************************************
       200-PROCESS-CUSTOMERS.
           DISPLAY "Processing customer records..."
           
           PERFORM UNTIL END-OF-FILE
               PERFORM 210-READ-CUSTOMER
               IF NOT-END-OF-FILE
                   PERFORM 220-CALCULATE-FEES
                   PERFORM 230-UPDATE-BALANCE
                   PERFORM 240-WRITE-REPORT
                   PERFORM 250-UPDATE-STATISTICS
               END-IF
           END-PERFORM.
       
      *****************************************************************
      * Read next customer record                                     *
      *****************************************************************
       210-READ-CUSTOMER.
           READ CUSTOMER-FILE
               AT END
                   SET END-OF-FILE TO TRUE
               NOT AT END
                   ADD 1 TO WS-RECORDS-PROCESSED
                   MOVE CUST-BALANCE TO WS-ORIGINAL-BALANCE
           END-READ.
       
      *****************************************************************
      * Calculate fees based on customer status                       *
      *****************************************************************
       220-CALCULATE-FEES.
           EVALUATE TRUE
               WHEN ACTIVE-CUSTOMER
                   COMPUTE WS-FEE-AMOUNT ROUNDED = 
                       WS-ORIGINAL-BALANCE * WS-ACTIVE-FEE-RATE
               WHEN INACTIVE-CUSTOMER
                   MOVE WS-INACTIVE-FEE TO WS-FEE-AMOUNT
               WHEN OTHER
                   MOVE ZERO TO WS-FEE-AMOUNT
                   DISPLAY "WARNING: Unknown customer status: " 
                           CUST-STATUS " for customer " CUST-ID
           END-EVALUATE.
       
      *****************************************************************
      * Update customer balance after fee deduction                   *
      *****************************************************************
       230-UPDATE-BALANCE.
           COMPUTE WS-NEW-BALANCE = 
               WS-ORIGINAL-BALANCE - WS-FEE-AMOUNT
           
           IF WS-NEW-BALANCE < ZERO
               DISPLAY "WARNING: Negative balance for customer " 
                       CUST-ID
               MOVE ZERO TO WS-NEW-BALANCE
           END-IF
           
           MOVE WS-NEW-BALANCE TO CUST-BALANCE.
       
      *****************************************************************
      * Write customer record to report                               *
      *****************************************************************
       240-WRITE-REPORT.
           MOVE CUSTOMER-RECORD TO REPORT-RECORD
           WRITE REPORT-RECORD
           
           IF NOT REPORT-FILE-OK
               DISPLAY "ERROR: Failed to write report record"
               DISPLAY "File Status: " WS-REPORT-STATUS
           END-IF.
       
      *****************************************************************
      * Update processing statistics                                  *
      *****************************************************************
       250-UPDATE-STATISTICS.
           ADD CUST-BALANCE TO WS-TOTAL-BALANCE
           ADD WS-FEE-AMOUNT TO WS-TOTAL-FEES
           
           IF ACTIVE-CUSTOMER
               ADD 1 TO WS-ACTIVE-COUNT
           ELSE IF INACTIVE-CUSTOMER
               ADD 1 TO WS-INACTIVE-COUNT
           END-IF.
       
      *****************************************************************
      * Generate processing summary                                   *
      *****************************************************************
       300-GENERATE-SUMMARY.
           DISPLAY " "
           DISPLAY "PROCESSING SUMMARY"
           DISPLAY "=================="
           DISPLAY "Total Records Processed: " WS-RECORDS-PROCESSED
           DISPLAY "Active Customers: " WS-ACTIVE-COUNT
           DISPLAY "Inactive Customers: " WS-INACTIVE-COUNT
           
           MOVE WS-TOTAL-BALANCE TO WS-FORMATTED-AMOUNT
           DISPLAY "Total Balance: $" WS-FORMATTED-AMOUNT
           
           MOVE WS-TOTAL-FEES TO WS-FORMATTED-AMOUNT
           DISPLAY "Total Fees Collected: $" WS-FORMATTED-AMOUNT.
       
      *****************************************************************
      * Close files and cleanup                                       *
      *****************************************************************
       400-CLEANUP.
           CLOSE CUSTOMER-FILE
           CLOSE REPORT-FILE
           DISPLAY "Files closed successfully".
       
       END PROGRAM MODERN.

      *> Made with Bob
