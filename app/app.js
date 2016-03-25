const IMAGE_SRC = [
    './images/img1.jpeg',
    './images/img2.jpeg'
];

var img1Src = 0;
var img2Src = 1;

var img1 = document.getElementById('img1');
img1.src = getImgSrc(img1Src);
var img2 = document.getElementById('img2');
img2.src = getImgSrc(img2Src);

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
    img1Src ^= img2Src;
    img2Src ^= img1Src;
    img1Src ^= img2Src;
};

function getImgSrc(src) {
    return IMAGE_SRC[src];
};

var drop = function (ev) {
    ev.preventDefault();
    var animationClass = getAnimationClassByDirection(ev.target.id);
    img1.classList.add('animated', animationClass);
    setTimeout(function () {
        updateSrc();
        img1.src = getImgSrc(img1Src);
        img2.src = getImgSrc(img2Src);
        img1.classList.remove('animated', animationClass);
    }, 500);
};