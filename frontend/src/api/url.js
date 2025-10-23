import axios from 'axios';

const BACKEND_URL = axios.create({
    baseURL:"https://noteapp-mfq4.onrender.com"
})

export default BACKEND_URL;