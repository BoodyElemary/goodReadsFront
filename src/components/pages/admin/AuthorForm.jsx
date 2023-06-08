import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { AppAPI } from "../../../API/axiosAPI";

function AuthorForm() {
  const [validated, setValidated] = useState(false);
  let navigate = useNavigate();
  let [formValue, setFormValues] = useState({});
  const [author, setAuthor]=useState({})
  const [error, setError]=useState("")
  const [success, setSuccess]=useState("")
  const { id } = useParams();

  const changeDateFormat = (dateString)=>{
    const date = new Date(dateString);
    const formattedDate = date.toISOString().substr(0, 10);
    console.log(formattedDate)
    return formattedDate
  }
  const [dateOfBirth, setDateOfBirth] = useState('');
  const getAuthorById = async () => {
    try {
      const response = await AppAPI.getAuthorByID(id);
      if (response.data.success){
        setAuthor(response.data.data)
        setDateOfBirth(changeDateFormat(response.data.data.dateOfBirth))
        setFormValues({...response.data.data, dateOfBirth});
      }
      else{
        setError(response.data.message)
      }
    } catch (error) {
      if (error.response.data.success==false){
        setError(error.response.data.message)
      }
      console.log(error)
    }
  };

  const submitHandler = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity()) {
      try{
        const formDataToSend = new FormData();
        formDataToSend.append("firstName", formValue.firstName);
        formDataToSend.append("lastName", formValue.lastName);
        formDataToSend.append("image", formValue.image);
        formDataToSend.append("dateOfBirth", formValue.dateOfBirth);

        let response= ""
      if (id == 0) {
        console.log("id: ", id);
        response = await AppAPI.addAuthor(formDataToSend);

      } else {
        response = await AppAPI.editAuthorByID(id, formDataToSend);
      }
      if(response.data.success){
        setSuccess(response.data.message)
        navigate("/admin/authors");
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
    if (e.target.type === "file") {
          setFormValues({
            ...formValue,
            [e.target.name]: e.target.files[0],
          });
    }
    else{
      setFormValues({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
  };

  useEffect(() => {
    if (id != 0) {
      getAuthorById();
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
    <section className="container w-50 my-5">
      <Form noValidate validated={validated}  onSubmit={submitHandler} style={style.border}>
       <div style={style.header} className="text-center my-2">
        <legend>{id == 0 ? "Add Author" : "Edit Author"}</legend>
      </div>
      <Row className="mb-3">
        <Row>
          {error && <p className="alert alert-danger text-center my-2" style={{margin:"auto", width:"95%"}}>{error}</p>}
          {success && <p className="alert alert-success text-center my-2" style={{margin:"auto", width:"95%"}}>{success}</p>}

          <Form.Group as={Col} controlId="validationauthorFirstName" className="col-12 mb-3 mt-3 ms-2">
            <Form.Label>Author First Name</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Author First Name"
                required
                name="firstName"
                onChange={operationHandler}
                defaultValue={author?.firstName}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid first Name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId="validationauthorLastName" className="col-12 mb-3 ms-2">
            <Form.Label>Author Last Name</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Author Last Name"
                required
                name="lastName"
                onChange={operationHandler}
                defaultValue={author?.lastName}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid Last Name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId="validationauthordateOfBirth" className="col-12 mb-3 ms-2">
            <Form.Label>Author Birth Date</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="date"
                placeholder="author Birth Date"
                required
                name="dateOfBirth"
                onChange={operationHandler}
                defaultValue={dateOfBirth}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid Birth Date.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId="validationauthorImage" className="col-12 mb-3 ms-2">
            <Form.Label>Author Image</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="file"
                placeholder="author Image"
                required
                name="image"
                onChange={operationHandler}
                defaultValue={author?.image}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid image.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
      </Row>
      <Button type="submit" className="mb-2 ms-2" style={{ backgroundColor:"rgb(68, 193, 231)"}}>{id == 0 ? "Add Author" : "Edit Author"}</Button>
    </Form>
    </section>
  )
}

export default AuthorForm;
