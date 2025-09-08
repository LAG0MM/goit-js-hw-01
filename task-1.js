function  makeTransaction (quantity, pricePerDroid) {
    let totalPrice = quantity *pricePerDroid
    console.log('you ordered '+ quantity +' droids worth ' + totalPrice + ' credits!')
}

console.log(makeTransaction(4,1500))