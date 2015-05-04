/**
 * Created by sha on 04.05.2015.
 */
var registrationApp = angular.module('registration', []);
registrationApp.controller('QuestionListController', function($scope){
    $scope.questions = [
        {name: 'Character question 1', num: 4},
        {name: 'Character question 2', num: 3}
    ];
    $scope.orderProp = 'num';
});
