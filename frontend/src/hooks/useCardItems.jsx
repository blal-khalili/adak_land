import { useQuery, useQueryClient, } from '@tanstack/react-query';
import axios from "axios"





function useCardItems() {
    const queryClient = useQueryClient()
    const fetchCardItems = async ({queryKey}) => {
        const [_key,params] = queryKey
        // console.log(params)
        const res = await axios.get('http://127.0.0.1:8000/cart/detail/cart/',{params});
        return res.data;
    };
    const query = useQuery({
        queryKey: ['cart-items'], queryFn: fetchCardItems
    })

    return query
}




export default useCardItems;