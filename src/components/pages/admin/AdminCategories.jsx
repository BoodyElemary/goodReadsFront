import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppAPI } from "../../../API/axiosAPI";
function AdminCategories() {
  let navigate = useNavigate();
  const [categories, setCategories]=useState([])
  const [error, setError]=useState("")
  const [success, setSuccess]=useState("")

  const getAllCatigories = async()=>{
    try {
      const response = await AppAPI.getAllCategories();
      if (response.data.success){
        setCategories(response.data.data)
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
  const viewCategory = (categoryId) => {
    navigate(`/admin/categories/${categoryId}`);
  };
  const editCategory = (categoryId) => {
    navigate(`/admin/categories/${categoryId}/edit`);
  };

  const deleteCategory = async (categoryId) => {
    let response = await AppAPI.deleteCategoryByID(categoryId);
    let filteredList = categories.filter((category) => category._id != categoryId);
    setCategories(filteredList);
    setSuccess(response.data.message)
  };

  const goToAddCategory = () => {
    navigate("/admin/categories/0/edit");
  };

  useEffect(() => {
    getAllCatigories()
  }, []);
  return (
    <section className="container">
      <h1 className="mt-5">All Categories</h1>
      {success && <p className="alert alert-success text-center my-2" style={{margin:"auto", width:"95%"}}>{success}</p>}
      <i class="bi bi-patch-plus text-end d-block "
        style={{fontSize:"25px"}}
        onClick={goToAddCategory}>
      </i>
      <table class="table table-striped text-center">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            categories.map((category, index)=>(
              <tr>
                <td>{index+1}</td>
                <td>{category.categoryName}</td>
                <td>
                  {/* <i onClick={()=>viewCategory(category._id)} className="bi bi-eye-fill mx-2 fs-4 text-primary"></i> */}
                  <i onClick={()=>editCategory(category._id)} className="bi bi-pencil-square mx-2 fs-4 text-success"></i>
                  <i onClick={()=>deleteCategory(category._id)} className="bi bi-trash3 mx-2 fs-4 text-danger"></i>
                </td>
              </tr>
            ))
          }
        </tbody>
    </table>
    </section>
  )
}

export default AdminCategories;
