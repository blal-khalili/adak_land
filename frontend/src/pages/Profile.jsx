import { useEffect, useState } from "react";
import { userProfileDetail } from "../../utils/auth/auth"


function Profile() {
    const [userInfo, setUserInfo] = useState({});
    

    useEffect(() => {
        setUserInfo(userProfileDetail())
    }, [])


    return <>
        <h1>profile page</h1>
        <button onClick={() => {
            console.log(userInfo.username)
        }}>jflds</button>
        {/* qury to backend */}
        {/* show in the page */}
    </>
}


export default Profile;