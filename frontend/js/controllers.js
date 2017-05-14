'use strict';

angular.module('stockApp')

.controller('HeaderController', ['$scope', 'optionFactory', function ($scope, optionFactory) {

    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showOptions = false;
    $scope.message = "Loading ...";

    optionFactory.query(
        function (response) {
            $scope.delta = delta;
            $scope.price = price;
            $scope.strike = strike;
            $scope.vomma = vomma;
            $scope.gamma = gamma;

        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
        });

