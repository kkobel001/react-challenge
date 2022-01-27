import * as React from 'react';
import { Button as MuiButton } from '@mui/material';

export function Button({ children, ...props }) {
  return <MuiButton 
   sx={{
    textTransform: 'capitalize', 
    fontWeight: 'fontWeightRegular',
    fontSize:'fontMedium',
    lineHeight: '1.3rem',
    height:'34px',
    align:'center',
    justifyItems:"center",
    alignContent:"center",
    marginTop:'6px',
    marginBottom:'6px',
   }} 
  {...props}>{children}</MuiButton>;
}
