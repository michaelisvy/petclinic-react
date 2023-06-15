import '../App.css';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Main from './Main';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'white',
    color: 'black',
    width: 1000,
    height: 800,
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Main />
      </AppBar>
    </div>
  );
};

export default App;
