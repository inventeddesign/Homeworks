//Напиште код который выведет сотрудника который выполнил больше всех задач.



var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};
var maxTasks = 0;
var goodWorker = "";
for (var tasks in tasksCompleted) {
  console.log(tasks);
  console.log(tasksCompleted[tasks]);
  if ( maxTasks < tasksCompleted[tasks] ){
    maxTasks = tasksCompleted[tasks];
    goodWorker = tasks;
  }
}
alert (goodWorker);
