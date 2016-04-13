bf.directive('bfCaptcha', function () {
    return {
        restrict: 'A',
        link: function (scp, elm) {
            function changeSrc() {
                elm.attr('src', 'http://lorempixel.com/50/30?random=' + Date.now());
            }

            changeSrc();
            elm.on('click', changeSrc);
        }
    }
});