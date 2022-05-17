import { makeAutoObservable } from "mobx";
import petsData from "./petsData";
import { v4 as uuid } from "uuid";

class PetStore {
  constructor() {
    makeAutoObservable(this);
  }

  pets = petsData;

  adoptPet = (petId) =>
    (this.pets = this.pets.filter((pet) => petId !== pet.id));

  addPet = (pet) => {
    this.pets.push({ ...pet, id: uuid(), image: "" });
  };

  updatePet = (updatedPet) => {
    this.pets = this.pets.map((pet) =>
      pet.id === updatedPet.id ? updatedPet : pet
    );
  };
}

const petStore = new PetStore();

export default petStore;
