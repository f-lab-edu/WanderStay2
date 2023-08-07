import axios from 'axios';

const httpCLinet = axios.create({
    baseURL : process.env.BASE_URL,
});

export default httpCLinet