const express = require("express");
const { products } = require("./data");

const app = express();
//get product list
app.get("/api/products", (req, res) => {
  res.json(products);
});

//get single product based on route parameter
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((product) => {
    if (product.id === Number(productID)) {
      return product;
    }
  });
  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.send("Product not found");
  }
});
//use query parameters
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  //destructruing from req.query
  let sortedProducts = [...products]; //shallow copy of products
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      const { name } = product;
      console.log(name);
      if (name.startsWith(search)) {
        return product; //returns only those product whose firstName is searc param
      }
    });
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send("no products matched your search");
    return res.status(200).json({ sucess: true, data: [] });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  res.status(200).json(sortedProducts);
  // res.end("hello world");
});

// app.get("/api/v1/query", (req, res) => {
//   // console.log(req.query)
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];

//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search);
//     });
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit));
//   }
//   if (sortedProducts.length < 1) {
//     // res.status(200).send('no products matched your search');
//     return res.status(200).json({ sucess: true, data: [] });
//   }
//   res.status(200).json(sortedProducts);
// });

app.listen(5000, () => {
  console.log("Server running at port : 5000");
});

//bug fix
//Cannot set headers after they are sent to the client
//solution
//we cannot have multiple send request to the client for the same api route. so when conditionaly checking and sending data , better to use return
