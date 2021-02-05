function groepIndeling(datum){

    var indeling = datum %7 + 1;
    console.log("je zit in de groep: " + indeling);
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