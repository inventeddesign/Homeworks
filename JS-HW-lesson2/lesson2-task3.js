var login = prompt('Enter your login, please');
if (login == 'admin')
{
  var password = prompt('Enter your password, please');
  if ( password == 'passw0rd'){
    alert( 'Welcome home!' );}
  else if (password === ''){
    alert('Canceled');}
  else {
    alert('Wrong password');}
}

else if (login === ''){
  alert('Canceled');}

else {
  alert('Access denied');}
