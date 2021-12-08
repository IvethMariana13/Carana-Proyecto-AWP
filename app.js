//guardar_cache();
obtener_cache();

function obtener_cache(){
    if( localStorage.getItem("producto") ){
    let producto = JSON.parse( localStorage.getItem("producto") );

    console.log(producto);
    }else{
        console.log("No hay entradas en el cache");
    }
}

function guardar_cache(){
  let pro = [
    {
        id: 1,
        name: "Anillo con zirconia",
        price: 160,
        image: "imagenes/plata.jpeg",
        material: "plata .925",
        stock: 3,  
    }
];
let producto = "Anillo";

localStorage.setItem("producto", JSON.stringify( pro ))}


