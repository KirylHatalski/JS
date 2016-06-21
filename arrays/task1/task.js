(function () {

    var numArr = [];

    for (var i = 0; i < 45; i++) {
        numArr.push(Math.floor(Math.random() * 100) + 1);
    }

    function oddlist(arr) {
        var temp = '';
        arr.map(function (elt) {
            if (elt % 2) {
                temp += elt + ' ';
            }
        });
        return temp;
    }

    document.querySelector('.result div:nth-child(3)').innerHTML = 'Общую сумму элементов: ' + numArr.reduce(function (sum, elt) {
        return sum + elt;
    }, 0);

    document.querySelector('.result div:nth-child(5)').innerHTML = 'Вывести все нечетные значения: ' + oddlist(numArr);

    document.querySelector('.result div:nth-child(4)').innerHTML = 'Среднее арифметическое всех элементов: ' + numArr.reduce(function (sum, elt) {
        return sum + elt;
    }, 0) / numArr.length;

    function comparator(a, b) {
        if (a > b) { return 1; }
        if (a < b) { return -1; }
    }

    numArr.sort(comparator);
    document.querySelector('.result div:nth-child(1)').innerHTML = 'Наибольшее значение массива: ' + numArr[numArr.length - 1];
    document.querySelector('.result div:nth-child(2)').innerHTML = 'Наименьшее значение массива: ' + numArr[0];

})();
