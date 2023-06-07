import axios from 'axios';

let back_Url = 'http://localhost:5000';

// FOR BOOKS
const getAllBooks = () => axios.get(`${back_Url}/books`);
const getBookByID = (bookID) => axios.get(`${back_Url}/books/${bookID}`);

// FOR AUTHORS
const getAllAuthors = () => axios.get(`${back_Url}/authors`);
const getAuthorByID = (AuthorID) =>
  axios.get(`${back_Url}/authors/${AuthorID}`);

// FOR CATEGORIES
const getAllCategories = () => axios.get(`${back_Url}/categories`);
const getCategoryByID = (CategoryID) =>
  axios.get(`${back_Url}/Categoriess/${CategoryID}`);

// const addProduct = (product) => axios.post(back_Url, product);
// const editProduct = (productID, product) =>
//   axios.put(`${back_Url}/${productID}`, product);
// const deleteProduct = (productID) => axios.delete(`${back_Url}/${productID}`);

export const productsAPI = {
  getAllBooks,
  getBookByID,
  getAllAuthors,
  getAuthorByID,
  getAllCategories,
  getCategoryByID,
};
