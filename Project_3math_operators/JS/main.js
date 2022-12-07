function addition_Function() {
    var Addition = 24+16;
    document.getElementById ("Math").innerHTML = " 24 + 16 = " + Addition;
}

function substraction_Function(){
    var Substraction = 5 - 2;
    document.getElementById('Maths').innerHTML = " 5 - 2 = " + Substraction;
} 

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById('Multi').innerHTML = " 6 * 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById('Divide').innerHTML = " 48 / 6 = " + simple_Math
}

function more_Math() {
    var simple_Math = (1+2) * 10/2 - 5;
    document.getElementById('big_Math').innerHTML = "1 plus 2, multiplied by 10, divided in half and then substracted by 5 equals" + simple_Math;
}

function modules_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById('_Math').innerHTML = "When you divide 26 by 6 you have a remainder of:"+simple_Math;
}

function negation_Operator() {
    var x= 10;
    document.getElementById('Operator_Math') .innerHTML = -x;
}

var X=5;
X++;
document.write(X);

var X=5.25;
X--;
document.write(X);

window.alert(Math.random()*100);