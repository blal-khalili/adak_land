import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from "axios"


function useSubjectsForm() {
    const queryClient = useQueryClient()
    const fetchSubjects = async () => {
        const res = await axios.get('http://127.0.0.1:8000/adack/subjects/');
        return res.data;
    };
    const query = useQuery({
        queryKey: ['subjects'], queryFn: fetchSubjects
    })

    return query
}

export default useSubjectsForm;