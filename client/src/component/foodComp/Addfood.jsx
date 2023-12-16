import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { addfoodtoDB } from '../../services/fetchfoodservices';
import { nanoid } from 'nanoid' ;

const Addfood = () => {
//   const [itemmname, setItemname] = useState('');
//   const [serving, setServing] = useState(0);
//   const [protien , setProtein] = useState(0);
//   const [calories , setCalories] = useState(0);
//   const [sugar , setSugar] = useState(0);
//   const [category , setCategory] = useState('');

const [ formData , setFormData] = useState({

  name: "",
  serving: "",
  protein: "",
  calories: "",
  sugar: "",
  category: ""

 })

 const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
 }
  const submitForm = async (e) => {
    // Your form submission
    e.preventDefault();

    try {
        const res = await addfoodtoDB( formData);
         
        setFormData({
 
  name: "",
  serving: "",
  protein: "",
  calories: "",
  sugar: "",
  category: ""
        })
        console.log( "submitted from user" );

       
    } catch (error) {
        console.log( error );
    }

  };

  return (
    <Container className="mt-5 foodinput">
      <Row className="justify-content-center  ">
        <Col md={6}>
          <Form className="p-4 shadow-lg foodinput rounded">
            <h1 className="mb-4 text-center">Add your Item</h1>

            <Form.Group controlId="formUsername" className="mb-3">
              <InputGroup>
                <Form.Control
                
                  type="text"
                  placeholder="name od food item"
                  name="name"
                  onChange={handleChange}
                  required
                  className="rounded-start  if"
                />
                {/* <InputGroup.Text className="rounded-end">
                  <i className="bi bi-person" />
                </InputGroup.Text> */}
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="serving in grams"
                  name="serving"
                  onChange={handleChange}
                  required
                  className="rounded-start"
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formprotien" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="protiens in mg"
                  name="protein"
                  onChange={handleChange}
                  required
                  className="rounded-start"
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formcal" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="calories"
                  name="calories"
                  onChange={handleChange}
                  required
                  className="rounded-start"
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formsugar" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="sugar"
                  name="sugar"
                  onChange={handleChange}
                  required
                  className="rounded-start"
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formcat" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="category"
                  name="category"
                  onChange={handleChange}
                  required
                  className="rounded-start"
                />
              </InputGroup>
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              className="btn w-100"
              onClick={submitForm}
            >
              Add Food to List
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Addfood;