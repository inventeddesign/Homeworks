function work(a) {
/* ... */
}
function makeLogging(f, log) { /* ваш код */ }
var log = [];
work = makeLogging(work, log);work(1);
// 1, добавлено в logwork(5);
// 5, добавлено в logconsole.log(log); // [1,5]
console.log(log); // [1,5]


function makeLogging(f, log) {
  function wrapper(a) {
    log.push(a);
    return f.call(this, a);
  }
  return wrapper;
}
