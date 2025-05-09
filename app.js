
const cartNumber = document.getElementById("cartNumber")
const add = document.querySelectorAll("plus")
const minus = document.querySelectorAll(".minus")

let cartArray = [];



// let lastElement = words.indexOf("of");


// let new_words = "Ble ssing is a chicken"

// // console.log(new_words.split(" "));

// let splitted_words = new_words.split(",")
// let name = splitted_words[3]

// console.log(name);


// console.log(lastElement);
// console.log(words.splice(lastElement,1,"REACT"))
// console.log(words);





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

minus.forEach((element)=> {
    element.addEventListener('click', ()=>{
        const nameOfItem = this.getAttribute("data-item")
        removeFromCart(nameOfItem)
    })
    
})

// minus.addEventListener("click", removeFromCart())
// add.addEventListener("click", addToCart())

console.log(minus);
