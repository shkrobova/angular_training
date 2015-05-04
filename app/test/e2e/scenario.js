/**
 * Created by sha on 04.05.2015.
 */
describe('Self registration', function () {
    describe('Filter questions', function () {
        beforeEach(function () {
            browser.get('app/index.html');
        });
        var questions = element.all(by.repeater('question in questions'));
        var query = element(by.model('query'));

        it('Should filter question list', function () {
            expect(questions.count()).toBe(2);
            query.sendKeys('1');
            expect(questions.count()).toBe(1);
            query.clear();
        })
    });

    describe('Order questions', function(){
        beforeEach(function () {
            browser.get('app/index.html');
        });
        var questionNames = element.all(by.repeater('question in questions').column('question.name'));
        function getNames() {
            return questionNames.map(function(elm) {
                return elm.getText();
            });
        }
        element(by.css('option[value="name]')).click();
        expect(getNames()).toEqual([
            "Character question 1",
            "Character question 2"
        ]);
    });
});