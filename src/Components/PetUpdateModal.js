import { FormGroup, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import petStore from "../petStore";

const PetUpdateModal = (props) => {
  const [animal, setAnimal] = useState({ ...props.pet });

  const handleForm = (event) => {
    setAnimal({ ...animal, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    petStore.updatePet(animal);
    props.setModalShow(false);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Animal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a name"
              onChange={handleForm}
              name="name"
              value={animal.name}
            />
          </Form.Group>
          <FormGroup>
            <Form.Select
              aria-label="Default select example"
              onChange={handleForm}
              name="type"
              value={animal.type}
            >
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabbit">Rabbit</option>
            </Form.Select>
          </FormGroup>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image url"
              onChange={handleForm}
              name="image"
              value={animal.image}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default PetUpdateModal;
