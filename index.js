const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let products = [
    {
        id: 1,
        name: "Anillo con zirconia",
        price: 160,
        image: "imagenes/plata.jpeg",
        material: "plata .925",
        stock: 3,  
    },
    {
      id: 2,
      name: "Collar niveles: Virgen de Guadalupe",
      price : 160,
      image: "imagenes/collar.jpeg",
      material: "Acero inoxidable",
      stock: 3,
    },
    {
      id: 3,
      name: "Arracadas triples de tubo grueso",
      price : 160,
      image: "imagenes/aretes.jpeg",
      material: "Oro Laminado",
      stock: 15,
    },
    {
      id: 4,
      name: "Anillos: Happy Face",
      price : 160,
      image: "imagenes/chapa.jpeg",
      material: "Chapa de oro",
      stock: 15,
    }

];
app.get("/api/products", (req, res) => {
  res.send(products);
});
app.post("/api/pay", (req, res) => {
  const ids = req.body;
  const procutsCopy = products.map ((p) => ({...p}));

  ids.forEach((id) => {
    const product = procutsCopy.find(p.id === id);
    if (product.stock > 0){
      product.stock--;
  }else{
    throw "Sin stock";
  }
  });
  products = procutsCopy;
  res.send(products);
});

app.use("/", express.static("FrontEnd"));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});