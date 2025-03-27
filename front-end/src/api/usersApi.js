import axios from 'axios';
const API_URL = 4000;

export const postUser = async (values) => {
    const addUser = await axios.post(`http://localhost:${API_URL}/user/signup`, { ...values });
}


export const updateUser = async (id, values) => {
    const updateUser = await axios.put(`http://localhost:${API_URL}/user/updateUser/${id}`, { ...values });
}

export const fetchAccount = async () => {
    const token = localStorage.getItem('token');
    // console.log('This is the token you looking for:', token);
    const { data } = await axios.get(`http://localhost:${API_URL}/user/myaccount`, { headers: { Authorization: token } });
    return data;
}

export const fetchAllUsers = async () => {
    const { data } = await axios.get(`http://localhost:${API_URL}/user/allUsers`);
    return data;
}