import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from 'react';


function useCheckAuth() {
    const [isExpired, setIsExpired] = useState(null);

    useEffect(() => {
        const access_token = Cookies.get('access_token')
        const decoded = jwtDecode(access_token);
        const time_difference = decoded.exp - Math.floor(Date.now() / 1000)
        let is_expired = false

        if (time_difference <= 0) {
            setIsExpired(true)
        } else {
            setIsExpired(false)
        }

    }, [])

    return [isExpired]
}

export default useCheckAuth;
