DotlogJS
========

A small library that let's you monitor variable changes
---
###Dependency
Dotlog.js requires [jquery](http://jquery.com/).
Please load Dotlog.js before your script file like so:

    <script src="jquery-2.1.1.min.js"></script>
    <script src="dotlog.js"></script>
    <script src="script.js"></script>
###Usage
To use Dotlog.js, you will need to put a snippet of code in your script file:
    
    window.logVar = [var1,var2,var3,var4];
    window.checkVar = logVar;
    window.logName = ["health", "armor", "bullets", "stats"];
    function dotLog() {
        window.logVar = [health,armor,bullets,dead];
        dotLogPrint();
    }
    
**logVar**: an array that contains the variables that you want to be alerted when they changes.
**logName**: an array of names that you want the variables to be printed out as. For the example above, var1 would be printed as "health: var1".<br>
**dotLog()**: a function that will trigger and print out the changes in variables. You can change the name of the function

To see what the variable have changed into, trigger the logName() function.
