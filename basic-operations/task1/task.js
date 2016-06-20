(function () {
    var x = 6,
        y = 15,
        z = 4;

    document.querySelector('.result div:nth-child(1)').innerHTML = (x += y - x++ * z);
    document.querySelector('.result div:nth-child(2)').innerHTML = (z = -- x - y * 5);
    document.querySelector('.result div:nth-child(3)').innerHTML = (y /= x + 5 % z);
    document.querySelector('.result div:nth-child(4)').innerHTML = (z = x++ + y * 5);
    document.querySelector('.result div:nth-child(5)').innerHTML = (x = y - x++ * z);

})()
