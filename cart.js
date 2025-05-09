let cartItemList = localStorage.getItem("nameOfCartItems");
const display = document.getElementById("cartItems")



console.log(cartItemList);


function displayItems(){
  display.innerText = ""

    let arrayCarts =  cartItemList.split(",")

    for (let index = 0; index < arrayCarts.length; index++) {
          
          let eachItem = arrayCarts[index];

          display.innerHTML += `<p> ${eachItem} </p>`  
          
      
    }


    // arrayCarts.forEach((element)=>{
    //   display.innerHTML += `<p> ${element} </p>`
    // })

}
console.log(cartItemList);

displayItems();