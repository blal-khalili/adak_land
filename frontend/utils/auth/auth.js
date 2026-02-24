import authStore from "../../stores/authStore";
import authAxiosInstance from "./customAxios";
import Cookies from 'js-cookie'





const login = async (username, password) => {
  const { setUser } = authStore()

  await authAxiosInstance.post("api/token/", {
    username: username,
    password: password,
  })
    .then((res) => {
      console.log(res.data)
      // Cookies.remove("refresh_token")
      // Cookies.remove("access_token")
      Cookies.set('refresh_token', res.data.refresh,{secure:true})
      Cookies.set('access_token', res.data.access,{secure:true})
      setUser()
    })
    .catch(() => {

    })

  // TODO: redirect user to home page with a message
};

export default login;
