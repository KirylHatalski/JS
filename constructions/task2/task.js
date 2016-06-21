(function () {

    function factorial(num) {
        num = +num;
        if (isNaN(num)) { return console.log('I`m working only with numbers'); }
        var cnt = 1,
            result = 1;
        if (num === 1) { return result; }
        do {
            result *= cnt;
            cnt++;
        } while (cnt < num + 1);
        return result;
    }
    var num = prompt('Количество доставок: ', 1);
    document.querySelector('.result').innerHTML = factorial(num);

})();
