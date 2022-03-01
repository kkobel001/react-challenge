import React from 'react';
import { Button } from '../ui';
import { Grid, Typography } from '@mui/material';
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
    label: {
      control: {
        type: '' | 'node',
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
    startIcon: {
      control: {
        default: false,
        type: 'boolean',
      },
    },
    endIcon: {
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
    <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sx={{ mb: 2 }} >
      <Typography variant={'subheading'}>Contained</Typography>
      </Grid>
    <Grid    item>
      <Button variant={'contained'}> Button</Button>
      <Button variant={'contained'} startIcon> Button</Button>
      <Button variant={'contained'} endIcon > Button</Button>
      <Button variant={'contained'} sx={ {minWidth: '20px'}} > <KeyboardArrowRightIcon  sx={{height:'20px', width: '20px'}}/></Button>
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
          <Button variant={'outlined'} startIcon> Button</Button>
          <Button variant={'outlined'} endIcon> Button</Button>
          <Button variant={'outlined'} sx={ {minWidth: '34px'}}> <KeyboardArrowRightIcon sx={{height:'20px', width: '20px'}} /></Button>
      </Grid>
    </Grid>
    <Grid spacing={6}>
      <Grid item xs={12} sx={{ mb: 2 }}  >
        <Typography variant={'subheading'}>Disabled</Typography>
      </Grid>
      <Grid item >
          <Button variant={'contained'} disabled >Button</Button>
          <Button variant={'contained'} disabled  startIcon > Button</Button>
          <Button variant={'contained'} disabled endIcon> Button</Button>
          <Button variant={'contained'} disabled sx={ {minWidth: '34px'}}> <KeyboardArrowRightIcon  sx={{height:'20px', width: '20px'}}/></Button>
      </Grid>
      <Grid item mr={3}>
          <Button variant={'outlined'} disabled >Button</Button>
          <Button variant={'outlined'} disabled startIcon> Button</Button>
          <Button variant={'outlined'} disabled endIcon> Button</Button>
          <Button variant={'outlined'} disabled  sx={ {minWidth: '34px'}}><KeyboardArrowRightIcon  sx={{height:'20px', width: '20px'}} /></Button>
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
 button :'Nothing',
};
