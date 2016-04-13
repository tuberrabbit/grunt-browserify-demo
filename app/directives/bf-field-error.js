bf.directive('bfFieldError', function ($compile) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elm, attrs, modelCtl) {
            var subScope = scope.$new(true);
            subScope.hasError = function () {
                return modelCtl.$invalid && modelCtl.$dirty;
            };
            subScope.errors = function () {
                return modelCtl.$error;
            };
            subScope.customMsg = scope.$eval(attrs.bfFieldError);
            var hint = $compile('<ul ng-if="hasError()">' +
                '<li ng-repeat="(name, wrong) in errors()" ng-if="wrong">{{name | error : customMsg}}</li>' +
                '</ul>')(subScope);
            elm.after(hint);
        }
    };
});