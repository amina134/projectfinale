import axios from 'axios';
const API_URL = 4000

export const fetchAllBooks = async () => {
    const { data } = await axios.get(`http://localhost:${API_URL}/book/getAllBooks`);
    return data;
}

export const postBooks = async (values) => {
    const addBook = await axios.post(`http://localhost:${API_URL}/book/addBook`, { ...values });
}

export const updateBooks = async (id, values) => {
    const updateBook = await axios.put(`http://localhost:${API_URL}/book/updateBook/${id}`, values);
}

export const deleteBooks = async (id) => {
    const deleteBook = await axios.delete(`http://localhost:${API_URL}/book/deleteBook/${id}`);
}

export const getUniqueBook = async (id) => {
    const { data } = await axios.get(`http://localhost:${API_URL}/book/getBook/${id}`);
    return data;
}

// export const getBookByUserBook = async (userAdvert) => {
//     const { data } = await axios.get(`${ API_URL}/book/getAdvertByUserBook/${userAdvert}`);
//     return data;
// }

