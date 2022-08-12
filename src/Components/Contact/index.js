import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cover from '../../Assets/images/cover.jpg';
import CardComponent from './card';

const Contact = () => {
  return (
    <Fragment>
      <Container>
        <Row style={{  justifyContent: 'center', alignContent:'center',alignItems:'center',margin:"6vh" }}>
          <Col sm={4}>
            <CardComponent Cover={Cover} Title={"Facebook"} />
          </Col>
          <Col  sm={4}>
            <CardComponent Cover={Cover} Title={"Email"}/>
          </Col>
          <Col  sm={4}>
            <CardComponent Cover={Cover} Title={"Phone"}/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}
export default Contact;