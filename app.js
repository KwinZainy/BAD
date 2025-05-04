
const cartNumber = document.getElementById("cartNumber")
const cartItems = document.getElementById("cartItems")


let cartArray = [];




function addToCart(value){
    let counter = cartNumber.innerText
    counter++
    console.log(counter);
    cartNumber.innerText = counter
    cartArray.push(value)

    console.log(cartArray);
    
}


