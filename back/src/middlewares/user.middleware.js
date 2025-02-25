const validateUser = (req, res, next) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({
      status: "failure",
      message: "Faltan completar campos",
    });
  }
  next();
};

module.exports = {
    validateUser,
}