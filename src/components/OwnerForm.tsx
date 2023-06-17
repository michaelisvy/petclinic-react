import { useState } from 'react';
import PetService from '../service/PetService';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Navigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: '#f5f5f5',
    borderRadius: theme.spacing(1),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const OwnersForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [telephone, setTelephone] = useState('');
  const classes = useStyles();

  

  const petService = new PetService();

  interface FormData {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    telephone: string;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Create the request body
    const requestBody: FormData = {
      firstName,
      lastName,
      address,
      city,
      telephone,
    };

    try {
      // Send the POST request to the REST service
      console.log('Response:', requestBody);
      const response = await petService.addOwner(requestBody);

      // Handle the response from the REST service
      console.log('Response:', response.data);
      return (
        <Navigate to="/owners" replace/>
      );
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        label="First name"
        variant="outlined"
        value={firstName} required
        onChange={(event) => setFirstName(event.target.value)}
      />
      <TextField
        label="Last name"
        variant="outlined"
        value={lastName} required
        onChange={(event) => setLastName(event.target.value)}
      />
      <TextField
        label="Address"
        variant="outlined"
        value={address} required
        onChange={(event) => setAddress(event.target.value)}
      />
      <TextField
        label="City"
        variant="outlined"
        value={city} required
        onChange={(event) => setCity(event.target.value)}
      />
      <TextField
        label="Phone"
        variant="outlined"
        value={telephone} required
        onChange={(event) => setTelephone(event.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
        Submit
      </Button>
    </form>
  );
};

export default OwnersForm;
