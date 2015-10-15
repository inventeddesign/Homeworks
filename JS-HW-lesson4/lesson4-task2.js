//Напишите функцию checkSpam
//которая проверяет строку на содержание слов: spam, sex.


function checkSpam(a) {
  var str = a.toLowerCase();
  if ( ~str.indexOf("sex") || ~str.indexOf("spam") ) {
    alert( 'true - Это спам!' );
  }
  else {
    alert( 'false - Проверка пройдена успешно' );
  }
}
checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false




//Второй способ
function checkSpam(a) {
  var str = a.toLowerCase();
  if (str.indexOf("sex") >= 0) {
  return true;
  }
  else if (str.indexOf("spam") >= 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(checkSpam('get new Sex videos')); // true
console.log(checkSpam('[SPAM] How to earn fast money?')); // true
console.log(checkSpam('New PSD template')); // false
