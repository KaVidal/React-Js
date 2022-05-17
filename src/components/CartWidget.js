import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from './CartContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadges() {
  const test = useContext(CartContext);

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={test.calcQtyItems()} color="secondary">
        <Link to='/cart' style={{textDecoration: "none", color: "black"}}>
          <ShoppingCartIcon></ShoppingCartIcon>
        </Link>
      </StyledBadge>
    </IconButton>
    
  );
}
