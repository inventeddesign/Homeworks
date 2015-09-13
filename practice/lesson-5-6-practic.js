//Написать функцию которая принимает на вход массив и
//возвращает последний элемент массива.

var arr = [1, 'Ira is smart', 'Anna is beautiful', 'Alex is handsome', 'Anna will be smart soon']
function last(a){
  var b = a.length;
  console.log(arr[b-1]);
}
last(arr);


//Написать функцию которая принимает на вход
//2 параметра: массив, и элемент (любого типа).
//Этот элемент нужно добавить в конец массива.
// Функция должна вернуть массив с добавленным новым элементом.

var arr = [1, 'Ira is smart', 'Anna is beatiful', 'Alex is handsome', 'Anna will be smart soon', true]
var v = 'Anna is great girl!'
function newElement(a, b){
  a.push(b);
  console.log(a);
}
newElement(arr,v);



//1. Создайте массив fruits с элементами «apple», «orange».
//2. Добавьте в конец значение «kiwi»
//3. Замените предпоследнее значение с конца на «pear». Код
//замены предпоследнего значения должен работать для
//массивов любой длины.
//4. Удалите первое значение массива и выведите его console.
//5. Добавьте в начало значения «apricot» и «peach».

var arr = ['apple', 'orange'];
arr.push('kiwi');
var leng = arr.length;
arr[leng-2] = 'pear';
arr.shift();
console.log(arr);
arr.unshift('apricot', 'peach');
console.log(arr);



//Написать функцию которая принимает на вход массив и
//возвращает случайное значение из этого массива.
//Код для генерации случайного числа в промежутке.
//var rand = min + Math.floor(Math.random() * (max + 1 - min));

//ДОДЕЛАТЬ

var arr = [1, 'Ira is smart', 'Anna is beatiful', 'Alex is handsome', 'Anna will be smart soon', true]
function La(a){

  //var min = 1;
  //var max = arr.length - 1;
  //var rand = min + Math.floor(Math.random() * (max + 1 - min);

  console.log(a[rand]);
}
La(arr);




//Создайте функцию find(arr, value), которая ищет в массиве arr
//значение value и возвращает его позицию, если найдено, или -1, если не найдено.

var arr = [1, 'Ira is smart', 'Anna is beatiful', 'value', 'Alex is handsome', 'Anna will be smart soon', true]
function find(a, x){
  var c = a.indexOf(x);
  console.log(c);
}
find(arr, 'value');





//В объекте есть свойство className, которое содержит список «классов» – слов, р
//азделенных пробелом. Создайте функцию addClass(obj, cls), которая добавляет в
// список класс cls, но только если его там еще нет
//. Ваша функция не должна добавлять лишних пробелов.
//var obj = { 
//className: 'open menu'  }; 
 
//addClass(obj, 'new'); // obj.className='open menu new'  addClass(obj, 'open'); // без изменений 
//addClass(obj, 'me'); // obj.className='open menu new me'  
//console.log( obj.className ); // "open menu new me"


function addClass(obj, cls){

}
