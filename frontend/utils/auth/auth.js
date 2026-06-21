import authStore from "../../stores/authStore";
import authAxiosInstance from "./customAxios";
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";


const login = async (username, password) => {

  
  let is_authenticated = false;
  await authAxiosInstance.post("api/token/", {
    username: username,
    password: password,
  })
  .then((res) => {
    console.log(res.data)
    authStore.getState().setEmail('uuuuuuuuuuuuu')
      // Cookies.remove("refresh_token")
      // Cookies.remove("access_token")
      Cookies.set('refresh_token', res.data.refresh, { secure: true })
      Cookies.set('access_token', res.data.access, { secure: true })
      // setUser()
      // is_authenticated = true;
    })
    .catch(() => {
      authStore.getState().setError('مشکلی در لاگین رخ داد')
      // is_authenticated = false;
    })

    // TODO: is_authenticated logic is not working and no matter what it just returns false
    return is_authenticated
  // TODO: redirect user to home page with a message
};




const register = async (phone_number, email, password, password_validate) => {
  // const { setUser } = authStore()
  
  await authAxiosInstance.post("account/create/", {
    phone_number: phone_number,
    email: email,
    password: password,
    password_validate: password_validate
  })
    .then((res) => {
      console.log(res.data)
      console.log('o999999999999999999')
    })
    .catch(() => {
     
    })
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

const  userProfileDetail = async () => {
  const access_token = Cookies.get('access_token')
  const decoded = jwtDecode(access_token);
  let jjjjj = {}
  console.log(decoded.user_id)
  await authAxiosInstance.get(`account/detail/${decoded.user_id}`)
  .then((res) => {
      jjjjj =  res.data
    })
    .catch(() => {
      
    })
    console.log(jjjjj)
    return jjjjj
}


export default login;
export { login, register, checkAuth, userProfileDetail };
