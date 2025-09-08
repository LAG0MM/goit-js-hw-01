function getShippingMessage (country, price, deliveryFee) {
    let totalPrice = price + deliveryFee
    console.log('Shipping to ' + country + ' will cost ' + totalPrice + ' credits')
}
console.log(getShippingMessage('Storojunec' , 120 , 50))