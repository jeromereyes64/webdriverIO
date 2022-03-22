import BasePage from '../../base/base';
import LoginPage from '../login_page/login.page';

class HomePage extends BasePage {

    //Element Locators
    get productHeader() { return $("//span[contains(text(), 'Products')]"); }
    get burgerBtn() { return $("//button[@id='react-burger-menu-btn']"); }
    get logoutBtn() { return $("//*[@id='logout_sidebar_link']"); }

    //Methods
    async logout(){
        const burgerBtn = await this.burgerBtn;
        const logoutBtn = await this.logoutBtn;
        const loginHeader = await LoginPage.loginHeader;

        await this.clickElement(burgerBtn);
        await this.clickElement(logoutBtn);
        await this.waitForElementToExist(loginHeader);
    };
}
export default new HomePage();