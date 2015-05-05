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

    describe('Order questions', function () {
        beforeEach(function () {
            browser.get('app/index.html');
        });

        var questionNames = element.all(by.repeater('question in questions').column('question.name'));

        function getNames() {
            return questionNames.map(function (elm) {
                return elm.getText();
            });
        }

        it('Should not do something', function () {
            expect(questionNames.count()).toBe(2);
        });

        it('Should order', function () {
            element(by.css('option[value=name]')).click();
            expect(getNames()).toEqual([
                "Character question 1",
                "Character question 2"
            ]);
        });

        it('Should display phone page - character question 2', function () {
            element.all(by.css('li a')).first().click();
            browser.getLocationAbsUrl().then(function(url){
                expect(url.split('#')[1]).toBe('/questions/question2');
                expect(element(by.binding('questionId')).getText()).toBe('question2');
            });
        });
    });
});