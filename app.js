
const cartNumber = document.getElementById("cartNumber")
const display = document.getElementById("cartItems")


let cartArray = [];




function addToCart(value){
    let counter = cartNumber.innerText
    counter++
    console.log(counter);
    cartNumber.innerText = counter
    cartArray.push(value)
    
    
    display.innerText = ""
    cartArray.forEach((element)=>{
            
            display.innerHTML += `<p> ${element} </p>`
            // console.log(element)
    })



    // console.log(cartArray);
    
}



function displayCart(){
    display.classList.toggle("cart-display")
}




