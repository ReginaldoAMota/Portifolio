import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/slices/auth'
import { auth } from '../../utils/auth'

const Chart = () => {
  const logged = useSelector((state) => state.auth.islogged)
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Bem Vindo {user.name.first + ' ' + user.name.last}
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <img src={user.picture.medium} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Chart
