import { MenuItem, ListItemIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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

type MenuItemCustomProps = {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
  selected: boolean;
};

const MenuItemCustom = ({ icon, text, onClick, selected }: MenuItemCustomProps) => {
  const classes = useStyles();
  

  return (
    <Link to='/pets'>
    <MenuItem className={selected ? classes.selectedMenuItem : classes.menuItem}>
    <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
        {text}
  </MenuItem>
  </Link>
  );
};

export default MenuItemCustom;

