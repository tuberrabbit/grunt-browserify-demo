var drag = function (ev) {
    ev.dataTransfer.setData('img', ev.target.id);
};

var allowDrop = function (ev) {
    ev.preventDefault();
};

var drop = function (ev) {
    ev.preventDefault();
    var ele = document.getElementById(ev.dataTransfer.getData('img'));
    ele.classList.add('animation--fade-out');
    setTimeout(function () {
        ele.classList.remove('animation--fade-out');
    }, 2001);
};