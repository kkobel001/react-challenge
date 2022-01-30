import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



export function Button({ endIcon, startIcon, children, ...props }) {

  const emptybutton = children.length === 0;

    return (
      <MuiButton 
        startIcon={startIcon && <AddIcon />} 
        endIcon={endIcon && <KeyboardArrowRightIcon/> }
        {...props}>
        { emptybutton ? (<KeyboardArrowRightIcon style={{width:'34px'}}/> ) : (children)  }

      </MuiButton>
    )
  }

  

