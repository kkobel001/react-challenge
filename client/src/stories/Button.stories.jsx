import React from 'react';
import { Button } from '../ui';
import { Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Zadanie 1/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: {
        type: 'radio',
      },
      options: ['contained', 'outlined'],
    },
    effect: {
      control: {
        type: 'radio',
      },
      options: ['main', 'medium', 'small'],
    },
    color: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'error', 'success', 'warning'],
    },
    disabled: {
      control: {
        default: false,
        type: 'boolean',
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => <Button {...args}>{label}</Button>;
const All = () => (
  <>
    <Grid >
    <Typography  mr={3} variant={'subheading'}>Primary</Typography>
      <Grid item xs={12} sx={{ mb: 2 }} >
      <Typography variant={'subheading'}>Contained</Typography>
      </Grid>
    <Grid    item
      sx={{ 
          backgroundColor: 'primary',
          textTransform: 'capitalize', 
       }}>
      <Button variant={'contained'}>Button</Button>
      <Button variant={'contained'} startIcon={<AddIcon />}> Button</Button>
      <Button variant={'contained'} endIcon={<KeyboardArrowRightIcon />}> Button</Button>
      <Button variant={'contained'}> <KeyboardArrowRightIcon /></Button>
    </Grid>
    </Grid>
    <Grid spacing={6}>
      <Grid item xs={12} sx={{ mb: 2 }}  >
        <Typography variant={'subheading'}>Outlined</Typography>
      </Grid>
      <Grid item mr={3}  sx={{ 
          backgroundColor: 'primary',
          textTransform: 'capitalize', 
       }}>
          <Button variant={'outlined'}>Button</Button>
          <Button variant={'outlined'} startIcon={<AddIcon />}> Button</Button>
          <Button variant={'outlined'} endIcon={<KeyboardArrowRightIcon />}> Button</Button>
          <Button variant={'outlined'}> <KeyboardArrowRightIcon /></Button>
      </Grid>
    </Grid>
    <Grid spacing={6}>
      <Grid item xs={12} sx={{ mb: 2 }}  >
        <Typography variant={'subheading'}>Disabled</Typography>
      </Grid>
      <Grid item >
          <Button variant={'contained'} disabled >Button</Button>
          <Button variant={'contained'} disabled  startIcon={<AddIcon sx={{height:'22px'}} />}> Button</Button>
          <Button variant={'contained'} disabled endIcon={<KeyboardArrowRightIcon />}> Button</Button>
          <Button variant={'contained'} disabled > <KeyboardArrowRightIcon sx={{height:'22px'}}/></Button>
      </Grid>
      <Grid item mr={3}>
          <Button variant={'outlined'} disabled >Button</Button>
          <Button variant={'outlined'} disabled startIcon={<AddIcon sx={{fontSize:'22px'}}/>}> Button</Button>
          <Button variant={'outlined'} disabled endIcon={<KeyboardArrowRightIcon />}> Button</Button>
          <Button variant={'outlined'} disabled > <KeyboardArrowRightIcon sx={{ textTransform: 'capitalize', 
    fontWeight: 500,
    fontSize:'22px',
    lineHeight: '22px',
    align:'center',}} /></Button>
      </Grid>
    
    </Grid>
    


  </>
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: 'Button',
};

export const AllStories = All.bind({});

AllStories.args = {
 ...Playground.args, 
 label :'Nothing',


};
