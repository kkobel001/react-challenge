import * as React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ErrorImg from './../../assets/unknown_error.png';


const WrapperNoContent= styled('div')({
  justifyItems:"center",
  alignContent:"center",
  minHeight:"80vh",
  display: "grid",}); 

const StyledImage= styled(CardMedia)({
  width: 248,
  height: 248,
  marginTop:'1px',});


export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {
        error?.message?.includes('Network Error') ? (
      <WrapperNoContent >
          <StyledImage
            component="img"
            image={ErrorImg} 
            alt="noContent"
          />
          <Typography variant="h8" color="textPrimary">Wystąpił nieoczekiwany błąd</Typography>
        </WrapperNoContent>  
           ) : null //  TODO in TASK 1
      }
    </Box>
  );
};





