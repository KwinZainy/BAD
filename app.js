
const cartNumber = document.getElementById("cartNumber")


let cartArray = [];



function addToCart(nameOfItem){
    let counter = cartNumber.innerText
    counter++
    
    cartNumber.innerText = counter

    cartArray.push(nameOfItem)
    

    localStorage.setItem("nameOfCartItems", cartArray)

    
}
