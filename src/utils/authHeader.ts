const authHeader = () => {
  const user = localStorage.getItem("user");
  const userToken = user && user !== null && JSON.parse(user)

  if (userToken) {
    return { Authorization: "Bearer " + userToken };
  } else {
    return {};
  }
};
export default authHeader;
