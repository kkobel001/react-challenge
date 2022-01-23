import * as React from 'react';
import { styled } from '@mui/system';
import imgNoContent from './../../assets/no_content.png';

const WrapperNoContent= styled('div')({
  textAlign: 'center',
});
const TitleNoContent= styled('h1')({
  fontSize:'64px',
  color:'#000000',
  weight:'700',
  lineHeight:'76,8px',
  letterSpacing:'-1',
});

const StyledP= styled('div')({
color:'#33333',
opacity:'50%',
fontSize: '19,2px',
lineHeight:'28,8px',});

export const NoContent = () => {
  return (
    <WrapperNoContent>
      <TitleNoContent>NoContent</TitleNoContent>
      <img
        src={imgNoContent} 
        alt="noContent" 
        style={{
        width: 202,
        height: 202,}} 
      />
      <StyledP>Brak danych do wyświetlnie</StyledP>
    </WrapperNoContent>
  )
};
