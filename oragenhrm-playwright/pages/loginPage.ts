import { Page } from "@playwright/test";
import HomePage from "./loginPage";

class LoginPage{

    constructor(private readonly page: Page){
    }

    private username_txtBox = this.page.getByPlaceholder('Username');
    private password_txtBox = this.page.getByPlaceholder('Password');
    private login_btn = this.page.getByRole('button', {name: 'Login'});

    async loginToApp(username: string, password: string){
        await this.username_txtBox.fill(username);
        await this.password_txtBox.fill(password);
        await this.login_btn.click();
        return new HomePage(this.page);
    }

}

export default LoginPage;