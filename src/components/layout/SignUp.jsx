import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { AppAPI } from "../../API/axiosAPI";

export default function SignUp() {

    const [validated, setValidated] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      Image: null,
    });

    const operationHandler = (event) => {
      const { name, value } = event.target;
      if (event.target.type === "file") {
        setFormData({ ...formData, [name]: event.target.files[0] });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };

    const userRegister = async(submitData) => {
      try {
        const response = await AppAPI.userRegister(submitData);
        if(response.data.success){
          setSuccess(response.data.message)
        }
        else{
          setError(response.data.message)
        }

      } catch (error) {
        setError(error.response.data.message);
        console.log(error)
      }
    }

    const handleSubmit = async (event) => {
      const form = event.currentTarget;
      event.preventDefault();

      if (form.checkValidity()) {
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("Image", formData.Image);
      userRegister(formDataToSend)
      }
      setValidated(true);
    };

    const style = {
        border:{
            border: "3px solid rgb(0, 142, 185)",
            borderRadius: "20px",
            padding:"10px"
        },
        header:{
            backgroundColor: "rgb(0, 142, 185)",
            color: "white",
            paddingLeft: "10px",
            height:"40px",
            borderRadius:"15px",

        }
    }

  return (
    <div className="pt-2">
       <Form noValidate validated={validated} onSubmit={handleSubmit} style={style.border}>
        <div style={style.header}>
        <legend>Sign Up</legend>
        </div>
      <Row className="mb-3">

      {error && <p className="alert alert-danger text-center my-2" style={{margin:"auto", width:"95%"}}>{error}</p>}
      {success && <p className="alert alert-success text-center my-2" style={{margin:"auto", width:"95%"}} >{success}</p>}
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={operationHandler}
          />
            <Form.Control.Feedback type="invalid">
            Please enter your first name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={operationHandler}
          />
            <Form.Control.Feedback type="invalid">
            Please enter your last name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Image</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="file"
              name="Image"
              required
              onChange={operationHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please upload your image.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="text"
            placeholder="E-mail address"
            required
            name="email"
            onChange={operationHandler} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustom05">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            placeholder="Password"
            required
            name="password"
            onChange={operationHandler} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" style={{ backgroundColor:"rgb(0, 142, 185)"}}>Submit form</Button>
    </Form>
    </div>
  )
}
