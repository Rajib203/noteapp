import axios from 'axios';

const BACKEND_URL = axios.create({
    baseURL:"https://noteapp-ud92.onrender.com"
})

export default BACKEND_URL;