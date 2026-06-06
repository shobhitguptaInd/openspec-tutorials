       IDENTIFICATION DIVISION.
       PROGRAM-ID. HELLO-OPENSPEC.
       AUTHOR. OpenSpec Community.
      *****************************************************************
      * Program: Hello OpenSpec COBOL                                 *
      * Purpose: Demonstrate basic COBOL file I/O with OpenSpec       *
      * Description: Reads names from input file and writes           *
      *              personalized greetings to output file            *
      *****************************************************************

       ENVIRONMENT DIVISION.
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           SELECT INPUT-FILE ASSIGN TO "INPUT.TXT"
               ORGANIZATION IS LINE SEQUENTIAL
               FILE STATUS IS WS-INPUT-STATUS.
           
           SELECT OUTPUT-FILE ASSIGN TO "OUTPUT.TXT"
               ORGANIZATION IS LINE SEQUENTIAL
               FILE STATUS IS WS-OUTPUT-STATUS.

       DATA DIVISION.
       FILE SECTION.
       FD  INPUT-FILE.
       01  INPUT-RECORD.
           05  INPUT-NAME          PIC X(50).

       FD  OUTPUT-FILE.
       01  OUTPUT-RECORD.
           05  OUTPUT-LINE         PIC X(100).

       WORKING-STORAGE SECTION.
       01  WS-FILE-STATUS.
           05  WS-INPUT-STATUS     PIC XX.
           05  WS-OUTPUT-STATUS    PIC XX.

       01  WS-COUNTERS.
           05  WS-RECORD-COUNT     PIC 9(3) VALUE ZERO.
           05  WS-ERROR-COUNT      PIC 9(3) VALUE ZERO.

       01  WS-FLAGS.
           05  WS-EOF-FLAG         PIC X VALUE 'N'.
               88  END-OF-FILE     VALUE 'Y'.

       01  WS-GREETING-PARTS.
           05  WS-GREETING-PREFIX  PIC X(7) VALUE "Hello, ".
           05  WS-GREETING-SUFFIX  PIC X(30) 
               VALUE "! Welcome to OpenSpec COBOL.".

       01  WS-MESSAGES.
           05  WS-START-MSG        PIC X(50) 
               VALUE "Starting Hello OpenSpec COBOL program...".
           05  WS-COMPLETE-MSG     PIC X(50) 
               VALUE "Processing complete.".
           05  WS-ERROR-MSG        PIC X(50) 
               VALUE "Error: Unable to open input file.".

       PROCEDURE DIVISION.
       MAIN-LOGIC.
           PERFORM INITIALIZE-PROGRAM
           PERFORM PROCESS-FILE
           PERFORM FINALIZE-PROGRAM
           STOP RUN.

      *****************************************************************
      * Initialize Program - Open files and display start message     *
      *****************************************************************
       INITIALIZE-PROGRAM.
           DISPLAY WS-START-MSG
           DISPLAY " "
           
           OPEN INPUT INPUT-FILE
           IF WS-INPUT-STATUS NOT = "00"
               DISPLAY WS-ERROR-MSG
               DISPLAY "File Status: " WS-INPUT-STATUS
               MOVE 1 TO RETURN-CODE
               STOP RUN
           END-IF
           
           OPEN OUTPUT OUTPUT-FILE
           IF WS-OUTPUT-STATUS NOT = "00"
               DISPLAY "Error: Unable to open output file."
               DISPLAY "File Status: " WS-OUTPUT-STATUS
               CLOSE INPUT-FILE
               MOVE 1 TO RETURN-CODE
               STOP RUN
           END-IF.

      *****************************************************************
      * Process File - Read input and write greetings                 *
      *****************************************************************
       PROCESS-FILE.
           PERFORM READ-INPUT-RECORD
           PERFORM UNTIL END-OF-FILE
               PERFORM CREATE-GREETING
               PERFORM WRITE-OUTPUT-RECORD
               PERFORM READ-INPUT-RECORD
           END-PERFORM.

      *****************************************************************
      * Read Input Record - Read one name from input file             *
      *****************************************************************
       READ-INPUT-RECORD.
           READ INPUT-FILE
               AT END
                   MOVE 'Y' TO WS-EOF-FLAG
               NOT AT END
                   ADD 1 TO WS-RECORD-COUNT
           END-READ.

      *****************************************************************
      * Create Greeting - Build personalized greeting message         *
      *****************************************************************
       CREATE-GREETING.
           STRING WS-GREETING-PREFIX DELIMITED BY SIZE
                  INPUT-NAME DELIMITED BY "  "
                  WS-GREETING-SUFFIX DELIMITED BY SIZE
                  INTO OUTPUT-LINE
           END-STRING.

      *****************************************************************
      * Write Output Record - Write greeting to output file           *
      *****************************************************************
       WRITE-OUTPUT-RECORD.
           WRITE OUTPUT-RECORD
           IF WS-OUTPUT-STATUS NOT = "00"
               DISPLAY "Error writing to output file."
               DISPLAY "File Status: " WS-OUTPUT-STATUS
               ADD 1 TO WS-ERROR-COUNT
           END-IF.

      *****************************************************************
      * Finalize Program - Close files and display summary            *
      *****************************************************************
       FINALIZE-PROGRAM.
           CLOSE INPUT-FILE
           CLOSE OUTPUT-FILE
           
           DISPLAY " "
           DISPLAY WS-COMPLETE-MSG
           DISPLAY "Names processed: " WS-RECORD-COUNT
           
           IF WS-ERROR-COUNT > 0
               DISPLAY "Errors encountered: " WS-ERROR-COUNT
               MOVE 1 TO RETURN-CODE
           ELSE
               DISPLAY "All greetings written successfully!"
               MOVE 0 TO RETURN-CODE
           END-IF
           
           DISPLAY " ".

       END PROGRAM HELLO-OPENSPEC.

      *> Made with Bob
