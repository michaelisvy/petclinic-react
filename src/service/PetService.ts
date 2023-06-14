class PetService {
    private url:string = 'http://localhost:9966/petclinic/api';

    findAllPets = (): Promise<any> => {
      return fetch(this.url + '/pets')
        .then((response) => response.json())
        .catch((error) => {
          console.error(error);
        });
    };

    findAllPetTypes = (): Promise<any> => {
      return fetch(this.url + "/pettypes")
      .then((response) => response.json() )
      .catch((error) => {
        console.error(error);
      })
    };
  }
  
  export default PetService;
  