module.exports.allProductView = (req, res) => {
  res.status(200).send("All Products");
};

module.exports.getProduct = (req, res) => {
  res.status(200).send("getProduct Product POST");
};

module.exports.productView = (req, res) => {
  res.status(200).send("Single Product View");
};
