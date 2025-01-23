import React, { useContext, useEffect, useState } from 'react'
import { Modal, Form, Button, Dropdown, Row, Col } from 'react-bootstrap'
import { Context } from '../../index'
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI'
import { observer } from 'mobx-react-lite'

const CreateDevice = observer(({show, onHide}) => {
  const {device} = useContext(Context)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
  }, [])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo([...info.filter((info) => number !== info.number)])
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.set('name', name);
    formData.set('price', `${price}`);
    formData.set('img', file);
    formData.set('typeId', device.selectedType.id);
    formData.set('brandId', device.selectedBrand.id);
    formData.set('info', JSON.stringify(info))

    createDevice(formData).then(data => onHide())
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
            <Dropdown.Toggle>{device.selectedType.name || 'Select Type'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type =>
                <Dropdown.Item
                  onClick={() => device.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className='my-3'>
            <Dropdown.Toggle>{device.selectedBrand.name || 'Select Brand'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand =>
                <Dropdown.Item
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Label htmlFor='deviceName'>Enter device name</Form.Label>
          <Form.Control
            id='deviceName'
            className='mb-3'
            placeholder='Enter device name'
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Form.Label htmlFor='devicePrice'>Enter device price</Form.Label>
          <Form.Control
            id='devicePrice'
            className='mb-3'
            placeholder='Enter device price'
            type='number'
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />

          <Form.Label htmlFor='deviceImage'>Upload device image</Form.Label>
          <Form.Control
            id='deviceImage'
            className='mb-3'
            type='file'
            onChange={selectFile}
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
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder='Enter property description'
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
        <Button variant="outline-success" onClick={addDevice}>Add the Device</Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreateDevice
