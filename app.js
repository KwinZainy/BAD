
const cartNumber = document.getElementById("cartNumber")
const display = document.getElementById("cartItems")


let cartArray = [];


let words = ["This", "is", "just", "the", "beginning", "of", "learning" ,"js"]


let lastElement = words.indexOf("of");


let new_words = "Ble ssing is a chicken"

// console.log(new_words.split(" "));

let splitted_words = new_words.split(",")
let name = splitted_words[3]

console.log(name);

 



console.log(lastElement);
console.log(words.splice(lastElement,1,"REACT"))
console.log(words);





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



