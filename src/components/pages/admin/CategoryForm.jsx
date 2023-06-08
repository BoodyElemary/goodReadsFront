import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { AppAPI } from "../../../API/axiosAPI";

function BookForm() {
  const [validated, setValidated] = useState(false);
  let navigate = useNavigate();
  let [formValue, setFormValues] = useState({});
  const [category, setCategory]=useState({})
  const [error, setError]=useState("")
  const [success, setSuccess]=useState("")
  const { id } = useParams();
  const getCatigoryById = async () => {
    try {
      const response = await AppAPI.getCategoryByID(id);
      if (response.data.success){
        setCategory(response.data.data)
        setFormValues(response.data.data);
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
  };

  const submitHandler = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity()) {
      try{
        let response= ""
      if (id == 0) {
        console.log("id: ", id);
        response = await AppAPI.addCategory(formValue);

      } else {
        response = await AppAPI.editCategoryByID(id, formValue);
      }
      if(response.data.success){
        setSuccess(response.data.message)
        navigate("/admin/categories");
      }
      else{
        setError(response.data.message);
      }
      }
      catch(Error){
        setError(Error.response.data.message);
        console.log(Error)
        console.log(error)
      }
    }
    setValidated(true);
  };
  const operationHandler = (e) => {
    setFormValues({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (id != 0) {
      getCatigoryById();
    }
  }, []);

  const style = {
    border:{
        border: "3px solid rgb(68, 193, 231)",
        borderRadius: "20px",
        padding:"10px"
    },
    header:{
        backgroundColor: "rgb(68, 193, 231)",
        color: "white",
        paddingLeft: "10px",
        height:"40px",
        borderRadius:"15px",

    }
}

  return (
    <section className="container w-50 mt-5">
      <Form noValidate validated={validated}  onSubmit={submitHandler} style={style.border}>
       <div style={style.header} className="text-center my-2">
        <legend>{id == 0 ? "Add Category" : "Edit Category"}</legend>
      </div>
      <Row className="mb-3">
        <Row>
          {error && <p className="alert alert-danger text-center my-2" style={{margin:"auto", width:"95%"}}>{error}</p>}
          {success && <p className="alert alert-success text-center my-2" style={{margin:"auto", width:"95%"}}>{success}</p>}
          <Form.Group as={Col} controlId="validationCategoryName">
            <Form.Label>Category Name</Form.Label>
            <InputGroup hasValidation>

              <Form.Control
                type="text"
                placeholder="Category Name"
                required
                name="categoryName"
                onChange={operationHandler}
                defaultValue={category.categoryName}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid Name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
      </Row>
      <Button type="submit" style={{ backgroundColor:"rgb(68, 193, 231)"}}>{id == 0 ? "Add Category" : "Edit Category"}</Button>
    </Form>
    </section>
  )
}

export default BookForm;
