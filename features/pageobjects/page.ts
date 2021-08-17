/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default abstract class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    
    assert = {}

    public async open (path: string) {
        return await browser.url(`http://automationpractice.com/${path}`)
    }
}
