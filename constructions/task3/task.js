(function () {

    var space = '&nbsp',
        star = '*';

    function border(root) {
        var str = '',
            elem = document.createElement('div');
        elem.style.lineHeight = '8px';
        for (var i = 0; i < 10; i++) {
          str += star;
        }
        elem.innerHTML = str;
        return root.appendChild(elem);
    }

    function square() {
        var root = document.querySelector('.result>div:nth-child(1)');
        for (var i = 0; i < 10; i++) {
            border(root);
        }
    }

    function firstTriangle() {
        var root = document.querySelector('.result>div:nth-child(2)');


        function center(max) {
            var str = '',
                elem = document.createElement('div');
                elem.style.lineHeight = '8px';
            for (var i = 0; i <= max; i++) {
                str += star;
            }
            elem.innerHTML = str;
            return root.appendChild(elem);
        };

        for (var i = 0; i < 9; i++) {
            center(i);
          }

        border(root);
    }

    function secondTriangle() {
        var root = document.querySelector('.result>div:nth-child(3)'),
            stars = 1;

        function center(max, stars) {
            var str = '',
                elem = document.createElement('div');
                elem.style.lineHeight = '8px',
                walls = max;
                for (var i = 0; i < Math.round(walls / 2)+1; i++) {
                    str += space;
                }
                for (var i = 0; i < stars; i++) {
                    str += star;
                }
                elem.innerHTML = str ;
                return root.appendChild(elem);
        };

        for(var i = 9; i--;) {
            center(i, stars++)
        }
        border(root);
    };

    function rhombus() {
        var root = document.querySelector('.result>div:nth-child(4)'),
            stars = 1;

        function center(max, stars) {
            var str = '',
                elem = document.createElement('div');
                elem.style.lineHeight = '8px',
                walls = max;
                for (var i = 0; i < Math.round(walls / 2)+1; i++) {
                  str += space + space;
                }
                for (var i = 0; i < stars; i++) {
                  str += star;
                }
                elem.innerHTML = str ;
                return root.appendChild(elem);
            }

        for (var i = 8; i--;) {
            center(i, stars++)
        }

        border(root);
        stars = 8;
        for (var i = 0; i < 8; i++) {
            center(i, stars--);
        }
    }

    square();
    firstTriangle();
    secondTriangle();
    rhombus();

})();
