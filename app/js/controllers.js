/**
 * Created by sha on 04.05.2015.
 */
var registrationApp = angular.module('registrationControllers', []);

function QuestionListController($scope, $http) {
    $http.get('questions/questions.json').success(function (data) {
        $scope.questions = data;
    });

    $scope.orderProp = 'num';
}
QuestionListController.inject = ['$scope', '$http'];
registrationApp.controller('QuestionListController', QuestionListController);

function QuestionDetailsController($scope, $routeParams, $http) {
    $http.get('questions/' + $routeParams.questionId + '.json').success(function (data) {
        $scope.question = data;
    });
    $scope.questionId = $routeParams.questionId;
}
QuestionDetailsController.inject = ['$scope', '$routeParams'];
registrationApp.controller('QuestionDetailsController', QuestionDetailsController);
