function updateProductNumber(product, price, isadd) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isadd == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update productTotal
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate Total
    calculateTotal();
};
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number').value;
    const productNumber = parseInt(productInput);
    return productNumber;
}
function calculateTotal() {
    // const phoneInput = document.getElementById('phone-number').value;
    // const phoneNumber = parseInt(phoneInput);
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tex = subTotal / 10;
    const TotalPrice = subTotal + tex;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tex;
    document.getElementById('total-price').innerText = TotalPrice;
}
// handel phone incrige decrig
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

// handel case incrige decrig
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});
