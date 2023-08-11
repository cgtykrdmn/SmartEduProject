module.exports = (req, res, next) => {
  if (req.session.userID) {
    return res.redirect("/"); // User is not authenticated, redirect to login page
  }
  next();
};
