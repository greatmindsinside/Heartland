import Page from './page';

/** define objects related to the search results page here. */
class SearchPage extends Page {
    /** define selectors search page selectors here */
    get errorMessage () { return $("#center_column > p") }
    get item() {return $("#best-sellers_block_right > div > ul > li:nth-child(1) > a > img")}
    get AddQuantity() {return $("#quantity_wanted_p > a.btn.btn-default.button-plus.product_quantity_up > span > i")}
    get AddToCart() {return $("#add_to_cart > button > span") }
    get SizeMenu() {return $("#group_1")}
    get ProceedToCheckout() {return $("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span")}
    get ProceedToCheckOut2() {return $("#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span")}

    //public async EnsureErrorExists(expectedMessage: string) { expect(this.errorMessage).toExist() }
    public async FindItem() 
    {
        await this.item.waitForClickable()
        await this.item.scrollIntoView()
        await this.item.click()       
    }

    public async AddMoreThenOneItem() 
    {
        await this.AddQuantity.waitForClickable()
        await this.AddQuantity.scrollIntoView()
        await this.AddQuantity.click()        
    }

    public async SelectSize() 
    {
        await this.SizeMenu.waitForEnabled()
        await this.SizeMenu.scrollIntoView()
        await this.SizeMenu.click()
        await this.SizeMenu.selectByVisibleText("M")
    }

    public async AddItemToCart() 
    {
        await this.AddToCart.waitForClickable()
        await this.AddToCart.scrollIntoView()
        await this.AddToCart.click()        
    }

    public async CheckOut() 
    {
        await this.ProceedToCheckout.waitForClickable()
        await this.ProceedToCheckout.scrollIntoView()
        await this.ProceedToCheckout.click()

        await this.ProceedToCheckOut2.waitForClickable()
        await this.ProceedToCheckOut2.scrollIntoView()
        await this.ProceedToCheckOut2.click()
       
        await browser.debug()
    }

    



}

export default new SearchPage();
