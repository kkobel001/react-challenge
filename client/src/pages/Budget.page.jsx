import React from 'react';
import { ActionHeader, Card, Page } from 'ui';
import { Grid } from '@mui/material';
import {BudgetTableWidget} from 'ui/organisms/BudgetTable.widget';
import { Button } from 'ui/atoms/Button';

 

 
export const BudgetPage = () => {

  return (
    <Page title="Budżet">
      <Card
        title={ 
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => <Button startIcon variant={'contained'}>Zdefinuj budet</Button>
            }
          />
        }
      >
        <Grid container>
          <Grid item xs={12}>
             <BudgetTableWidget />
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
}; 
 