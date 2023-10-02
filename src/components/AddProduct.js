import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

function AddProduct({handleProduct}) {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState(0);
    const [nbrview, setNbrview] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Add product
      </Button>
    <Modal show={show} onHide={handleClose}
    //   {...props}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Complete the form:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group className="position-relative mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={(e)=>setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="position-relative mb-3">
          <Form.Label>Image:</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={(e)=>setImage(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="position-relative mb-3">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e)=>setDescription(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="position-relative mb-3">
            <Form.Label>Brand:</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e)=>setBrand(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="position-relative mb-3">
            <Form.Label>Category:</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e)=>setCategory(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="position-relative mb-3">
            <Form.Label>Price:</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e)=>setPrice(e.target.value)}
            />
            </Form.Group>
            <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={(e)=>setRating(e.target.value)}
          />
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Label>Number of reviews:</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e)=>setNbrview(e.target.value)}
            />
            </Form.Group>
      </Row>
      <Button onClick={()=>{handleProduct({id:Math.random(), name, image, description, brand, category, price, rating, nbrview }); handleClose()}}>Add product</Button>
    </Form>
        
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
   </>
  );
}

export default AddProduct;