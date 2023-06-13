import { useState } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import PetTypes from './PetTypes';
import Pets from './Pets';
import MenuItemCustom from './MenuItemCustom';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    backgroundColor: '#34302d', // Replace with your desired color
    color: "black"
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
      <MenuItemCustom
        icon={<HomeIcon />}
        text="Home"
        onClick={() => handleMenuItemClick('home')}
        selected={selectedItem === 'home'}
      />  
      <MenuItemCustom
        icon={<PetsIcon />}
        text="Pets"
        onClick={() => handleMenuItemClick('pets')}
        selected={selectedItem === 'pets'}
      />
      <MenuItemCustom
        icon={<PetsIcon />}
        text="Pet Types"
        onClick={() => handleMenuItemClick('petTypes')}
        selected={selectedItem === 'petTypes'}
      />
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

