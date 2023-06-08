import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppAPI } from "../../../API/axiosAPI";
function AdminBooks() {
  let navigate = useNavigate();
  const [books, setBooks]=useState([])
  const [error, setError]=useState("")
  const [success, setSuccess]=useState("")

  const getAllBooks = async()=>{
    try {
      const response = await AppAPI.getAllBooks();
      if (response.data.success){
        setBooks(response.data.data)
        console.log(response.data);
      }
      else{
        setError(response.data.message)
      }
    } catch (error) {
      if (error.response.data.success==false){
        setError(error.response.data.message)
      }
      console.log(error.response)
    }
  }

  const editBook = (bookId) => {
    navigate(`/admin/Books/${bookId}/edit`);
  };

  const deleteBook = async (bookId) => {
    let response = await AppAPI.deleteBookByID(bookId);
    let filteredList = books.filter((book) => book._id != bookId);
    setBooks(filteredList);
    setSuccess(response.data.message)
  };

  const goToAddBook = () => {
    navigate("/admin/Books/0/edit");
  };

  useEffect(() => {
    getAllBooks()
  }, []);
  return (
    <section className="container">
      {success && <p className="alert alert-success text-center my-2" style={{margin:"auto", width:"95%"}}>{success}</p>}
      <i class="bi bi-patch-plus text-end d-block mt-5"
        style={{fontSize:"25px"}}
        onClick={goToAddBook}>
      </i>
      <table class="table table-striped text-center">
        <thead>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Author</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            books.map((book, index)=>(
              <tr>
                <td>{index+1}</td>
                <td>
                  <img src={book.cover ? AppAPI.back_Url + '/' + book.cover : ''}alt="book cover" width={"50px"} height={"50px"}
                  style={{objectFit:"cover"}}/>
                </td>
                <td>{book?.bookName}</td>
                <td>{book?.category?.categoryName}</td>
                <td>{book?.author?.firstName + ' ' + book?.author?.lastName} </td>
                <td>
                  {/* <i onClick={()=>viewbook(book._id)} className="bi bi-eye-fill mx-2 fs-4 text-primary"></i> */}
                  <i onClick={()=>editBook(book._id)} className="bi bi-pencil-square mx-2 fs-4 text-success"></i>
                  <i onClick={()=>deleteBook(book._id)} className="bi bi-trash3 mx-2 fs-4 text-danger"></i>
                </td>
              </tr>
            ))
          }
        </tbody>
    </table>
    </section>
  )
}

export default AdminBooks;
