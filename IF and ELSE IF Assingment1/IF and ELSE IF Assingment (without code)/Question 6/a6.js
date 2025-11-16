function calculateDiscount(purchaseAmount) {
    if (purchaseAmount >= 5000) {
        return 20;
    } else if (purchaseAmount >= 2000) {
        return 10; 
    } else {
        return 0; 
    }
}
console.log(calculateDiscount(6000));
console.log(calculateDiscount(3000)); 
console.log(calculateDiscount(1000)); 