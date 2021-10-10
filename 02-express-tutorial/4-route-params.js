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

// app.get("/api/products/1", (req, res) => {
//   const singleProduct = products.find((product) => {
//     if (product.id === 1) {
//       return product;
//     }
//   });
//   res.json(singleProduct);
// });

//the above method is not dynamic , as we can get product with id 1 only
//get singleProduct based on the route ID passed
//dynamic route parameters
//:variableID is a route param
app.get("/api/products/:productID", (req, res) => {
  //req is a large request object containing data regarding the req of the client
  //req.params is an oobject that contains the route parameters if mentioned
  // console.log(req.params);
  const { productID } = req.params;
  console.log(productID);
  const singleProduct = products.find((product) => {
    if (product.id === Number(productID)) {
      //product.id is a number so we need to convert productID to a number
      return product;
    }
  });
  //the above returns undefined singleProduct if there is no product with that id. that mean the api returns nothing (blank) for that request. better to send a 404 response
  if (!singleProduct) {
    res.status(404).send("Products not found");
  } else {
    res.json(singleProduct);
  }
});

//multipe route params

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  res.send("Hello");
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000");
});

//res.json()
//Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().
// The parameter can be any JSON type, including object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.
