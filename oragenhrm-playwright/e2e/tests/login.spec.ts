import test from "@playwright/test";
import App from "../../pages/app-start";


test.only('Demo Orange', async ({page})=>{
    const app = await new App(page).gotTo("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await app.loginToApp("Admin", "admin123");
})