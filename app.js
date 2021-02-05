function groepIndeling(datum){

    var indeling = datum %7 + 1;
    console.log("je zit in de groep: " + indeling);
    switch(indeling){
        case 1 : console.log("aaaaa")
        break;
        case 2 : console.log("bbbb")
        break;
        case 3 : console.log("cccc")
        break;
        case 4 : console.log("dddd")
        break;
        case 5 : console.log("eeee")
        break;
        case 6 : console.log("fffff")
        break;
        case 7 : console.log("ggggg")
        break;
    }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("toets uw geboortedatum in (YYYYMMDD): ", function (datum) {
    groepIndeling(datum);
    
    rl.close();
});

