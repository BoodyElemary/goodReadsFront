import React, { useEffect, useState, useRef  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { AppAPI } from "../../../API/axiosAPI";
import { FormSelect } from "react-bootstrap";

function BookForm() {

  const [validated, setValidated] = useState(false);
  let navigate = useNavigate();
  const [book, setBook]=useState({
    bookName: "",
    author: {_id: "", firstName: "", lastName: "",
    category: {_id: "", categoryName: ""},
    cover: ""
  }})
  const [categories, setCategories]=useState([])
  const [authors, setAuthors]=useState([])
  const [error, setError]=useState("")
  const [success, setSuccess]=useState("")
  const { id } = useParams();
  const [formValue, setFormValues] = useState({
    bookName: "",
    author: "",
    category: "",
    cover: null,
  });

  const imageRef = useRef(null);

  async function loadImageFromFileUrl(fileUrl) {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    return new File([blob], "image.jpg", { type: "image/jpeg" });
  }
  const setImageValue = async()=>{
    let image = imageRef.current
    let file = await loadImageFromFileUrl(image.defaultValue)
    setFormValues({...formValue, [image.name]: file})
  }
  const getBookById = async () => {
    try {
      const response = await AppAPI.getBookByID(id);
      if (response.data.success){
        setBook(response.data.data)
        let image = AppAPI.back_Url + '/' + response.data.data.cover
        console.log(image);
        // let file = await loadImageFromFileUrl(image)
        setFormValues({
          bookName: response.data.data.bookName,
          author: response.data.data.author._id,
          category: response.data.data.category._id,
          cover:"",
        });

      }
      else{
        setError(response.data.message)
      }
    } catch (error) {
      // if (error.response.data.success==false){
      //   setError(error.response.data.message)
      // }
      console.log(error)
    }
  };

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

  const getAllAuthors = async()=>{
    try {
      const response = await AppAPI.getAllAuthors();
      if (response.data.success){
        setAuthors(response.data.data)
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

  const submitHandler = async (e) => {
    setError("")
    setSuccess("")
    const form = e.currentTarget;
    e.preventDefault();
    // if (form.checkValidity()) {
      try{
        const formDataToSend = new FormData();
        formDataToSend.append("bookName", formValue.bookName);
        formDataToSend.append("author", formValue.author);
        formDataToSend.append("category", formValue.category);
        if (formValue.cover===""){
          await setImageValue();
        }
        console.log(formValue.cover)
        formDataToSend.append("cover", formValue.cover);
        let response= ""
        // console.log(formDataToSend);
        console.log(formValue);
      if (id == 0) {

        response = await AppAPI.addBook(formDataToSend);

      } else {
        response = await AppAPI.editBookByID(id, formDataToSend);
      }
      if(response.data.success){
        setSuccess(response.data.message)
        // navigate("/admin/books");
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
    // }
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

  useEffect(async() => {

     getAllCatigories();
     getAllAuthors();
    if (id != 0) {
      await getBookById()
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
        <legend>{id == 0 ? "Add Book" : "Edit Book"}</legend>
      </div>
      <Row className="mb-3">
        <Row>
          {error && <p className="alert alert-danger text-center my-2" style={{margin:"auto", width:"95%"}}>{error}</p>}
          {success && <p className="alert alert-success text-center my-2" style={{margin:"auto", width:"95%"}}>{success}</p>}
          <Form.Group as={Col} controlId="validationBookName" className="col-12 mb-3 mt-3">
            <Form.Label>Book Name</Form.Label>
            <InputGroup hasValidation>

              <Form.Control
                type="text"
                placeholder="Book Name"
                required
                name="bookName"
                onChange={operationHandler}
                defaultValue={book.bookName}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid Name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId="validationBookCategory" className="col-12 mb-3">
            <Form.Label>Book Category</Form.Label>
            <Form.Select hasValidation
            onChange={operationHandler}
            name="category"
            required
            defaultValue={book?.category?._id}>
              {
                categories.map((category, index)=>(
                  <option
                    key={category._id}
                    value={category._id}
                    selected={category._id == book?.category?._id}
                  >{category.categoryName}</option>
                ))
              }
              <Form.Control.Feedback type="invalid">
                Please Select a valid category.
              </Form.Control.Feedback>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="validationBookAuthor" className="col-12 mb-3">
            <Form.Label>Book Author</Form.Label>
            <Form.Select hasValidation
            onChange={operationHandler} name="author"
             required defaultValue={book?.author?._id}>
              {
                authors.map((author, index)=>(
                  <option
                    key={author._id}
                    value={author._id}
                    selected={author._id == book?.author?._id}
                  >{author.firstName} {author.lastName}</option>
                ))
              }

              <Form.Control.Feedback type="invalid">
                Please Select a valid author.
              </Form.Control.Feedback>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="validationBookImage" className="col-12 mb-3">
            <Form.Label>Book Image</Form.Label>
            <InputGroup hasValidation>

              <Form.Control
                type="file"
                placeholder="Book Image"
                required
                name="cover"
                ref={imageRef}
                onChange={operationHandler}
                defaultValue={ book.cover ? AppAPI.back_Url + '/' + book.cover: "" }
                isInvalid={ book.cover ? false : true}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid image.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>


        </Row>
      </Row>
      <Button type="submit" style={{ backgroundColor:"rgb(68, 193, 231)"}}>{id == 0 ? "Add book" : "Edit book"}</Button>
    </Form>
    </section>
  )
}

export default BookForm;
