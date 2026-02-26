import authStore from "../../stores/authStore";
import authAxiosInstance from "./customAxios";
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";





const login = async (username, password) => {
  // const { setUser } = authStore()
  await authAxiosInstance.post("api/token/", {
    username: username,
    password: password,
  })
    .then((res) => {
      console.log(res.data)
      // Cookies.remove("refresh_token")
      // Cookies.remove("access_token")
      Cookies.set('refresh_token', res.data.refresh, { secure: true })
      Cookies.set('access_token', res.data.access, { secure: true })
      // setUser()
    })
    .catch(() => {

    })

  // TODO: redirect user to home page with a message
};
const checkAuth = () => {
  const access_token = Cookies.get('access_token')
  const decoded = jwtDecode(access_token);
  const time_difference = decoded.exp - Math.floor(Date.now() / 1000)
  let is_expired = false

  if (time_difference <= 0){
    is_expired = true;
  }else{
    is_expired = false;
  }

  return is_expired
}

export default login;
export { login, checkAuth };
