import { useState } from 'react';
import axios from 'axios';

const OwnersForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [telephone, setTelephone] = useState('');

  interface FormData {
    firstName:string,
      lastName:string,
      address:string,
      city:string,
      telephone:string
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Create the request body
    const requestBody: FormData = {
      firstName,
      lastName,
      address,
      city,
      telephone
    };

    try {
      // Send the POST request to the REST service
      console.log('Response:', requestBody);
      const response = await axios.post('http://localhost:9966/petclinic/api/owners', requestBody);

      // Handle the response from the REST service
      console.log('Response:', response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
       First name:
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <br />
      <label>
       Last name:
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <br />
      <label>
       Address:
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="telephone"
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default OwnersForm;
