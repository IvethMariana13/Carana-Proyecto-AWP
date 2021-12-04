let productList = [];
let carrito = [];
let total = 0;

function add (productId, price) {
    const product = productList.find (p => p.id === productId);
    product.stock--;

    console.log(productId, price);
    carrito.push(productId);
    total = total + price;
    document.getElementById("checkout"). innerHTML = `Pagar $${total}`
    displayProducts();

}
async function pay (){
    try {
        const productList = await (await fetch ("/api/pay",{
            method: "post",
            body: JSON.stringify(carrito),
            headers:{
                "Content-Type": "application/json"
            }
        
    })).json();
    }
    catch {
        window.alert("Sin Stock");
    }
    carrito = [],
    total = 0;
    await fetchProducts();
    document.getElementById("checkout").innerHTML = `pagar $${total}`
}
//----
function displayProducts() {
    let productsHTML = '';
    productList.forEach(p => {
        let buttonHtml =  `<button class="button-add" onclick="add(${p.id}, ${p.price})">Agregar</button>`;
        if (p.stock <= 0){
            buttonHtml = `<button class="button-add" onclick="add(${p.id}, ${p.price})">Sin Stock</button>`;
        }
        productsHTML +=
        `<div class="product-container">
            <h4>${p.name}</h4>
            <img src="${p.image}">
            <h4>${p.material}</h3>
            <h4>$${p.price}</h3>
           ${buttonHtml}
        </div>`
    });
    document.getElementById('contenedor-publicaciones').innerHTML = productsHTML;
}
async function fetchProducts(){
    productList = await (await fetch ("/api/products")).json();
    displayProducts();
}
window.onload = async() => {
    await fetchProducts();
}
