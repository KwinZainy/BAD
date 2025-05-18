
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
        localStorage.removeItem("nameOfCartItems")


    }

    let itemIndex = cartArray.indexOf(nameOfItem) 

    cartArray.splice(itemIndex, 1)

    localStorage.setItem("nameOfCartItems", cartArray)
}

minus.forEach((element)=> {
    element.addEventListener('click', function(){
        const nameOfItem = this.getAttribute("data-item")
        removeFromCart(nameOfItem)
    })
    
})

// minus.addEventListener("click", removeFromCart())
// add.addEventListener("click", addToCart())



// Function Declaration (Named Function)

function doSomething(name){
      let fruits = ["banana", "apple", "orange", "pineapple"]
        for(let element of fruits){
            console.log(element);
            
        }
}

// Arrow Function (ES6)
const glitch = () =>{

    let names = ["Ahmed", "Glitch", "yinka", "dami", "seun", "Gbenga", "Funmi", "Shade"]


    let answer = 0

    while(answer  < names.length){
        console.log(names[answer]);
        answer++
    }


    
    
}


// Function Expression
const ahmed = function () {

    let names = ["Ahmed", "Glitch", "yinka", "dami", "seun", "Gbenga", "Funmi", "Shade"]

    for (index = 0; index < names.length; index++){
        console.log(names[index]);
        
        
    }

       
        
}


// ahmed()
// ahmed()
// doSomething()

let mapMethod = () => {
    let fruits = ["apple", "banana", "peach", "cashew", "Walnut", "pineapple"];

    let newFruits = fruits.map(function(element,index){
        return "The fruits is " + index +  element
        
    })

    console.log(newFruits);
    
  
}

let reduceMethod = () => {
    let numbers = [1,4,5,6,23,56]

    let total = numbers.reduce(function (tax, currentNumber){
        return tax + currentNumber

    }, 5)

    console.log(total);
    
    
}


let filterMethod = () => {
    let fruits = ["apple", "mango", "cashew", "banana", "pineapple", "watermelon"]

    let newFruits = fruits.filter(function(element){
        return element.length > 5
    })
    
    
    console.log(newFruits);
    
}

mapMethod();

reduceMethod();

filterMethod()






let person = {
    name : ["blessing", "glitch", "david"],
    age : [12,14,18],
    color : ["red", "black", "chocolate", "pink"],
    display : function (word){
        console.log(`i Can Display a word, whis is ${word}`)
    },

}


let people = {
    ahmed : {
        id : 1,
        age : 18,
        color : "custard bucket",
        location : "Ikrd"
    },

    blessing : {
        id : 2,
        age: 10,
        color : {
            primaryColor :  ["chocolate", "dark skinned", "yellow", "custard bucket"],
            secondaryColor :  {
                mixedColor : ["red", "pink", "blue", "bleachColor"],
                pairColor : ["Brown", "Black"]
            }
        },
        location : "yaba left"
    }
}


console.log(people.blessing.color.secondaryColor.pairColor[1]);



document.addEventListener("keydown", function(event){
    // console.log("This key was pressed " + event.key);

    if(event.key == "Enter"){
        console.log("Enter Buton was clicked");
        
    }
    
})

// console.