//Напишите функцию multiplyNumeric которая принимает на вход объект
//и возвращает объект в котором все числовые значения у свойств умножены на 2.
// Before
//var image = {
//    width: 100,
//    height: 400,
//    title: 'Cool image'
//};

//multiplyNumeric(image);

// after
//image = {
//    width: 200,
//    height: 800,
//    title: 'Cool image'
//};


var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(a){
  for(var item in a) {
      if ((a[item] * 2) == (a[item] * 2)) {
        var VarForRecording = a[item] * 2;
        a[item] = VarForRecording;
      }
    }
  console.log(a);
}
multiplyNumeric(image);



//другая проверка на НАН

var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(a){
  for(var item in a) {
    var VarForRecording = a[item] * 2;
      if (isNaN(VarForRecording) == false) {
        a[item] = VarForRecording;
      }
    }
  console.log(a);
}
multiplyNumeric(image);
