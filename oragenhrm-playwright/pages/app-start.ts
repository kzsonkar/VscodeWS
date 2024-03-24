import { Page } from "@playwright/test";
import LoginPage from "./loginPage";

export default class App{

    constructor(private readonly page: Page){
    }

    async gotTo(url: string){
        await this.page.goto(url);
        return new LoginPage(this.page);
    }

}