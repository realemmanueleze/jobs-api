const register = (req, res, next) => {
  const { email, name, password1, password2 } = req.body;

  res.status(200).json({ data: req.body });
};

const login = (req, res, next) => {
  res.status(200).json({ data: req.body });
};

module.exports = {
  register,
  login,
};
