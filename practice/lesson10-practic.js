//Write a single function that can be invoked by either
//sum(2,3); //5
//or
//sum(2)(3); //5


function sum(a,b){
  if (b || b === 0){
  return a+b;
  }
else {
   return function(b){
   return a+b;
    }
  }
}
console.log sum(3,5);
console.log sum(3)(5);



// метод функции возвращает безымянную функцию BIND

function sum(a,b){
  if (b === undefined){
    return function(b){
    return a+b;}
  }
  else {
    return a+b;}
}
console.log sum(3,5);
console.log sum(3)(5);



//Given a string, swap the case for each of the letters.
//e.g. CodEwArs --> cODeWaRS

var string = prompt('введите строку');
var arr = string.split('');
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] != arr[i].toUpperCase()){
    var a = arr[i].toUpperCase();
    arr2.push(a);
  }
  else {
    var a = arr[i].toLowerCase();
    arr2.push(a);
  }
}
var str = arr2.join('');
alert(str);




//Your task is to make a function that can take any non-negative integer as a argument and return
//it with it's digits in descending order. Descending order means that you take the highest
//digit and place the next highest digit immediately after it.

toString: function Des(a){
  var arr = a.split('');
  arr.sort();
  alert(arr);
}
 Des(4695258036);
