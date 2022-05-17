import petStore from "../petStore";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import PetUpdateModal from "./PetUpdateModal";

export default function PetItem({ pet }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div class="col-lg-4 col-md-8 col-sm-10">
        <div class="single-doctor">
          <img className="image" alt={pet.name} src={pet.image} />
          <div class="content">
            <h3>{pet.name}</h3>
            <button
              type="button"
              class="btn btn-info"
              onClick={() => petStore.adoptPet(pet.id)}
            >
              Adopt
            </button>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Update
            </Button>
          </div>
        </div>
      </div>
      <PetUpdateModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
        pet={pet}
      />
    </>
  );
}
