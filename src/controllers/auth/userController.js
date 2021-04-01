module.exports.userC = async function (req, res, next) {
  const isAuth = req.auth;
  if (isAuth) {
    res.json({ user: req.user });
  } else {
    return res.status(400).json({
      message: "not match key",
    });
  }
};
