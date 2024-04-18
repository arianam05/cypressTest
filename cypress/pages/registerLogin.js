class register {

    // paths from register and login page

    checkoutBtn = '.col-sm-6 > .btn'
    registesLoginBtn = '.modal-body > :nth-child(2) > a > u'
    signForm = '.signup-form'
    // register information
    sigName = '[data-qa="signup-name"]'
    sigEmail = '[data-qa="signup-email"]'
    signBtn = '[data-qa="signup-button"]'
    formTittle = ':nth-child(1) > b'
    passwordBtn = '[data-qa="password"]'
    day = '[data-qa="days"]'
    month = '[data-qa="months"]'
    year = '[data-qa="years"]'
    firstName = '[data-qa="first_name"]'
    lastName = '[data-qa="last_name"]'
    address = '[data-qa="address"]'
    country = '[data-qa="country"]'
    state = '[data-qa="state"]'
    city = '[data-qa="city"]'
    zip = '[data-qa="zipcode"]'
    phone = '[data-qa="mobile_number"]'
    createBtn = '[data-qa="create-account"]'
    accountCreatedTittle = '.col-sm-9'
    continueBtn = '[data-qa="continue-button"]'

    //Cart
    cartBtn = '.shop-menu > .nav > :nth-child(3)'
    placeorderBtn = ':nth-child(7) > .btn'
    tittle = '.heading'

    //Payment form
    fullName = '[data-qa="name-on-card"]'
    cardNum = '[data-qa="card-number"]'
    cvc = '[data-qa="cvc"]'
    expireMonth = '[data-qa="expiry-month"]'
    expireYear = '[data-qa="expiry-year"]'
    payBtn = '[data-qa="pay-button"]'
    orderPlaceTittle = '[data-qa="order-placed"] > b'

    //login and logout btn
    logoutLoginBtn = '.shop-menu > .nav > :nth-child(4)'
    loginBtnOutside = '.nav > :nth-child(4)'
    loginForm = '.login-form > h2'
    loginEmail = '[data-qa="login-email"]'
    passwordLogin = '[data-qa="login-password"]'
    loginBtn = '[data-qa="login-button"]'

}
export default register;