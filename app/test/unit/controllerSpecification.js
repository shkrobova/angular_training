/**
 * Created by sha on 04.05.2015.
 */
describe('Controllers tests', function () {
    describe("Questions controller", function () {
        var scope, ctrl, httpMock;
        beforeEach(module('registration'));
        beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
            httpMock = $httpBackend;
            scope = $rootScope.$new();

            httpMock.expectGET('questions/questions.json').respond([{name: 'Character question 1'}, {name: 'Character question 2'}]);
            ctrl = $controller('QuestionListController', {$scope: scope});
        }));
        it('should create 2 questions', function () {
            httpMock.flush();
            expect(scope.questions.length).toBe(2);
        });
    });
})
;