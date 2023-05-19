import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


export default function LogIn() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
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

<legend>Sign Up</legend>
</div>
      <Row className="mb-3">
        <Row>
      <Form.Group as={Col} controlId="validationCustomUsername">
          <Form.Label>E-mail</Form.Label>
          <InputGroup hasValidation>

            <Form.Control
              type="text"
              placeholder="E-mail address"
              required
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
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Please enter invalid E-mail.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
      </Row>
      <Button type="submit" style={{ backgroundColor:"rgb(68, 193, 231)"}}>Submit form</Button>
    </Form>
    </div>
  )
}
