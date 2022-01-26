import * as React from 'react';
import { styled } from '@mui/system';
import { Button as MuiButton } from '@mui/material';

export function Button({ children, ...props }) {
  return <MuiButton onClick={()=> console.log('clicked')} {...props}>{children}</MuiButton>;
}
