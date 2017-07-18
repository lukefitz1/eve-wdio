class Header {
	get header() { return $('#header'); }
	get logo() { return $('#header > div.page-header-container > a'); }
	get search() { return $('#sli_search_1'); }
	get searchForm() { return $('#search_mini_form'); }
	get searchDropdown() { return $('#sli_autocomplete'); }
	get miniCartIcon() { return $('#header > div.page-header-container > div.skip-links > div > a'); }
	get miniCartDropdown() { return $('#header-cart'); }
	get miniCartCheckoutBtn() { return $('#header-cart > div.minicart-wrapper > div.minicart-actions > ul > li > a'); }
}

module.exports = new Header();