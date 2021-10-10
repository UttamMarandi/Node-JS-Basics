//API stands for application programming interface. The main with api is that server provides the data. User can make a http request to access the data

const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send(
    '<h1>Home Page</h1><a href="/api/products">Products</a><a href="/api/products-without-desc">Products Without Desc</a>'
  );
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
//products contain desc too, set up an api endpoint where we don't pass desc of products
app.get("/api/products-without-desc", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, image, name, price } = product;
    return { id, image, name, price };
  });
  res.json(newProducts);
});

//get the singleProduct

app.get("/api/products/1", (req, res) => {
  const singleProduct = products.find((product) => {
    if (product.id === 1) {
      return product;
    }
  });
  res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000");
});

//res.json()
//Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().
// The parameter can be any JSON type, including object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.
