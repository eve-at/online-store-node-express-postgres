import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const CreateBrand = ({show, onHide}) => {
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
              Add new Brand
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Control 
                placeholder='Enter Brand name'
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Close</Button>
            <Button variant="outline-success" onClick={onHide}>Add the Brand</Button>
          </Modal.Footer>
        </Modal>
      )
}

export default CreateBrand