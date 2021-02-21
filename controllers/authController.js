module.exports.signupView = (req, res) => {
  res.status(200).send("SignUp View");
};

module.exports.loginView = (req, res) => {
  res.status(200).send("Login View");
};

module.exports.addUser = (req, res) => {
  const { input } = request.body;
  res.status(201).json(input);
};

module.exports.authincateUser = (req, res) => {
  res.status(200).send("User Authincated");
};
