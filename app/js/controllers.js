/**
 * Created by sha on 04.05.2015.
 */
var registrationApp = angular.module('registration', []);
function QuestionListController ($scope, $http) {
    $http.get('questions/questions.json').success(function (data) {
        $scope.questions = data;
    });

    $scope.orderProp = 'num';
}
QuestionListController.inject = ['$scope', '$http'];
registrationApp.controller('QuestionListController', QuestionListController);
