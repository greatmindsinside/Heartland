import { Given, When, Then, } from "@cucumber/cucumber";
import HomePage from "../pageobjects/home.page";
import SearchPage from "../pageobjects/search.page";

class POM { static pages: { [key: string]: any } = {homepage: HomePage};} 

Given(/^I am on the (\w+) page$/, async (page: string | number) => await POM.pages[page].open());
When(/^I type "(.*?)" into the search box$/, async (text: string) => { await HomePage.searchItems(text); });
Then(/^click on search$/, async () => { await HomePage.submitSearch(); });
Then(/^select a dress$/, async () => { await SearchPage.FindItem(); });
Then(/^change the size$/, async () => { await SearchPage.SelectSize(); });
Then(/^add it to the cart$/, async () => { await SearchPage.AddItemToCart(); });
Then(/^proceed to checkout$/, async () => { await SearchPage.CheckOut(); });

Then(/^I should see a message saying (.*)$/, async (message: string) => {
    await expect(SearchPage.errorMessage).toBeExisting();
    await expect(SearchPage.errorMessage).toHaveTextContaining(message);
});


