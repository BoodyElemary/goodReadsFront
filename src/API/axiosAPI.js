import axios from 'axios';

let back_Url = 'http://localhost:5000';

// FOR BOOKS
const getAllBooks = () => axios.get(`${back_Url}/books`);
const addBook = (books) => axios.post(`${back_Url}/books`, books, {headers:{Authorization: localStorage.getItem("adminToken")}});
const getBookByID = (bookID) => axios.get(`${back_Url}/books/${bookID}`);
const editBookByID = (bookID, editData) => axios.put(`${back_Url}/books/${bookID}`, editData, {headers:{Authorization: localStorage.getItem("adminToken")}});
const deleteBookByID = (bookID) => axios.delete(`${back_Url}/books/${bookID}`, {headers:{Authorization: localStorage.getItem("adminToken")}} );

// FOR AUTHORS
const getAllAuthors = () => axios.get(`${back_Url}/authors`);
const addAuthor = (author) => axios.post(`${back_Url}/authors`, author, {headers:{Authorization: localStorage.getItem("adminToken")}});
const getAuthorByID = (AuthorID) => axios.get(`${back_Url}/authors/${AuthorID}`);
const editAuthorByID = (AuthorID, editData) => axios.put(`${back_Url}/authors/${AuthorID}`, editData, {headers:{Authorization: localStorage.getItem("adminToken")}});
const deleteAuthorByID = (AuthorID) => axios.delete(`${back_Url}/authors/${AuthorID}`, {headers:{Authorization: localStorage.getItem("adminToken")}});

// FOR CATEGORIES
const getAllCategories = () => axios.get(`${back_Url}/categories`);
const addCategory = (catigory) => axios.get(`${back_Url}/categories`, catigory, {headers:{Authorization: localStorage.getItem("adminToken")}});
const getCategoryByID = (CategoryID) => axios.get(`${back_Url}/Categoriess/${CategoryID}`);
const editCategoryByID = (CategoryID, editData) => axios.put(`${back_Url}/Categoriess/${CategoryID}`, editData, {headers:{Authorization: localStorage.getItem("adminToken")}});
const deleteCategoryByID = (CategoryID) => axios.delete(`${back_Url}/Categoriess/${CategoryID}`, {headers:{Authorization: localStorage.getItem("adminToken")}});

// FOR USERS
const getAllUsers = () => axios.get(`${back_Url}/users`, {headers:{Authorization: localStorage.getItem("adminToken")}});
const userRegister = (user) => axios.post(`${back_Url}/users`, user);
const getUserProfile= () => axios.get(`${back_Url}/users/profile`, {headers:{Authorization: localStorage.getItem("token")}});
const editUserProfile = (user) => axios.put(`${back_Url}/users/profile`, user, {headers:{Authorization: localStorage.getItem("token")}});
const deleteUserProfile = () => axios.delete(`${back_Url}/users/profile`, {headers:{Authorization: localStorage.getItem("token")}});
const userLogin = (user) => axios.post(`${back_Url}/auth/user/login`, user);

// const addProduct = (product) => axios.post(back_Url, product);
// const editProduct = (productID, product) =>
//   axios.put(`${back_Url}/${productID}`, product);
// const deleteProduct = (productID) => axios.delete(`${back_Url}/${productID}`);

export const AppAPI = {
  getAllBooks,
  addBook,
  getBookByID,
  editBookByID,
  deleteBookByID,
  getAllAuthors,
  addAuthor,
  getAuthorByID,
  editAuthorByID,
  deleteAuthorByID,
  getAllCategories,
  addCategory,
  getCategoryByID,
  editCategoryByID,
  deleteCategoryByID,
  getAllUsers,
  userRegister,
  getUserProfile,
  editUserProfile,
  deleteUserProfile,
  userLogin


};
