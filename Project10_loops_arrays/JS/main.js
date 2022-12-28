function Call_Loop(){
    var Digit"8";
    var X=1;
    while (X <11){
        Digit += "<br>" + X'
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

let text = "Hello World!";
let length = text.length;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y <Instruments.length; Y++){
        Content += Instruments[Y]  + "<br>";
    }
     document.getElementById("List of Instruments").innerHTML = Content;
}

function array_Function(){
    var Books = [];
    Homemade_Pies [0] = "cooking";
    Knitting_made_easy[1] = "knitting";
    Weather [2] = "wether";
    In_the_Woods[3] = "thriller";
    document.getElementById("Array").innerHTML = "This Book is for" + Homemade_Pies[0] +".";
}

function constant_Funtion() {
    const Musical_Instrument = [type= "Guitar", brand = "Fender", color = "black"];
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + "was" + Musical_Instrument.price;
}

var X = 82;
document.write (X);
{
    let X = 33;
    document.write ("<br>" + X);
} 
document.write ("<br>" + X);

function pi_Function(){
    return Math.PI;
}

for (let i = 0, i = <10; i++) {
    if (i==3) {break; }
    text += "The Number is" + i + "<br>";
}