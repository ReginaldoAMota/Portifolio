import React, { useRef } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/slices/auth'
import { auth } from '../../utils/auth'

const LoginPage = () => {
  const logged = useSelector((state) => state.auth.islogged)
  const dispatch = useDispatch()

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    if (user.email !== '' && user.password !== '') {
      const userData = await auth.login(user)
      if (userData.result) {
        dispatch(login(userData.user))
      }
    } else {
    }
  }
  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Admin Login
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

              <Button
                variant="success btn-block"
                type="submit"
                onClick={handleSubmit}
              >
                Login
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

export default LoginPage
