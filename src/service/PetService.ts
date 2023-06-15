import axios from 'axios';

class PetService {
  private url: string = 'http://localhost:9966/petclinic/api';

  findAllPets = (): Promise<any> => {
    return fetch(this.url + '/pets')
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  };

  findAllOwners = (): Promise<any> => {
    return fetch(this.url + '/owners')
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  };

  addOwner = (requestBody: FormData): Promise<any> => {
    return axios.post(this.url + '/owners', requestBody);
  };


  findAllPetTypes = (): Promise<any> => {
    return fetch(this.url + '/pettypes')
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  };
}

export default PetService;
