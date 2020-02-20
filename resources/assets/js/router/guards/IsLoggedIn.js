export default (to, from, next) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken === null) {
    return next("/");
  }
  return next();
};
