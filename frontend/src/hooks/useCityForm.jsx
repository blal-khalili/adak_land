// import { useQuery } from "@tanstack/react-query";
// import authAxiosInstance from "../../utils/auth/customAxios";

// function useCitiesByProvince(provinceId) {
//     return useQuery({
//         queryKey: ["cities", provinceId],

//         queryFn: async () => {
//             const res = await authAxiosInstance.get(
//                 `general/cities/?province=${provinceId}`
//             );

//             return res.data;
//         },

//         enabled: !!provinceId,
//     });
// }

// export default useCitiesByProvince;





import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useCitiesByProvince(provinceId) {
    return useQuery({
        queryKey: ["cities", provinceId],

        queryFn: async () => {
            const res = await axios.get(
                `http://127.0.0.1:8000/general/cities/?province=${provinceId}`
            );

            return res.data;
        },

        enabled: !!provinceId,
    });
}

export default useCitiesByProvince;
