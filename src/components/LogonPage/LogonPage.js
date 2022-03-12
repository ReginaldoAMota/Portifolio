import React, { useRef, useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logon } from '../../redux/slices/register'
import { register } from '../../utils/register'
import { useNavigate  } from 'react-router-dom';

const LogonPage = () => {
  //const logged = useSelector((state) => state.register.islogged)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const nameRef = useRef()

  // useEffect(()=>{
  //   if(logged){
  //     navigate("/Chart");
  //   }
  // },[logged])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmRef: passwordConfirmRef.current.value
    }
    if (
      user.name !== '' &&
      user.email !== '' && 
      user.password !== '' && 
      user.password === user.passwordConfirmRef      
      ) {
      const userData = await register.logon(user)
      if (userData.result) {
        dispatch(logon(userData.user))
      }
    } else {
      alert("Os dados inseridos são inválidos")
    }
  }
  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Logon
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">  
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">  
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password Confirmation"
                  ref={passwordConfirmRef}
                />
              </Form.Group>

              <Button
                variant="outline-success btn-block"
                type="submit"
                onClick={() =>navigate("/")}
              >
                Already have an account
              </Button>
              <Button
                variant="success btn-block"
                type="submit"
                onClick={() =>navigate("/Logon")}
              >
                Register
              </Button>
            </Form>
          </Col>
        </Row>
        <h6 className="mt-5 p-5 text-center text-secondary ">
          Copyright © 2022 Reginaldo Adriano Mota. All Rights Reserved.
        </h6>
      </Container>
    </>
  )
}

export default LogonPage
