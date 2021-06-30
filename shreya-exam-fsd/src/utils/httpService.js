import axios from 'axios';
import {toast} from 'react-toastify';

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status<500 && error.respose.status>=400;
    if(expectedError){
        toast.error('Expected error occured');
    }else{
        toast("Unexpected error");
    }
    return Promise.reject(error);
});

export default{
    get: axios.get,
    put: axios.put,
    post: axios.post,
    delete: axios.delete
}