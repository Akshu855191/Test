var a = prompt("Enter first number");
var b = prompt("Enter last number");
a = parseInt(a);
b = parseInt(b);
var i = 2;
for (i = a; i <= b; i++){
    var flag = 0;
for (var j = 2; j < i; j++){
    if (i % j == 0) 
{
    flag = 1;
    break;
}
}
if (i > 1 && flag == 0){
    console.log(i);
}
}


