describe("Customer checkout - should login, add product to cart, then complete checkout", function() {
    this.timeout(30000);
    
    it("login to customer account", function() {
        browser.url("/customer/account/login");

        //assert that the login form is displayed on page load
        expect(account.loginForm.isVisible()).to.be.true;
        expect(account.loginBtn.isVisible()).to.be.true;

        //login
        account.login('luke.fitzgerald-test2@blueacorn.com', 'pass4luke');

        //assert that you made it to the dashboard page
        account.dashboard.waitForVisible();
        expect(account.dashboard.isVisible()).to.be.true;
    });

    it("should add product to cart, click checkout button", function () {
        browser.url("/boxing/gym-bags/glove-bag");

        //ensure add to cart button is visible, mini cart is not visible
        prod.addToCart.waitForVisible();
        expect(prod.addToCart.isVisible()).to.be.true;
        expect(header.miniCartDropdown.isVisible()).to.be.false;
        
        if (env === 'preprod') {
            browser.pause(2000);
        }
        
        //add simple product to cart
        prod.addToCart.click();
    });

    it("should click checkout button on cart page", function() {
        //wait for checkout button to display on cart page, click it
        cart.checkoutBtn.waitForVisible();
        cart.checkoutBtn.click();
    });

    it("should submit billing address form with already saved address", function() {
        //submit billing address form
        checkout.billingAddressForm.waitForVisible();
        checkout.billingAddressForm.submitForm();
    });

    it("should submit shipping method form", function() {
        //make sure all shipping method elements are displayed
        checkout.shippingMethodForm.waitForVisible();
        checkout.groundShippingLabel.waitForVisible();
        checkout.shippingMethodContinueBtn.waitForVisible();
        checkout.shippingMethodProgessButton.waitForVisible();  

        //select shipping method, submit form            
        checkout.groundShippingLabel.click();
        checkout.submitShippingMethodForm();
    });

    it("should submit payment method form", function() {
        //select payment method (cc / money order), submit form
        checkout.paymentMethodForm.waitForVisible();
        checkout.paymentMethodContinueBtn.waitForVisible();
        checkout.paymentMethodProgressButton.waitForVisible();
        
        if (env === 'stage' || env === 'preprod') {
            checkout.moneyOrderLabel.click();  
        } else if (env === 'prod') {
            checkout.ccLabel.click();
            //checkout.fillCCForm('Visa', '4111111111111111', '04 - April', '2023', '123');
            checkout.fillCCForm('MasterCard', '5474151752505476', '08 - August', '2019', '158');
        }
        
        checkout.paymentMethodContinueBtn.click();
    });

    it("should submit order", function() {
        //place order
        checkout.orderReview.waitForVisible();
        checkout.placeOrderButton.waitForVisible();
        checkout.placeOrderButton.click();
    });

    it("should review order success page", function() {
        //order success page
        checkout.orderSuccessPageHeading.waitForVisible(15000);
        console.log(checkout.orderNumText.getText());
    });

    it("should log out of account", function() {
        browser.url("/customer/account/logout");
    });
});