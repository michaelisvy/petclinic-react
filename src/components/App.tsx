import '../App.css'
import { AppBar } from '@material-ui/core';
import MaterialTable from './MaterialTable';
import { makeStyles } from '@material-ui/core/styles';
import SimpleSample from './SimpleSample';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'white',
    color: "black"
  },
});

const App = () => {
  const classes = useStyles();

  return (
      <div>
      <AppBar position="static" className={classes.appBar}>
        <SimpleSample />
      </AppBar>  
      </div>
  )
}

export default App
