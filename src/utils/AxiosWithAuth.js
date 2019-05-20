import axios from 'axios';

const AxiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create(
        {
            headers: {authorization: token}
        }
    )
};

export default AxiosWithAuth;