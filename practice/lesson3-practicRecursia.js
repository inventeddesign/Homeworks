//рекурсія
function sumTo(n) {
  if(n != 0) {
    return n + sumTo(n-1)
  } else {
    return n;
  }
}
console.log (sumTo(0));


//формула
function sumTo(n) {
  return ((n+1)/2)*n
}
console.log (sumTo(3));



//цикл
function sumTo(n){
  var Output = 0;
  for (var count = 1; count <= n; count++)
  {
    Output = Output + count;
  }
return Output;
}

console.log(sumTo(4));


// вичісленіе факторіала
  return n <= 0 ? 'Only integer more or equals 1' : n === 1 ? 1 : n * fact(n - 1);
}

//кодеварс 1
function num(a){
if (a % 2 == 0){
return "even";}
else
{return "odd";}
}
console.log (num(5));

//кодеварс 2
var user = prompt('введите ваше имя');
function message(user) { 
if (user == "Jonny") {
  return alert('Здравствуй, милый');
} else if (user != "Jonny") {
  return alert( 'Привет всем присутствующим!' ); 
} 
}

 message(user); 


//кодеварс 3  через или  ДОДЕЛАТЬ умножение на -1 - изменение знака
