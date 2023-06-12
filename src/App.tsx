import './App.css'
import { AppBar } from '@material-ui/core';
import MaterialTable from './MaterialTable';

const App = () => {

  return (
      <div>
      <AppBar position="static">
        <MaterialTable />
      </AppBar>  
      </div>
  )
}

export default App
