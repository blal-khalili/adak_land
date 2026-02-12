import { useQuery, useQueryClient, } from '@tanstack/react-query';
import axios from "axios"


function useProduct(available, popular){
    const queryClient = useQueryClient()
    const fetchProducts = async () => {
        const res = await axios.get('http://127.0.0.1:8000/products/detail/کاپشن-برفی');
        return res.data;
    };
    const query = useQuery({
        queryKey: ['product'], queryFn: fetchProducts
    })

    return query
}

export default useProduct;