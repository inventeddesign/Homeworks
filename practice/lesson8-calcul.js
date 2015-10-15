var calc = {

  read: function() {
    this.a = +prompt('Введите первую цифру', 0);
    this.b = +prompt('Введите вторую цифру', 0);
  },

  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  }

};
calc.read();

console.log( calc.sum() );
console.log( calc.mul() );
