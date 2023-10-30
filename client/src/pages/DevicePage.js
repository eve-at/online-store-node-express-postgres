import React from 'react';
import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap';
import starBig from '../assets/star-big.png'

const DevicePage = () => {
  const device = {id: 1, name: '12 pro', 'price': 20000, 'rating': 4, 'typeId': 3, 'brandId': 3, 'img': "6f34f488-55ca-4483-a819-ea31e1dd3372.jpg"}
  const description = [
    {id: 1, title: 'RAM', description: '5GB'},
    {id: 2, title: 'Camera', description: '12MP'},
    {id: 3, title: 'CPU', description: 'Pentium 3'},
    {id: 4, title: 'CPU Cors', description: '2'},
    {id: 5, title: 'Battery', description: '4800mAh'},
  ]
  return (
    <Container>
      <Row className='mt-3'>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
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
        {description.map((info, index) => 
          <Row key={info.id} style={{background: index % 2 ? 'transparent' : 'lightgray'}}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
}

export default DevicePage;
