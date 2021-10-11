const authorize = (req, res, next) => {
  console.log("authorize");
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 6 };
    next();
  } else {
    res.status(401).send("unauthorize");
  }
};

module.exports = authorize;

//for any api routes , user can aceess data only when user quersy is passed with value john
//if not pass unauthorized
