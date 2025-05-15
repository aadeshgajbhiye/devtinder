const adminAuth = (req, res, next) => {
  const token = "xyz1";
  const isAuthorised = token === "xyz";
  if (isAuthorised) {
    next();
  } else {
    res.status(401).send("Not Authoriised");
  }
};

const userAuth = (req, res, next) => {
  const token = "xyz1";
  const isAuthorised = token === "xyz";
  if (isAuthorised) {
    next();
  } else {
    res.status(401).send("Not Authoriised");
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
