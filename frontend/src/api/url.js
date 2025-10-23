import axios from 'axios';

const BACKEND_URL = axios.create({
    baseURL:"https://noteapp-mfq4.onrender.com/api/v1/noteapp"
})

export default BACKEND_URL;