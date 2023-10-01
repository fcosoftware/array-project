const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")

//let myLi = ""

function showAll(productsArrays) {

    let myLi = ""  

    productsArrays.forEach((product) => {
        myLi += `
            
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price}</p>
            </li>
            
            `
           
    })
    
   list.innerHTML = myLi
}

function mapAllItems() {
    const newPrice = menuOptions.map((product) => ({
        ...product,  // Spread Operator
        //name: product.name,
        price: product.price * 0.9, // aqui vai dar 10 % de desconto
        //vegan: product.vegan,
        //src: product.src
    }))

        showAll(newPrice)
   
    //console.log(newPrice)
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions))

buttonMapAll.addEventListener("click", mapAllItems)