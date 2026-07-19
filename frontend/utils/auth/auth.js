import authStore, { useBearStore } from "../../stores/authStore";
import { authAxiosInstance, normalAxiosInstance } from "./customAxios";
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";


const login = async (username, password) => {
  // TOOD: use the server provided error
  await normalAxiosInstance.post("api/token/", {
    username: username,
    password: password,
  })

    .then((res) => {
      console.log(res.data)
      authStore.getState().setEmail('uuuuuuuuuuuuu')

      Cookies.remove("refresh_token")
      Cookies.remove("access_token")
      Cookies.set('refresh_token', res.data.refresh, { secure: true })
      Cookies.set('access_token', res.data.access, { secure: true })

      // userProfileDetail()
      const access_token = Cookies.get('access_token')
      const decoded = jwtDecode(access_token);
      authStore.getState().setUserId(decoded.user_id)
      console.log('success')
      authStore.getState().setError('با موفقیت وارد شدید')
      authStore.getState().setIsLoggedIn(true)
    })
    .catch(() => {
      authStore.getState().setError('مشکلی در لاگین رخ داد')
      authStore.getState().setIsLoggedIn(false)
    })
};




const signIn = async (phone_number, email, password, password_validate) => {
  // const { setUser } = authStore()

  await normalAxiosInstance.post("account/create/", {
    phone_number: phone_number,
    email: email,
    password: password,
    password_validate: password_validate
  })
    .then((res) => {
      console.log(res.data)
      console.log('o999999999999999999')
      authStore.getState().setIsLoggedIn(true)
    })
    .catch((error) => {
      error.response.data
      authStore.getState().setError(error.response.data[0])
    })
};

// TODO: check if also refresh token expired
const checkAuth = () => {
  let is_expired = false;
  const access_token = Cookies.get('access_token')
  if (access_token == null) {
    is_expired = true
  } else {
    const decoded = jwtDecode(access_token);
    const time_difference = decoded.exp - Math.floor(Date.now() / 1000)

    if (time_difference <= 0) {
      is_expired = true
    } else {
      is_expired = false
    }
  }
  return is_expired
}

const userProfileDetail = async () => {
  const access_token = Cookies.get('access_token')
  const decoded = jwtDecode(access_token);

  await authAxiosInstance.get(`account/detail/${decoded.user_id}/`, {
  })
    .then((res) => {
      useBearStore.getState().setUserData(res.data)
      useBearStore.getState().setIsLoggedIn(true)

      // console.log(res.data)
    })
}


const logout = () =>{
      Cookies.remove("refresh_token")
      Cookies.remove("access_token")
      useBearStore.getState().setUserData(null)
      useBearStore.getState().setIsLoggedIn(null)

}


export default login;
export { login, signIn, checkAuth, userProfileDetail, logout };
