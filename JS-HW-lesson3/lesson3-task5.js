var line = prompt('введите количество строк');
var symbol = prompt('введите количество символов в строке');
var evenLine, oddLine, evenOutput = '', oddOutput = '', Output = '';

for (evenLine = 0; evenLine < symbol; evenLine++){
  if (evenLine % 2 == 0) {
    evenOutput = (evenOutput + ' ');
  }
  else {
    evenOutput = (evenOutput + '#');
  }
}

for (oddLine = 0; oddLine < symbol; oddLine++){
  if (oddLine % 2 == 0) {
    oddOutput = (oddOutput + '#');
  }
  else {
    oddOutput = (oddOutput + ' ');
  }
}

for (OllLine = 0; OllLine <= line; OllLine++){
  if (OllLine % 2 == 0) {
    Output = (Output + oddOutput +"\r\n");
  }
  else {
    Output = (Output + evenOutput +"\r\n");
  }
}
console.log(Output);
