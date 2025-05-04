// const bagBtn = document.getElementById("product-1")
// const foodBtn = document.getElementById("foodBtn")
// const phoneBtn = document.getElementById("phoneBtn")
const cartNumber = document.getElementById("cartNumber")
const cartDisplay = document.getElementById("cartDisplay")


function addToCart(value){
    let counter = cartNumber.innerText
    counter++
    console.log(counter);
    cartNumber.innerText = counter
    cartDisplay.innerHTML += `<p>${value}</p>`
}



// bagBtn.addEventListener("click", addToCart)
// phoneBtn.addEventListener("click", addToCart)
// foodBtn.addEventListener("click", addToCart)