import React from 'react';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { Doughnut } from 'react-chartjs-2';
import { Box, Grid, Typography } from '@mui/material';
import { CategoryCell, Money, Card,  } from 'ui';
import { Loader } from '../atoms/Loader';
import { Error } from '../atoms/Error';
import { SummaryService } from 'api';
import { SUMMARY_QUERY } from 'queryKeys';
import { formatCentsToDollars } from 'utils';

export const SummaryChartWidget = () => {
const { isLoading, error, data } = useQuery(
    SUMMARY_QUERY,
    () => SummaryService.findAll(),
    {
      select: useCallback((response) => {
        const { colors, labels, data } = response.spending.reduce(
          (result, current) => ({
            colors: [...(result.colors || []), current.categoryColor],
            labels: [...(result.labels || []), current.categoryName],
            data: [
              ...(result.data || []),
              formatCentsToDollars(current.amountInCents),
            ],
          }),
          {},
        );
        return {
          chartData: {
            datasets: [
              {
                label: labels,
                data: data,
                backgroundColor: colors,
                borderWidth: 0,
              },
            ],
          },
          exists: !!response.spending.length,
          summary: response,
        };
      }, []),
    },
  );
  return (
    <Card
      title={
        <Box sx={{ display: 'flex', justyfyContent: 'space-between' }}>
          <Typography variant={'h4'}> Saldo</Typography>
          <Typography
            component="h3"
            variant="h4"
            marginBottom={1}
            fontWeight="bold"
          >
            <Money inCents={data?.summary?.balance} />
          </Typography>
        </Box>
      }
      subheader={'Pozostała kwota'}
    >
      {isLoading && <Loader />}
      {!isLoading && error && <Error error={error} />}
      <Grid container mt={4}>
        {!isLoading && !error && !data && !data.exists && (
          <Typography>Brak wynikow</Typography>
        )}
        {!isLoading && !error && data && data.exists && (
          <>
            <Grid item xs={12} alignItems={'center'}>
              <Doughnut
                data={data?.chartData}
                hight={200}
                width={200}
                options={{ maintainAspectRatio: false }}
              />
            </Grid>
            <Grid item xs={12} mt={3}>
              {data?.summary?.spending.map((element) => (
                <CategoryCell
                  key={element.categoryId}
                  color={element.categoryColor}
                  name={element.categoryName}
                />
              ))}
            </Grid>
          </>
        )}
      </Grid>
    </Card>
  );
};
