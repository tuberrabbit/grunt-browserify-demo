var idx = 0;

var img1 = document.getElementById('img1');
img1.src = './images/img1.jpeg';
var img2 = document.getElementById('img2');
img2.src = './images/img2.jpeg';
var img3 = document.getElementById('img3');
img3.src = 'http://lorempixel.com/600/300?0';

var allowDrop = function (ev) {
    ev.preventDefault();
};

var getAnimationClassByDirection = function (direction) {
    switch (direction.split('-')[2]) {
        case 'top':
            return 'fadeOutUpBig';
        case 'right':
            return 'fadeOutRightBig';
        case 'bottom':
            return 'fadeOutDownBig';
        case 'left':
            return 'fadeOutLeftBig';
    }
};

var updateSrc = function () {
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = 'http://lorempixel.com/600/300?' + ++idx;
};

var drop = function (ev) {
    ev.preventDefault();
    var animationClass = getAnimationClassByDirection(ev.target.id);
    img1.classList.add('animated', animationClass);
    setTimeout(function () {
        updateSrc();
        img1.classList.remove('animated', animationClass);
    }, 500);
};