import React from 'react';
import { Grid, Typography, } from '@mui/material';
import { useQuery } from 'react-query';
import { BudgetService } from 'api';
import { BUDGET_QUERY } from 'queryKeys';
import { useCallback } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card ,Loader, Error } from 'ui';


export const BudgetChartWidget = () => {
    
    const { isLoading, error, data } = useQuery(
        BUDGET_QUERY,
        () => BudgetService.findAll(),
        {
          select: useCallback((response) => {
           const data = response.map(
            ({currentSpendingPercent}) => currentSpendingPercent,
           )
            return {
              chartData: {
                labels: response.map(({category})=> `${category.name}%`),
                datasets: [
                  {
                    axis:'y',
                    data: data,
                    fill:false,
                    backgroundColor: response.map(({category})=>category.color),
                    borderWidth: 0,
                  },
                ],
              },
             hasData: !!data.length,
            };
          }, []),
        },
      );
      <Card
      title={
        <Typography variant={'h4'}>Budzet</Typography>}
        subheader={'podsumowanie wydatkow'} 
    >
      {isLoading && <Loader />}
      {!isLoading && error && <Error error={error} />}
        {!isLoading && !error && !data && !data.hasData && (
          <Typography>Brak wynikow</Typography>
        )}
        {!isLoading && !error && data && data.hasData && (
          
            <Grid 
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                <Bar
                type={'bar'}
                    data={data.chartData}
                    options={{ maintainAspectRatio: false }}
                />
            </Grid>
        )}
    </Card>
    
};
