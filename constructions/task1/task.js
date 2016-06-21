(function () {

    var min = 3,
        max = 76,
        numArr = [],
        i;

    for (i = 0; i < 45; i++) {
        numArr.push(Math.floor(Math.random() * 100) + 1);
    }

    document.querySelector('.result div:nth-child(1)').innerHTML = numArr.reduce(function (sum, elt) {
        if (elt >= min && elt <= max) { return sum + elt; }
        return sum + 0;
    }, 0);

    numArr.map(function (elt) {
        if (elt % 2 && elt >= min && elt <= max) {
            document.querySelector('.result div:nth-child(2)').innerHTML += elt + ' ';
        }
    });

})();
