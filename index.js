

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



