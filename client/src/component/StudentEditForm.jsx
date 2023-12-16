import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { NavigationBar } from "./Navigationbar";
import { Header } from "antd/es/layout/layout";
import { Form, useParams } from "react-router-dom";
import { useState } from "react";
import { updateusers } from "../services/AdminService";


export function StudentEditForm() {
    const params=useParams();
    const [formData,setFormData]=useState({name:"",email:"",phone:"",gender:""});
    const [isSubmitted,setIsSubmitted]=useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
           const result=await updateusers(formData,params.name);
           console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    // const populateStudentState=async()=>{
    //     try {
    //         const result=await fetchStudentByRoll(params.roll);
    //         setFormData(result.student);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(()=>{
    //     populateStudentState();
    // },[]);

    return (
        <>
        <NavigationBar/>
        <Container>
            {/* <Header text="Update student here"></Header> */}
            {formData?<Form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Roll</Form.Label>
                            <Form.Control type="text" value={formData.roll} placeholder="Enter roll" name="name" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={formData.name} placeholder="Enter name" name="email" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Marks</Form.Label>
                            <Form.Control type="text" value={formData.marks} placeholder="Enter marks" name="phone" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Update</Button>
                    </Col>
                </Row>
            </Form>:<p>No data found for given roll no.</p>}
            
            <Row className="mt-3">
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success">User Updated</Alert>:null}
                </Col>
            </Row>
        </Container>
        </>
    );
}