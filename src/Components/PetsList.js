import { observer } from "mobx-react";
import { useState } from "react";
import petStore from "../petStore";
import PetItem from "./PetItem";
import Button from "react-bootstrap/Button";
import PetCreateModal from "./PetCreateModal";
import SearchBar from "./SearchBar";
import Selector from "./Selector";

function PetsList() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const pets = petStore.pets;

  const petList = pets
    .filter(
      (pet) =>
        pet.name.toLowerCase().includes(query.toLowerCase()) &&
        pet.type.includes(type)
    )
    .map((pet) => <PetItem key={pet.id} pet={pet} />);

  return (
    <>
      <section id="doctors" class="doctor-section pt-140">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-5 col-xl-6 col-lg-7">
              <div class="section-title text-center mb-30">
                <h1 class="mb-25 wow fadeInUp" data-wow-delay=".2s">
                  Fur-ends
                </h1>
                <SearchBar setQuery={setQuery} />
                <br />
                <div className="type-and-add">
                  <Selector setType={setType} />
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">{petList}</div>
        </div>
      </section>
      <PetCreateModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default observer(PetsList);
