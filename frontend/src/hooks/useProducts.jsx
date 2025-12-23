import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from "axios"


function useProducts(){
    const queryClient = useQueryClient()
    const fetchProducts = async () => {
        const res = await axios.get('http://127.0.0.1:8000/adack/list/');
        return res.data;
    };
    const query = useQuery({
        queryKey: ['products'], queryFn: fetchProducts
    })

    return query
}

export default useProducts;