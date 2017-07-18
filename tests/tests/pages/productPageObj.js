class ProductPage {
	get addToCart() { return $('button*=Add to Cart'); }
	get prodName() { return $('body > div.wrapper > div > div.main-container.col1-layout > div > div.col-main > div.amgroupcat > div > div.product-name'); }
}

module.exports = new ProductPage();