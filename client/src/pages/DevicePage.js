import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap';
import starBig from '../assets/star-big.png'
import { useParams } from 'react-router-dom'
import { fetchDevice } from '../http/deviceAPI';

const DevicePage = () => {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  
  useEffect(() => {
    fetchDevice(id).then(data => setDevice(data))
  }, [])

  return (
    <Container>
      <Row className='mt-3'>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
        </Col>
        <Col md={4}>
          <Row>
            <h2>{device.name}</h2>
            <div 
              className='d-flex align-items-center justify-content-center'
              style={{background: `url(${starBig}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card 
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>From: ${device.price}</h3>
            <Button variant={"outline-dark"}>Add to cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Specifications</h1>
        {device.info.map((info, index) => 
          <Row key={info.id} style={{background: index % 2 ? 'transparent' : 'lightgray'}}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
}

export default DevicePage;
