import { useEffect, useState } from 'react'
import './App.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@material-ui/core';

const Pets = () => {
  const [pets, setPets] = useState([{ id: '', name: '', birthDate: '' }]);
  
  const fetchData = () => {
    fetch("http://localhost:9966/petclinic/api/pets")
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      console.log(data);
      setPets(data);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error(error);
      });
  }

  useEffect(() => {
    fetchData()
  }, [])

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
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
