import { useEffect, useState } from 'react'
import './App.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const PetTypes = () => {
  const [petTypes, setPetTypes] = useState([{ id: '', name: '' }]);
  
  const fetchData = () => {
    fetch("http://localhost:9966/petclinic/api/pettypes")
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      console.log(data);
      setPetTypes(data);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error(error);
      });
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
       <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {petTypes.map((petType) => (
            <TableRow key={petType.id}>
              <TableCell>{petType.id}</TableCell>
              <TableCell>{petType.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PetTypes
