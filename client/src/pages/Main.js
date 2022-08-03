import React from 'react';
import Header from '../components/Header';
import Date from '../components/Date';
import Time from '../components/Time'
import { Container, Col, Row } from 'react-bootstrap';
import { Background } from '../assets';

import './main.styles.scss';

const Main = () => {
  return (
    <>
      <div className='background-main'></div>
      <Container>
        <Col>
          <Row>
            <Header />
          </Row>
          <Container className='d-flex justify-content-center'>
            <Date />
          </Container>
        </Col>
      </Container>
      <div className='background-time__container'>
        <div className='background-time'>
          <Container>
            <Time />
          </Container>
        </div>
      </div>
    </>
  );
};

export default Main;