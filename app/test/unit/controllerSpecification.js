/**
 * Created by sha on 04.05.2015.
 */
describe('Controllers tests', function(){
    describe("Questions controller", function(){
        beforeEach(module('registration'));
        it('should create 2 questions', inject(function($controller){
            var scope ={};
            cntrl = $controller('QuestionListController', {$scope:scope});
            expect(scope.questions.length).toBe(2);
        }));
    });
});