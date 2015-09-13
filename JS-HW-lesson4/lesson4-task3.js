//Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов.
//Если длина больше 20, то обрезает строку и добавляет в конец строки '...'

function leghtControl(str) {
  var a = str.length;
  if ( a <= 20 ) {
    return str;
  }
  else {
    var b = str.substring(0,21) + '...';
    return b;
  }
}
  console.log(leghtControl('Напишите функ'));
  console.log(leghtControl('Напишите функцию, которая принимает'));
