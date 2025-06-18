import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function IconButtonWithBadge({basketData}) {
  return (
    <IconButton sx={{ color: 'white' }}>
  <ShoppingCartIcon fontSize="small" />
  <CartBadge
    badgeContent={basketData}
    color="primary"
    overlap="circular"
    sx={{
      '& .MuiBadge-badge': {
        backgroundColor: 'red', // badge orqa foni
        color: 'azure',           // raqam rangi
      }
    }}
  />
</IconButton>

  );
}