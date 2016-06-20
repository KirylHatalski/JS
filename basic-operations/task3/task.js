var h = 20,
    r = 5,
    V = Math.PI * 2 * h,
    S = Math.PI * r * (r + h);

document.querySelector('.result div:nth-child(1)').innerHTML = 'Capacity: ' + V;
document.querySelector('.result div:nth-child(2)').innerHTML = 'Space: ' + S;
