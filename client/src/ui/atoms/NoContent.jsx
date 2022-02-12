import * as React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import imgNoContent from './../../assets/no_content.png';


const WrapperNoContent= styled('div')({
  justifyItems:"center",
  alignContent:"center",
  minHeight:"90vh",
  display: "grid",
}); 

const StyledImage= styled(CardMedia)({
  width: 202,
  height: 202,
 });

export const NoContent = () => {
  return (
    <WrapperNoContent >
      <StyledImage
        component="img"
        image={imgNoContent} 
        alt="noContent"
      />
      <Typography variant="h8" color="textPrimary">Brak danych do wyświetlnie</Typography>
    </WrapperNoContent>
  )
};
