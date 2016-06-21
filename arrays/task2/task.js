(function () {

  var numArr = [], temp = [], i, j, cnt = 0;

    function getRandom() {
        return Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    }

    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            temp.push(getRandom());
        }
        numArr.push(temp);
        temp = [];
    }

    numArr.map(function (elt) {
        elt.map(function (sElt, i) {
            if (cnt === i) {
                if (sElt < 0) {
                    numArr[cnt][i] = 0;
                }
                numArr[cnt][i] = 1;
            }
        });
        cnt++;
    });

    numArr.map(function (elt) {
        elt.map(function (elt) {
            document.querySelector('.result').innerHTML += elt + ' ';
        });
        document.querySelector('.result').innerHTML += '<br/>';
    });

})();
