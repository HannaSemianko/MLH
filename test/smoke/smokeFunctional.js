import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url('');
    });


    it('TC-026 Submit button is enable after fields 1 -4 are filled in with valid values', function () {
        $(sel.name).setValue("LadyBug007");
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        let submitButton = $(sel.submitButton).isEnabled();
        expect(submitButton).toEqual(true);
    });

    it('TC-027 User can create a story with valid values', function () {
        browser.refresh();
        $(sel.name).setValue("LadyBug007");
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        $(sel.submitButton).click();
        browser.pause(2000);
        let tryAgainButton = $(sel.tryAgainButton).isDisplayed();
        expect(tryAgainButton).toEqual(true);
    });
});