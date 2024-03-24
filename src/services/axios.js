import axios from 'axios';

const axiosConfig = axios.create();

axiosConfig.defaults.baseURL = 'http://34.95.209.239/';

export default axiosConfig;
