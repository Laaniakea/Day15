function printManyTimes(str){
    "use strict";
    //Only change code below

    const SENTENCE = str + " is cool!";
    for (let i=0; i<str.length; i+=2){
        console.log(SENTENCE);
    }
    return SENTENCE;
    //Only change code

}
printManyTimes("Arena");
module.exports=printManyTimes;