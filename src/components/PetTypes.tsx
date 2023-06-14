import { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import PetService from '../service/PetService';

const PetTypes = () => {
  const [petTypes, setPetTypes] = useState([{ id: '', name: '' }]);

  const petService = new PetService();

  useEffect(() => {
    petService.findAllPetTypes()
      .then( (data) => {setPetTypes(data)} )
      .catch(error => { console.log(error) } )
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
