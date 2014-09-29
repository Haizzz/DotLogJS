var logVar = [];
window.logVar = logVar;
var checkVar;
window.checkVar = checkVar;
var logName = [];
window.logName = logName;
window.dotLogPrint = function () {
    for (i=0;i < logVar.length; i++){
        if(checkVar[i] != logVar[i]) {
            console.log(logName[i] + " : " + logVar[i]);
            checkVar = logVar;
            window.checkVar = checkVar;
        }
    }
}
