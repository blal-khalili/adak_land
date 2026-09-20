// import { useQuery } from "@tanstack/react-query";
// import authAxiosInstance from "../../utils/auth/customAxios";

// function useProvincesForm() {
//     const fetchProvinces = async () => {
//         const res = await authAxiosInstance.get("general/provinces/");
//         return res.data;
//     };

//     return useQuery({
//         queryKey: ["provinces"],
//         queryFn: fetchProvinces,
//     });
// }

// export default useProvincesForm;







import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useProvincesForm() {
    return useQuery({
        queryKey: ["provinces"],

        queryFn: async () => {
            const res = await axios.get(
                "http://127.0.0.1:8000/general/provinces/"
            );

            return res.data;
        },
    });
}

export default useProvincesForm;
