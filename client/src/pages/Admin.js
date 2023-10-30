import React, { useState } from 'react';
import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)

  return (
    <Container className='d-flex flex-column'>
      <Button 
        onClick={() => setTypeVisible(true)}
        variant={"outline-dark"} 
        className='mt-4 p-2'>Add a Type</Button>
      <Button 
        onClick={() => setBrandVisible(true)}
        variant={"outline-dark"} 
        className='mt-4 p-2'>Add a Brand</Button>
      <Button 
        onClick={() => setDeviceVisible(true)}
        variant={"outline-dark"} 
        className='mt-4 p-2'>Add a Device</Button>

      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>

    </Container>    
  );
}

export default Admin;
