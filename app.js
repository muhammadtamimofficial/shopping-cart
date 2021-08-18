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
};
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
