/**
 * Created by sha on 05.05.2015.
 */
var registrationApp = angular.module("registration", [
    'ngRoute',
    'registrationControllers'
]);

registrationApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/questions', {
            templateUrl: 'html/partial/questions.html',
            controller: 'QuestionListController'
        }).when('/questions/:questionId', {
            templateUrl: 'html/partial/question-detail.html',
            controller: 'QuestionDetailsController'
        }).otherwise({
            redirectTo: '/questions'
        })
    }
]);