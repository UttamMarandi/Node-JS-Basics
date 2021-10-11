const logger = (req, res, next) => {
  const method = req.method; //method name : get, put,post ,delete
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // res.send("Testing"); //important step, terminate
  next(); //pass to next middleware
};

module.exports = logger;
