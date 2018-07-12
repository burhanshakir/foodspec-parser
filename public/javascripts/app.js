var app = angular.module('foodspec-parser', []);

app.controller('receivePdfController', function ($scope) {


    $scope.pdfSubmit = () =>
    {
        console.log($scope.formData);

    }



});