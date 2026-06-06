       IDENTIFICATION DIVISION.
       PROGRAM-ID. BATCHPROC.
       AUTHOR. OpenSpec Community.
      *****************************************************************
      * BATCH PROCESSING SYSTEM                                       *
      * Processes transaction files in batches with error handling   *
      * and report generation                                         *
      *****************************************************************
       
       ENVIRONMENT DIVISION.
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           SELECT INPUT-FILE ASSIGN TO "TRANS.DAT"
               ORGANIZATION IS LINE SEQUENTIAL
               FILE STATUS IS WS-INPUT-STATUS.
           
           SELECT OUTPUT-FILE ASSIGN TO "PROCESSED.DAT"
               ORGANIZATION IS LINE SEQUENTIAL
               FILE STATUS IS WS-OUTPUT-STATUS.
           
           SELECT ERROR-FILE ASSIGN TO "ERRORS.LOG"
               ORGANIZATION IS LINE SEQUENTIAL
               FILE STATUS IS WS-ERROR-STATUS.
           
           SELECT REPORT-FILE ASSIGN TO "REPORT.TXT"
               ORGANIZATION IS LINE SEQUENTIAL
               FILE STATUS IS WS-REPORT-STATUS.
       
       DATA DIVISION.
       FILE SECTION.
       FD  INPUT-FILE.
       01  INPUT-RECORD.
           05  IN-TRANS-ID         PIC X(10).
           05  IN-TRANS-TYPE       PIC X(2).
           05  IN-AMOUNT           PIC 9(7)V99.
           05  IN-ACCOUNT          PIC X(15).
           05  IN-DATE             PIC X(10).
           05  FILLER              PIC X(32).
       
       FD  OUTPUT-FILE.
       01  OUTPUT-RECORD           PIC X(80).
       
       FD  ERROR-FILE.
       01  ERROR-RECORD            PIC X(120).
       
       FD  REPORT-FILE.
       01  REPORT-RECORD           PIC X(80).
       
       WORKING-STORAGE SECTION.
       01  WS-FILE-STATUS.
           05  WS-INPUT-STATUS     PIC XX.
           05  WS-OUTPUT-STATUS    PIC XX.
           05  WS-ERROR-STATUS     PIC XX.
           05  WS-REPORT-STATUS    PIC XX.
       
       01  WS-COUNTERS.
           05  WS-RECORDS-READ     PIC 9(7) VALUE ZERO.
           05  WS-RECORDS-PROCESSED PIC 9(7) VALUE ZERO.
           05  WS-RECORDS-ERROR    PIC 9(7) VALUE ZERO.
           05  WS-TOTAL-AMOUNT     PIC 9(11)V99 VALUE ZERO.
       
       01  WS-FLAGS.
           05  WS-EOF-FLAG         PIC X VALUE 'N'.
               88  END-OF-FILE     VALUE 'Y'.
           05  WS-ERROR-FLAG       PIC X VALUE 'N'.
               88  RECORD-ERROR    VALUE 'Y'.
       
       01  WS-CURRENT-DATE.
           05  WS-CURR-YEAR        PIC 9(4).
           05  WS-CURR-MONTH       PIC 99.
           05  WS-CURR-DAY         PIC 99.
       
       01  WS-CURRENT-TIME.
           05  WS-CURR-HOUR        PIC 99.
           05  WS-CURR-MINUTE      PIC 99.
           05  WS-CURR-SECOND      PIC 99.
       
       01  WS-ERROR-MESSAGE        PIC X(80).
       01  WS-FORMATTED-AMOUNT     PIC Z,ZZZ,ZZ9.99.
       
       PROCEDURE DIVISION.
       MAIN-PROCEDURE.
           PERFORM 100-INITIALIZE
           PERFORM 200-PROCESS-FILE
           PERFORM 300-GENERATE-REPORT
           PERFORM 400-CLEANUP
           STOP RUN.
       
       100-INITIALIZE.
           DISPLAY "Batch Processing System Starting..."
           ACCEPT WS-CURRENT-DATE FROM DATE YYYYMMDD
           ACCEPT WS-CURRENT-TIME FROM TIME
           
           OPEN INPUT INPUT-FILE
           IF WS-INPUT-STATUS NOT = "00"
               DISPLAY "ERROR: Cannot open input file"
               DISPLAY "File Status: " WS-INPUT-STATUS
               STOP RUN
           END-IF
           
           OPEN OUTPUT OUTPUT-FILE
           IF WS-OUTPUT-STATUS NOT = "00"
               DISPLAY "ERROR: Cannot open output file"
               CLOSE INPUT-FILE
               STOP RUN
           END-IF
           
           OPEN OUTPUT ERROR-FILE
           IF WS-ERROR-STATUS NOT = "00"
               DISPLAY "ERROR: Cannot open error file"
               CLOSE INPUT-FILE OUTPUT-FILE
               STOP RUN
           END-IF
           
           OPEN OUTPUT REPORT-FILE
           IF WS-REPORT-STATUS NOT = "00"
               DISPLAY "ERROR: Cannot open report file"
               CLOSE INPUT-FILE OUTPUT-FILE ERROR-FILE
               STOP RUN
           END-IF
           
           DISPLAY "All files opened successfully".
       
       200-PROCESS-FILE.
           PERFORM UNTIL END-OF-FILE
               PERFORM 210-READ-RECORD
               IF NOT END-OF-FILE
                   PERFORM 220-VALIDATE-RECORD
                   IF NOT RECORD-ERROR
                       PERFORM 230-PROCESS-RECORD
                   ELSE
                       PERFORM 240-LOG-ERROR
                   END-IF
               END-IF
           END-PERFORM
           
           DISPLAY "Processing complete"
           DISPLAY "Records Read: " WS-RECORDS-READ
           DISPLAY "Records Processed: " WS-RECORDS-PROCESSED
           DISPLAY "Records with Errors: " WS-RECORDS-ERROR.
       
       210-READ-RECORD.
           READ INPUT-FILE
               AT END
                   SET END-OF-FILE TO TRUE
               NOT AT END
                   ADD 1 TO WS-RECORDS-READ
                   MOVE 'N' TO WS-ERROR-FLAG
           END-READ.
       
       220-VALIDATE-RECORD.
           IF IN-TRANS-ID = SPACES
               MOVE "Transaction ID is blank" TO WS-ERROR-MESSAGE
               SET RECORD-ERROR TO TRUE
           ELSE IF IN-TRANS-TYPE NOT = "CR" AND NOT = "DB"
               MOVE "Invalid transaction type" TO WS-ERROR-MESSAGE
               SET RECORD-ERROR TO TRUE
           ELSE IF IN-AMOUNT = ZERO OR IN-AMOUNT < ZERO
               MOVE "Invalid amount" TO WS-ERROR-MESSAGE
               SET RECORD-ERROR TO TRUE
           ELSE IF IN-ACCOUNT = SPACES
               MOVE "Account number is blank" TO WS-ERROR-MESSAGE
               SET RECORD-ERROR TO TRUE
           END-IF.
       
       230-PROCESS-RECORD.
           WRITE OUTPUT-RECORD FROM INPUT-RECORD
           ADD 1 TO WS-RECORDS-PROCESSED
           ADD IN-AMOUNT TO WS-TOTAL-AMOUNT.
       
       240-LOG-ERROR.
           STRING "ERROR: " DELIMITED BY SIZE
                  WS-ERROR-MESSAGE DELIMITED BY SIZE
                  " | Record: " DELIMITED BY SIZE
                  IN-TRANS-ID DELIMITED BY SIZE
                  INTO ERROR-RECORD
           END-STRING
           WRITE ERROR-RECORD
           ADD 1 TO WS-RECORDS-ERROR.
       
       300-GENERATE-REPORT.
           MOVE "BATCH PROCESSING REPORT" TO REPORT-RECORD
           WRITE REPORT-RECORD
           MOVE ALL "=" TO REPORT-RECORD
           WRITE REPORT-RECORD
           MOVE SPACES TO REPORT-RECORD
           WRITE REPORT-RECORD
           
           STRING "Processing Date: " DELIMITED BY SIZE
                  WS-CURR-YEAR "/" DELIMITED BY SIZE
                  WS-CURR-MONTH "/" DELIMITED BY SIZE
                  WS-CURR-DAY DELIMITED BY SIZE
                  INTO REPORT-RECORD
           END-STRING
           WRITE REPORT-RECORD
           
           STRING "Processing Time: " DELIMITED BY SIZE
                  WS-CURR-HOUR ":" DELIMITED BY SIZE
                  WS-CURR-MINUTE ":" DELIMITED BY SIZE
                  WS-CURR-SECOND DELIMITED BY SIZE
                  INTO REPORT-RECORD
           END-STRING
           WRITE REPORT-RECORD
           MOVE SPACES TO REPORT-RECORD
           WRITE REPORT-RECORD
           
           STRING "Total Records Read: " DELIMITED BY SIZE
                  WS-RECORDS-READ DELIMITED BY SIZE
                  INTO REPORT-RECORD
           END-STRING
           WRITE REPORT-RECORD
           
           STRING "Records Processed: " DELIMITED BY SIZE
                  WS-RECORDS-PROCESSED DELIMITED BY SIZE
                  INTO REPORT-RECORD
           END-STRING
           WRITE REPORT-RECORD
           
           STRING "Records with Errors: " DELIMITED BY SIZE
                  WS-RECORDS-ERROR DELIMITED BY SIZE
                  INTO REPORT-RECORD
           END-STRING
           WRITE REPORT-RECORD
           
           MOVE WS-TOTAL-AMOUNT TO WS-FORMATTED-AMOUNT
           STRING "Total Amount Processed: $" DELIMITED BY SIZE
                  WS-FORMATTED-AMOUNT DELIMITED BY SIZE
                  INTO REPORT-RECORD
           END-STRING
           WRITE REPORT-RECORD
           
           MOVE SPACES TO REPORT-RECORD
           WRITE REPORT-RECORD
           MOVE "Processing completed successfully" TO REPORT-RECORD
           WRITE REPORT-RECORD.
       
       400-CLEANUP.
           CLOSE INPUT-FILE OUTPUT-FILE ERROR-FILE REPORT-FILE
           DISPLAY "All files closed"
           DISPLAY "Report generated: REPORT.TXT".
       
       END PROGRAM BATCHPROC.

      *> Made with Bob
