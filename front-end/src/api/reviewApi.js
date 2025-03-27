import axios from 'axios';
const API_URL = 4000

export const fetchAllReviews = async () => {
    const { data } = await axios.get(`http://localhost:${API_URL}/review/getAllReviews`);
    return data;
}

export const postReviews = async (values) => {
    const addReview = await axios.post(`http://localhost:${API_URL}/review/addReview`, { ...values });
}

export const updateReviews = async (id, values) => {
    const updateReview = await axios.put(`http://localhost:${API_URL}/review/updateReview/${id}`, values);
}

export const deleteReviews= async (id) => {
    const deleteReview = await axios.delete(`http://localhost:${API_URL}/review/deleteReview/${id}`);
}

export const getUniqueReview = async (id) => {
    const { data } = await axios.get(`http://localhost:${API_URL}/review/getReview/${id}`);
    return data;
}

