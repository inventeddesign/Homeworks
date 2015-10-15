var user = {};
user.name = 'Sergey'; 
user.surname = 'Petrov';
user.name = 'Andrey'; 
user.age = 30;
delete user.name;
console.log (user);




function isEmpty(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }
 
var todoList = {};  
console.log( isEmpty(todoList) ); // true  
todoList['homework'] = 'lesson5';  
console.log( isEmpty(todoList) ); // false






var salaries = { 
  'junior': 1000, 
  'middle': 2500, 
  'senior': 3500, 
  'lead': 5000  };
var sum = 0;
for (var svoystva in salaries) {
  sum = sum + salaries[svoystva];
}
alert( sum );
