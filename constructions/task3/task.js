var space = '&nbsp;&nbsp;&nbsp;&nbsp;',
    star = '*';

function square() {
  var str = '';
  for(var i = 1; i < 100; i++) {
    if (!(i%10)) {
      str += '*<br>*';
    } else if (i <= 10 || i > 90) {
      str += star + '&nbsp;&nbsp;';
    } else {
      str += space;
    }
  }
  return str;
}

function firstTriangle() {
  var str = '';
  for(var i = 0; i < 100; i++) {
    if (!(i%10)) {
      str += '<br>*';
    } else if (i <= 10) {
      str += star + '&nbsp;&nbsp;';
    } else if (!(i%9) && i!=99){
      str += star + '&nbsp;&nbsp;';
    } else {
      str += space;
    }
  }
  return str;
}

function secondTriangle() {
  var str = '';
  for(var i = 0; i < 100; i++) {

    // if (!(i%9)) {
    //   str += '<br>*';
    // // } else if (!(i%7)) {
    // //   str += star + '&nbsp;&nbsp;';
    // } else if (i>90){
    //   str += star + '&nbsp;&nbsp;';
    // } else {
    //   str += space;
    // }
  }
  return str;
}

//TODO

document.querySelector('.result div:nth-child(1)').innerHTML = square();
document.querySelector('.result div:nth-child(2)').innerHTML = firstTriangle();
document.querySelector('.result div:nth-child(3)').innerHTML = secondTriangle();
// document.querySelector('.result div:nth-child(4)').innerHTML = (z = x++ + y * 5);
