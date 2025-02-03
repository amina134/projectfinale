import axios from 'axios';
const API_URL = 4000;

// Fetch all authors
export const fetchAllAuthors = async () => {
    const { data } = await axios.get(`http://localhost:${API_URL}/author/allAuthors`);
    return data;
}

// Fetch author by ID
export const fetchAuthorById = async (id) => {
    const { data } = await axios.get(`http://localhost:${API_URL}/author/getAuthorById/${id}`);
    return data;
}

// Add a new author
export const postAuthor = async (values) => {
    const newAuthor = await axios.post(`http://localhost:${API_URL}/author/addAuthor`, { ...values });
    return newAuthor.data;
}

// Update author details
export const updateAuthor = async (id, values) => {
    const updatedAuthor = await axios.put(`http://localhost:${API_URL}/author/updateAuthor/${id}`, { ...values });
    return updatedAuthor.data;
}

// Delete an author
export const deleteAuthor = async (id) => {
    const deletedAuthor = await axios.delete(`http://localhost:${API_URL}/author/deleteAuthor/${id}`);
    return deletedAuthor.data;
}
