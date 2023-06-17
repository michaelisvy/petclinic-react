import { SetStateAction, useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@material-ui/core';
import PetService from '../service/PetService';

const Pets = () => {
  const [pets, setPets] = useState([{ id: '', name: '', birthDate: '' }]);
  
  const petService = new PetService();

  useEffect(() => {
    petService.findAllPets()
    .then((data) => {
      setPets(data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, [])

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<any>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
      <div>
       <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Birth Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {pets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((pet) => (
            <TableRow key={pet.id}>
              <TableCell>{pet.id}</TableCell>
              <TableCell>{pet.name}</TableCell>
              <TableCell>{pet.birthDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
            rowsPerPageOptions={[10, 20]}
            component="div"
            count={pets.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
    </div>
    
  )
}

export default Pets
