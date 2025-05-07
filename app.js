
const cartNumber = document.getElementById("cartNumber")
const add = document.getElementById("plus")

let cartArray = [];



function addToCart(nameOfItem){
    let counter = cartNumber.innerText
    counter++
    
    cartNumber.innerText = counter

    cartArray.push(nameOfItem)
    

    localStorage.setItem("nameOfCartItems", cartArray)

    
}


function removeFromCart(nameOfItem){
    let counter = cartNumber.innerText
    counter--

    cartNumber.innerText = counter
    if (cartNumber.innerText < 0){
        cartNumber.innerText = 0
    }

    let itemIndex = cartArray.indexOf(nameOfItem) 

   
    cartArray.splice(itemIndex, 1)

   localStorage.setItem("nameOfCartItems", cartArray)

    


}