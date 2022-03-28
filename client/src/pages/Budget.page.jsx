import React, { useState } from 'react';
import { ActionHeader, Card, Page } from 'ui';
import { Grid } from '@mui/material';
import { BudgetTableWidget } from 'ui/organisms/BudgetTable.widget';
import { Button } from 'ui/atoms/Button';
import { AddNewBudgetRecord } from 'ui/organisms/AddNewBudgetRecord.modal';

export const BudgetPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => (
              <Button
                startIcon
                variant={'contained'}
                onClick={() => setModalVisible(true)}
              >
                Zdefinuj budet
              </Button>
            )}
          />
        }
      >
        <Grid container>
          <Grid item xs={12}>
            <BudgetTableWidget />
            <AddNewBudgetRecord
              isOpen={modalVisible}
              onClose={() => setModalVisible(false)}
            />
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};
