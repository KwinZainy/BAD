const bagBtn = document.getElementById("bagBtn")
const foodBtn = document.getElementById("foodBtn")
const phoneBtn = document.getElementById("phoneBtn")
const cartNumber = document.getElementById("cartNumber")



function addToCart(){
    let counter = cartNumber.innerText
    counter++
    console.log(counter);
    
    cartNumber.innerText = counter
}



bagBtn.addEventListener("click", addToCart)
phoneBtn.addEventListener("click", addToCart)
foodBtn.addEventListener("click", addToCart)