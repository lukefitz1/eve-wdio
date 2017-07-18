describe("Perform search", function () {    
    this.timeout(25000);

    describe("Perform add to cart action on all product types", function() {
        it("should add simple product to cart", function () {
            browser.url("/boxing/gym-bags/glove-bag");

            //ensure add to cart button is visible
            prod.addToCart.waitForVisible();
            expect(prod.addToCart.isVisible()).to.be.true;

            //get product name, format it
            var prodName = prod.prodName.getText();
            var name = base.formatProdNameString(prodName);
            
            //add configurable product to cart
            prod.addToCart.click();

            //verify redirect to cart page, product is in cart
            cart.pageTitle.waitForVisible();
            expect(cart.pageTitle.getText()).to.equal('Shopping Cart'.toUpperCase());
            expect(cart.successMessage.getText()).to.equal(name + ' was added to your shopping cart.');
        });

        it("should add configurable product to cart", function () {
            browser.url("/boxing/gloves/powerlock-laced-training-gloves");

            //ensure add to cart button is visible
            prod.addToCart.waitForVisible();
            expect(prod.addToCart.isVisible()).to.be.true;

            //get product name, format it
            var prodName = prod.prodName.getText();
            var name = base.formatProdNameString(prodName);

            //add configurable product to cart
            prod.addToCart.click();

            //verify redirect to cart page, product is in cart
            cart.pageTitle.waitForVisible();
            expect(cart.pageTitle.getText()).to.equal('Shopping Cart'.toUpperCase());
            expect(cart.successMessage.getText()).to.equal(name + ' was added to your shopping cart.');
        });

        it("should add bundled product to cart", function () {
            browser.url("/yoga-bundle");

            //ensure add to cart button is visible
            prod.addToCart.waitForVisible();
            expect(prod.addToCart.isVisible()).to.be.true;

            //get product name, format it
            var prodName = prod.prodName.getText();
            var name = base.formatProdNameString(prodName);

            //add configurable product to cart
            prod.addToCart.click();

            //verify redirect to cart page, product is in cart
            cart.pageTitle.waitForVisible();
            expect(cart.pageTitle.getText()).to.equal('Shopping Cart'.toUpperCase());
            expect(cart.successMessage.getText()).to.equal(name + ' was added to your shopping cart.');
        });
    });
});