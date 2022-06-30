import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { BUDGET_QUERY, PARTIAL_CATEGORIES_QUERY } from 'queryKeys';
import { Loader, Error, NoContent, Money, LocalizedDate,Table,CategoryCell,} from 'ui';
import { useMutationWithFeedback } from 'hooks/useMutationWithFeedback';

export const BudgetTableWidget = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(BUDGET_QUERY, () =>
    BudgetService.findAll(),
  );

  const { mutation: deleteRecordsMutation } = useMutationWithFeedback(
    BudgetService.remove,
    {
      successMessage: 'Element został usunięty',

      onSuccess: async () => {
        await queryClient.refetchQueries([BUDGET_QUERY]);
        await queryClient.refetchQueries([PARTIAL_CATEGORIES_QUERY]);
      },
    },
  );
  const deleteRecords = (ids) => deleteRecordsMutation.mutate(ids);

  const tableDefinition = [
    {
      id: 'name',
      label: 'Nazwa',
      renderCell: (row) => (
        <CategoryCell color={row.category?.color} name={row.category?.name} />
      ),
    },
    {
      id: 'amount',
      label: 'Planowane wydatki',
      renderCell: (row) => <Money inCents={row.amountInCents} />,
    },
    {
      id: 'current-amount',
      label: 'Obecna kwota',
      renderCell: (row) => <Money inCents={row.currentSpending} />,
    },
    {
      id: 'status',
      label: 'Status',
      renderCell: (row) => {
        if (row.currentSpending === row.amountInCents) return 'Wykorzystywany';
        if (row.currentSpending > row.amountInCents) return 'Przekroczone';
        if (row.currentSpending < row.amountInCents) return 'W normie';
      },
    },
    {
      id: 'createdAt',
      label: 'Data utworzenia',
      renderCell: (row) => <LocalizedDate date={row.createdAt} />,
    },
  ];

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    console.log('message', error.message);
    return <Error error={error} />;
  }
  if (!data?.length) {
    return <NoContent />;
  }
  return (
    <Table
      rows={data}
      headCells={tableDefinition}
      getUniqueId={(row) => row.id}
      deleteRecords={deleteRecords}
    />
  );
};
