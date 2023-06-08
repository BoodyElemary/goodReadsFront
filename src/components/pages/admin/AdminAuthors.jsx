import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppAPI } from "../../../API/axiosAPI";
function AdminAuthors() {
  let navigate = useNavigate();
  const [authors, setAuthors]=useState([])
  const [error, setError]=useState("")
  const [success, setSuccess]=useState("")

  const getAllAuthors = async()=>{
    try {
      const response = await AppAPI.getAllAuthors();
      if (response.data.success){
        setAuthors(response.data.data)
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

  const editAuthor = (authorId) => {
    navigate(`/admin/Authors/${authorId}/edit`);
  };

  const deleteAuthor = async (authorId) => {
    let response = await AppAPI.deleteAuthorByID(authorId);
    let filteredList = authors.filter((author) => author._id != authorId);
    setAuthors(filteredList);
    setSuccess(response.data.message)
  };

  const goToAddAuthor = () => {
    navigate("/admin/Authors/0/edit");
  };

  useEffect(() => {
    getAllAuthors()
  }, []);
  return (
    <section className="container">
      {success && <p className="alert alert-success text-center my-2" style={{margin:"auto", width:"95%"}}>{success}</p>}
      <i class="bi bi-patch-plus text-end d-block mt-5"
        style={{fontSize:"25px"}}
        onClick={goToAddAuthor}>
      </i>
      <table class="table table-striped text-center">
        <thead>
          <th>ID</th>
          <th>Image</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            authors.map((author, index)=>(
              <tr>
                <td>{index+1}</td>
                <td>
                  <img src={author.image ? AppAPI.back_Url + '/' + author.image : ''}alt="author image" width={"50px"} height={"50px"}
                  style={{objectFit:"cover"}}/>
                </td>
                <td>{author?.firstName}</td>
                <td>{author?.lastName}</td>
                <td>{author?.dateOfBirth}</td>
                {/* <td>{author?.author?.firstName + ' ' + author?.author?.lastName} </td> */}
                <td>
                  {/* <i onClick={()=>viewbook(book._id)} className="bi bi-eye-fill mx-2 fs-4 text-primary"></i> */}
                  <i onClick={()=>editAuthor(author._id)} className="bi bi-pencil-square mx-2 fs-4 text-success"></i>
                  <i onClick={()=>deleteAuthor(author._id)} className="bi bi-trash3 mx-2 fs-4 text-danger"></i>
                </td>
              </tr>
            ))
          }
        </tbody>
    </table>
    </section>
  )
}

export default AdminAuthors;
