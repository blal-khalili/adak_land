import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from "axios"


function useCityForm() {
    const queryClient = useQueryClient()
    const fetchCity = async () => {
        const res = await axios.get('http://127.0.0.1:8000/adack/cities/');
        return res.data;
    };
    const query = useQuery({
        queryKey: ['cities'], queryFn: fetchCity
    })

    return query
}

export default useCityForm;