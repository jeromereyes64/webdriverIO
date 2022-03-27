import LoginPage from '../../page/login_page/login.page';
import HomePage from '../../page/home_page/home.page';

describe('Sauce Demo Page - Login', async () => {
    
    before(async () => {
        await LoginPage.openLoginPage();
    });
 
    it('should be able to login using valid user credentials @smokeTest', async () => {
        await LoginPage.loginValidUser();
    });

    it('should not be able to login using lock user credentials', async () => {
        await LoginPage.loginLockOutUser();
    });

    it('should not be able to login using invalid password', async () => {
        await LoginPage.loginInvalidPassword();
    });

});