export default class Page {

    //Open Url
    async openURL(path) {
        await browser.url(path);
    };

    //Click Element
    async clickElement(element) {
        try {
            await browser.waitUntil (async () => 
                (await element.isExisting() === true),{timeout: 5000}
            );
            await element.click();
            console.log(element + ' successfully clicked.');
        
        } catch (error) {
            console.log("Element not clicked " + element);
            console.log(error);
        }
    };

    //Entering value in element
    async setValue(elementToSetValue, value) {
        try {
            await browser.waitUntil (async () => 
                (await elementToSetValue.isExisting() === true ),{timeout: 5000}
            );
            await elementToSetValue.click();
            await elementToSetValue.setValue(value);
            console.log();
            console.log('Successfully entered the value:', await elementToSetValue.getValue());
            
        } catch (error) {
            console.log("Failed to enter value " + value + " in element " + elementToSetValue);
            console.log(Error);
        };
    };

    //Wait for element to exist
    async waitForElementToExist(elementToWait) {
        try {
            await elementToWait.waitForExist({ timeout: 5000 });
            console.log(elementToWait + " is existing.");
        } catch (error) {
            console.log('Element: ' + elementToWait + 'does not exist within the given wait time.');
            console.log(error);
        }
    };

}