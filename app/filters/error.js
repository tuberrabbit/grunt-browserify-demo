bf.filter('error', function (Errors) {
    return function (name, customMsg) {
        var errorMapper = angular.extend({}, Errors, customMsg);
        return errorMapper[name] || name;
    };
});