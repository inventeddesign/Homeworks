var num;
metka: for (num = 2; num < 10; num++) {
  for (var i = 2; i < num; i++)
  if (num % i == 0) {
    continue metka;
  }
    console.log(num);
}
