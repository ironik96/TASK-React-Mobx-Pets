import { makeAutoObservable } from "mobx";
import petsData from "./petsData";

class PetStore {
  constructor() {
    makeAutoObservable(this);
  }

  pets = petsData;

  adoptPet = (petId) =>
    (this.pets = this.pets.filter((pet) => petId !== pet.id));
}

const petStore = new PetStore();

export default petStore;
