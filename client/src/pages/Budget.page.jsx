import React from 'react';
import { useQuery } from 'react-query';
import { ActionHeader, Card, Page,Error,Loader, NoContent , Table, Money, LocalizedDate, CategoryCell} from 'ui';
import { Grid } from '@mui/material';
// import {Table} from '../ui/molecules/table/Table';
import { Button } from 'ui/atoms/Button';
import { BudgetService } from 'api';
import { Box } from '@mui/system';



 
export const BudgetPage = () => {
  const { isLoading, isError, data } = useQuery("repoData", BudgetService.findAll);
  

  console.log(data, BudgetService.findAll);

  if (isLoading) return "Loading... ";

  if (isError) return "An error has occurred: "
  
  // const dataRows= data.map((msg) => (
  //   <div key={msg.id}>{msg.category.name}</div>
  // ))

  const headCells =[
    {
      id: 1,
      label:"Nazwa",
      renderCell: (msg) => <CategoryCell color={msg.category.color} name={msg.category.name}/>},
    {
      id: 2,
      label:"Planowane wydatki",
      renderCell: (msg) => <Money inCents= {msg.amountInCents} />
    },
    {
      id: 3,
      label:"Obecna kwota",
      renderCell: (msg) => <Money inCents= {msg.currentSpending} />
    },
    {
      id: 4,
      label:"Status",
      renderCell: (msg) => <Money inCents= {msg.amountInCents} />
    },
    {
      id: 5,
      label:"Data utworzenia",
      renderCell: (msg) =>  <LocalizedDate date={msg.createdAt}/>
    }
  ]

  const deleteRecords = (n)=> {};

  return (
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() =>  <Button startIcon variant={'contained'}>Zdefinuj budet</Button>
            }
          />
        }
      >
        <Grid container>
          <Grid item xs={12}>
          {isLoading && ( <Loader />) }
          {isError  && (<Error />)}
          { !data.length  && (<NoContent />) }
          <Table
          headCells={headCells}
          rows={data} 
          getUniqueId={(msg) => msg.id} 
          deleteRecords={deleteRecords} />
        
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};


{/* <Table>
{data.map(msg => (
    <li key={msg.id}> 
    {msg.name}
    {msg.budgetIds}
    {msg.currentSpending}
    </li>
  )}
</Table> */}