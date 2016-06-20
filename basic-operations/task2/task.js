var numberArr = [33, 22, 11];

document.querySelector('.result').innerHTML = numberArr.reduce(function (sum, elt) {
  return sum + elt;
}, 0) / numberArr.length;
