function pow(a, b){
  var Output = a;
  for (var count = 1; count<b; count++)
  {
    Output = Output * a;
  }
return Output;
}

var num = prompt('введите число');
var degree = prompt('введіте степень');
console.log(pow(num, degree));









//Напишите функцию pow(x,n), которая возвращает x в степени n.
//Иначе говоря, умножает x на себя n раз и возвращает результат.

//pow(3, 2) = 3 * 3 = 9
//pow(1, 100) = 1 * 1 * ...* 1 = 1
