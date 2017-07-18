class Cart {
	get checkoutBtn() { return $('body > div.wrapper > div > div.main-container.col1-layout > div > div > div.cart.display-single-price > div.page-title.title-buttons > ul > li > button'); }
	get successMessage() { return $('body > div.wrapper > div > div.main-container.col1-layout > div > div > div.cart.display-single-price > ul > li'); }
	get pageTitle() { return $('body > div.wrapper > div > div.main-container.col1-layout > div > div > div.cart.display-single-price > div.page-title.title-buttons > h1'); }
}

module.exports = new Cart();