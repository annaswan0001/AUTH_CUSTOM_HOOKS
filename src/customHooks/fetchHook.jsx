
import  {useState, useCallback} from 'react';
import axios from 'axios'


export const useFetchData = ({url,  payload}, callback) => {
    const [res, setRes] = useState({data: null, error: null, isLoading: false});
    
    // You POST method here
    let callAPI = useCallback(() => {
         setRes(prevState => ({...prevState, isLoading: true}));
         axios.post(url,  payload)
         .then(res => {
            setRes({data: res.data, isLoading: false, error: null});
            callback()
         })
         .catch((error) => {
            setRes({data: null, isLoading: false, error});
         })
    }, [url, payload, callback])
    return [res, callAPI];
}