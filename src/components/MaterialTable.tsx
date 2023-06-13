import { useState } from 'react';
import { AppBar, Toolbar, MenuItem, ListItemIcon } from '@material-ui/core';
import PetTypes from './PetTypes';
import Pets from './Pets';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import PetsIcon from '@material-ui/icons/Pets';
import PetsRoundedIcon from '@material-ui/icons/PetsRounded';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    backgroundColor: '#34302d', // Replace with your desired color
    color: "black"
  },
  menuItem: {
    color: "#838789",
  },
  selectedMenuItem: {
    color: "white",
    fontWeight: 'bold',
  },
  icon: {
    color: "white",
    marginRight: theme.spacing(0),
  },
}));

type MenuProps = {
  onMenuItemClick: (menuItem: string) => void;
};

const Menu = ({ onMenuItemClick }: MenuProps) => {
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState('');

  const handleMenuItemClick = (item: string) => {
    setSelectedItem(item);
    onMenuItemClick(item);
  };

  return (
    <Toolbar  className={classes.toolBar}>
      <MenuItem onClick={() => handleMenuItemClick('home')}
      className={selectedItem === 'home' ? classes.selectedMenuItem : classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <HomeIcon />
        </ListItemIcon>
        Home
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('pets')} className={selectedItem === 'pets' ? classes.selectedMenuItem : classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <PetsIcon />
        </ListItemIcon>
        Pets
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('petTypes')} className={selectedItem === 'petTypes' ? classes.selectedMenuItem : classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <PetsRoundedIcon />
        </ListItemIcon>
        Pet Types
      </MenuItem>
    </Toolbar>
  );
};

const MaterialTable = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
  };

  const renderPageBody = () => {
    if (selectedMenuItem === 'pets') {
      return <Pets />;
    }
    if (selectedMenuItem === 'petTypes') {
      return <PetTypes />;
    }
    return (
      <div>
        <div>Welcome to the Main Page</div>
        <img src="/pets.png" alt="Pets" />
      </div>
    );
    
  };

  return (
    <div style={{ width: '1200px', height: '600px' }}>
      <AppBar position="static">
        <Menu onMenuItemClick={handleMenuItemClick} />
      </AppBar>
      {renderPageBody()}
    </div>
  );
};

export default MaterialTable;

