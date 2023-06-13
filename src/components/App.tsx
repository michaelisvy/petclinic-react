import '../App.css'
import { AppBar } from '@material-ui/core';
import MaterialTable from './MaterialTable';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'white', // Replace with your desired color
    color: "black"
  },
});

const App = () => {
  const classes = useStyles();

  return (
      <div>
      <AppBar position="static" className={classes.appBar}>
        <MaterialTable />
      </AppBar>  
      </div>
  )
}

export default App
