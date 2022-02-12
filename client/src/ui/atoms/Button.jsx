import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/system';


const StyledIcon= styled(KeyboardArrowRightIcon)({
  minWidth: '20px',
  minHeight:'20px',
  fontSize: 20,
 });

export function Button({ endIcon, startIcon, children, ...props }) {

  const emptybutton = children.length === 0;

    return (
      <MuiButton 
        style={ {minWidth: emptybutton ? '8px': 'auto'}}
        startIcon={startIcon && <AddIcon />} 
        endIcon={endIcon && <KeyboardArrowRightIcon/> }
        {...props}>
        { emptybutton ? (<StyledIcon /> ) : (children)  }
      </MuiButton>
    )
  }

  

