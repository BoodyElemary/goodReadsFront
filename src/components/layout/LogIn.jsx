import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from "react-router-dom";
import { AppAPI } from "../../API/axiosAPI";

export default function LogIn() {

    let navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({ email: "", password: ""});

    const operationHandler = (event) => {
      const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const userLogin = async(submitData) => {
      try {
        const response = await AppAPI.userLogin(submitData);
        if(response.data.success){
          console.log(response.data)
          localStorage.setItem("token", response.data.token)
          navigate("/home")
        }
        else{
          setError(response.data.message)
        }

      } catch (error) {
        // setError(error.response.data.message);
        console.log(error)
      }
    }

    const handleSubmit = async (event) => {
      const form = event.currentTarget;
      event.preventDefault();

      if (form.checkValidity()) {
      // const formDataToSend = new FormData();
      // formDataToSend.append("email", formData.email);
      // formDataToSend.append("password", formData.password);
      userLogin(formData)
      console.log(formData)
      }
      setValidated(true);
    };

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
    <div className="pt-3" >
       <Form noValidate validated={validated} onSubmit={handleSubmit} style={style.border}>
       <div style={style.header}>

<legend>Login</legend>
</div>
      <Row className="mb-3">
        <Row>
        {error && <p className="alert alert-danger text-center my-2" style={{margin:"auto", width:"95%"}}>{error}</p>}
      <Form.Group as={Col} controlId="validationCustomUsername">
          <Form.Label>E-mail</Form.Label>
          <InputGroup hasValidation>

            <Form.Control
              type="email"
              placeholder="E-mail address"
              required
              name="email"
              onChange={operationHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please enter invalid E-mail.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>

        <Row>
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            name="password"
            onChange={operationHandler}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Please enter invalid Password.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
      </Row>
      <Button type="submit" style={{ backgroundColor:"rgb(68, 193, 231)"}}>Submit form</Button>
    </Form>
    </div>
  )
}
