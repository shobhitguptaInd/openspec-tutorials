       IDENTIFICATION DIVISION.
       PROGRAM-ID. LEGACY.
      *****************************************************************
      * LEGACY CUSTOMER PROCESSING PROGRAM                            *
      * Original code from 1985 - needs modernization                 *
      * This is an example of poorly structured legacy code           *
      *****************************************************************
       
       ENVIRONMENT DIVISION.
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           SELECT CUST-FILE ASSIGN TO "CUSTOMER.DAT"
               ORGANIZATION IS LINE SEQUENTIAL.
           SELECT RPT-FILE ASSIGN TO "REPORT.TXT"
               ORGANIZATION IS LINE SEQUENTIAL.
       
       DATA DIVISION.
       FILE SECTION.
       FD  CUST-FILE.
       01  CUST-REC.
           05  C-ID                PIC 9(5).
           05  C-NAME              PIC X(30).
           05  C-BAL               PIC 9(7)V99.
           05  C-STATUS            PIC X.
           05  FILLER              PIC X(32).
       
       FD  RPT-FILE.
       01  RPT-REC                 PIC X(80).
       
       WORKING-STORAGE SECTION.
       01  WS-EOF                  PIC X VALUE 'N'.
       01  WS-CNT                  PIC 9(5) VALUE 0.
       01  WS-TOT                  PIC 9(9)V99 VALUE 0.
       01  WS-BAL                  PIC 9(7)V99.
       01  WS-FEE                  PIC 9(5)V99.
       01  WS-NEW-BAL              PIC 9(7)V99.
       
       PROCEDURE DIVISION.
       MAIN.
           OPEN INPUT CUST-FILE.
           OPEN OUTPUT RPT-FILE.
           PERFORM UNTIL WS-EOF = 'Y'
               READ CUST-FILE
                   AT END MOVE 'Y' TO WS-EOF
                   NOT AT END
                       ADD 1 TO WS-CNT
                       MOVE C-BAL TO WS-BAL
                       IF C-STATUS = 'A'
                           COMPUTE WS-FEE = WS-BAL * 0.02
                           COMPUTE WS-NEW-BAL = WS-BAL - WS-FEE
                           MOVE WS-NEW-BAL TO C-BAL
                       ELSE
                           IF C-STATUS = 'I'
                               COMPUTE WS-FEE = 25.00
                               COMPUTE WS-NEW-BAL = WS-BAL - WS-FEE
                               MOVE WS-NEW-BAL TO C-BAL
                           END-IF
                       END-IF
                       ADD C-BAL TO WS-TOT
                       MOVE C-REC TO RPT-REC
                       WRITE RPT-REC
               END-READ
           END-PERFORM.
           DISPLAY 'PROCESSED: ' WS-CNT.
           DISPLAY 'TOTAL: ' WS-TOT.
           CLOSE CUST-FILE.
           CLOSE RPT-FILE.
           STOP RUN.

      *> Made with Bob
