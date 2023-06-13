class PetService {
    findAllPets = (): Promise<any> => {
      return fetch('http://localhost:9966/petclinic/api/pets')
        .then((response) => response.json())
        .catch((error) => {
          console.error(error);
        });
    };
  }
  
  export default PetService;
  