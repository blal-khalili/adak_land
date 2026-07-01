import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from 'react';
import authAxiosInstance from '../../utils/auth/customAxios';


function useProfileData() {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const access_token = Cookies.get('access_token')
        const decoded = jwtDecode(access_token);

        authAxiosInstance.get(`account/detail/1/`, {
        })
        .then((res) => {
            setProfileData(res.data)
            console.log(res.data)
        })
    

    }, [])

    return [profileData]
}

export default useProfileData;
