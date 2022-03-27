import BasePage from '../../base/base';
import HomePage from '../home_page/home.page';

class LoginPage extends BasePage {

//Element Locators
    get userName() { return $("//input[@id='user-name']"); }
    get userPassword() { return $("//input[@id='password']"); }
    get loginBtn() { return $("//input[@id='login-button']"); }
    get loginError() { return $("//h3[@data-test='error']"); }
    get loginHeader() { return $("//div[@class='login_logo']"); }

//Methods

    //open base url
    async openLoginPage() {
        await super.openURL('');
        await browser.maximizeWindow(); 
    };

    async verifyLoginPage() {
        const loginBtn = await this.loginBtn;
        const userPassword = await this.userPassword;
        const userName = await this.userName;
        const loginHeader = await this.loginHeader;

        await this.waitForElementToExist(loginBtn);
        await this.waitForElementToExist(userPassword);
        await this.waitForElementToExist(userName);
        await this.waitForElementToExist(loginHeader);
    };

    async loginUser(userNameValue,userPasswordValue) {
        const loginBtn = await this.loginBtn;
        const userPassword = await this.userPassword;
        const userName = await this.userName;

        await this.setValue(userName, userNameValue);
        await this.setValue(userPassword, userPasswordValue);
        await this.clickElement(loginBtn);
    };

    async loginValidUser() {
        const productHeader = await HomePage.productHeader;

        await this.verifyLoginPage();
        await this.loginUser(process.env.STANDARD_USER, process.env.PASSWORD);
        await this.waitForElementToExist(productHeader);
        console.log("User successfully login");
        await HomePage.logout();
    };

    async loginLockOutUser() {
        const loginError = await this.loginError;

        await this.verifyLoginPage();
        await this.loginUser(process.env.LOCKOUT_USER, process.env.PASSWORD);
        await this.waitForElementToExist(loginError);
    };

    async loginInvalidPassword() {
        const loginError = await this.loginError;

        await this.verifyLoginPage();
        await this.loginUser(process.env.LOCKOUT_USER, process.env.INVALID_PASSWORD);
        await this.waitForElementToExist(loginError);
    };

};
export default new LoginPage();