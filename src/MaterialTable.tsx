import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, MenuItem } from '@material-ui/core';
import PetTypes from './PetTypes';
import Pets from './Pets';

type MenuProps = {
  onMenuItemClick: (menuItem: string) => void;
};

const Menu = ({ onMenuItemClick }: MenuProps) => {
  return (
    <Toolbar>
      <MenuItem onClick={() => onMenuItemClick('home')}>Home</MenuItem>
      <MenuItem onClick={() => onMenuItemClick('pets')}>Pets</MenuItem>
      <MenuItem onClick={() => onMenuItemClick('petTypes')}>Pet Types</MenuItem>
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
    return <div>Welcome to the Main Page</div>;
  };

  return (
    <div style={{ width: '500px', height: '600px' }}>
      <AppBar position="static">
        <Menu onMenuItemClick={handleMenuItemClick} />
      </AppBar>
      {renderPageBody()}
    </div>
  );
};

export default MaterialTable;

