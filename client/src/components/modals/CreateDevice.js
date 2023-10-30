import React, { useContext, useState } from 'react'
import { Modal, Form, Button, Dropdown, Row, Col } from 'react-bootstrap'
import { Context } from '../../index'

const CreateDevice = ({show, onHide}) => {
  const {device} = useContext(Context)
  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo([...info.filter((info) => number !== info.number)])
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new Device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='my-3'>
            <Dropdown.Toggle>Select Type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type => 
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className='my-3'>
            <Dropdown.Toggle>Select Brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand => 
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control 
            className='mt-3'
            placeholder='Enter device name'
          />

          <Form.Control 
            className='mt-3'
            placeholder='Enter device price'
            type='number'
          />

          <Form.Control 
            className='mt-3'
            type='file'
          />

          <hr />

          <Button 
            variant={"outline-dark"}
            onClick={addInfo}
          >Add new property</Button>

          {info.map(i => 
            <Row key={i.number} className='mt-3'>
              <Col md={4}>
                <Form.Control 
                  placeholder='Enter property name'
                />
              </Col>
              <Col md={4}>
                <Form.Control 
                  placeholder='Enter property description'
                />
              </Col>
              <Col md={4}>
                <Button 
                  variant={"outline-danger"}
                  onClick={() => {removeInfo(i.number)}}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={onHide}>Add the Type</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice