var app = angular.module('foodspec-parser', []);

app.controller('receivePdfController', function ($scope) {

    $scope.formData = {};
    $scope.formData.file = "";

    $scope.pdfSubmit = () =>
    {
        console.log($scope.formData.email);
        console.log($scope.formData);

    }


});


app.directive("selectNgFiles", [function () {

    return {
        require: "ngModel",
        link: function postLink(scope,elem,attrs,ngModel) {
            elem.on("change", function(e) {
                var files = elem[0].files;
                ngModel.$setViewValue(files);
            })
        }
    }
    
}]);