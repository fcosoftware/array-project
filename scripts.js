const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonReduceAll = document.querySelector(".sum-all")
const buttonFilterAll = document.querySelector(".filter-all")

//let myLi = ""

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br',
    {style: 'currency', 
    currency: 'BRL'
});
    return newValue
}

function showAll(productsArrays) {

    let myLi = ""  

    productsArrays.forEach((product) => {
        myLi += `
            
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">R$ ${formatCurrency(product.price)}</p>
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

function sumAllItems() {
   const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
   
   list.innerHTML = `
   
            <li>
                <p>O valor total dos Itens é R$ ${formatCurrency(totalValue)}</p>        
            </li>
        `
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan === true)

    showAll(filterJustVegan)
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions))

buttonMapAll.addEventListener("click", mapAllItems)

buttonReduceAll.addEventListener("click", sumAllItems)

buttonFilterAll.addEventListener("click", filterAllItems)