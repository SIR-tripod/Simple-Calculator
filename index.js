

function addNumbers(){

    var num1 = Number(prompt("Enter a number"));
    var num2 = Number(prompt("Enter another number"));
var result = num1 + num2;

document.getElementById("addResult").innerHTML = result;

};

function subNumbers(){
    var num3 = Number(prompt("Enter a number"));
    var num4 = Number(prompt("Enter another number"));
var result = num3 - num4;

document.getElementById("subResult").innerHTML = result;

};



function multi(){
    var x = Number(prompt("Enter a number"));
    var y = Number(prompt("Enter another number"));
    z = x*y;

    document.getElementById("z").innerHTML = z;
}

function divi(){
    var s = Number(prompt("Enter a number"));
    var q = Number(prompt("Enter another number"));
    v = s/q;

    document.getElementById("v").innerHTML = v;

}



function triviValues(){
    var arg1 = (Math.floor(Math.random() * 10) + 1);
    var arg2 = (Math.floor(Math.random() * 10) + 1);
    document.getElementById("values1").innerHTML = arg1;
    document.getElementById("values2").innerHTML = arg2;
    
   triviAdd(arg1,arg2);
}

function triviAdd(arg1,arg2){

}