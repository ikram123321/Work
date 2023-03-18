import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Row, Col, Form, Button, Card } from 'react-bootstrap'

export default function SignUp() {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password}))
    const response = await fetch("http://localhost:3002/api/creatuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password})
    });
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials");
    }
  }

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <div className='container my-5 text-center'>
      <h1>Welcome to <span style={{color: 'blue'}}>Get Work With me</span></h1>
      </div>
  

      <div className='container my-5'>
        <Row className='justify-content-center'>
          <Col xs={12} md={8} lg={6}>
            <Form  className='container my-5 border border-primary' style={{maxWidth: '50rem', borderRadius: '10px' ,padding:'10px'}}>
              <Form.Group className='mb-3' controlId='formName'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' name='name' placeholder='Enter Name' value={credentials.name} onChange={onChange} required />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder='Enter Email' value={credentials.email} onChange={onChange} required />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder='Password'value={credentials.password} onChange={onChange}  />
              </Form.Group>
            
              <Button variant="primary" type="submit">
                Submit
              </Button>
              
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  )
}
