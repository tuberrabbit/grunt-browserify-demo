bf.directive('bfAssertSameAs', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elm, attrs, modelCtl) {
            modelCtl.$validators.same = function (modelValue, viewValue) {
                var value = modelValue || viewValue;
                var anotherValue = scope.$eval(attrs.bfAssertSameAs);
                return value === anotherValue;
            }
        }
    }
});