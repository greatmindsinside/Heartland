import Page from './page';

class HomePage extends Page {
    
    get inputSearch () { return $('#search_query_top') }
    get btnSubmit () { return $('button[type="submit"]') }

    public async searchItems(items: string) {await this.inputSearch.setValue(items);}
    public async submitSearch() { await this.btnSubmit.click() }
    public open () { return super.open('index.php'); }
}

export default new HomePage();
