import authAxiosInstance from "./customAxios";

const login = async (username, password) => {
  const res = await authAxiosInstance.post("api/token/", {
    username: "",
    password: "",
  });
  // TODO: save access and refresh tokens in cookie or localstorage
  //   console.log(res.data);
  // TODO: redirect user to home page with a message
};

export default login;
