import { useQuery, useQueryClient, } from '@tanstack/react-query';
import axios from "axios"


function useProducts(available, popular){
    const queryClient = useQueryClient()
    const fetchProducts = async ({queryKey}) => {
        const [_key,params] = queryKey
        // console.log(params)
        const res = await axios.get('http://127.0.0.1:8000/products/list/',{params});
        return res.data;
    };
    const query = useQuery({
        queryKey: ['products',{available, popular}], queryFn: fetchProducts
    })

    return query
}

export default useProducts;