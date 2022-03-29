import React, { useState } from 'react';
import { LEDGER_QUERY } from 'queryKeys';
import { LedgerService } from 'api';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { Money } from 'ui/atoms/Money';
import { Button } from 'ui/atoms/Button';
import { LocalizedDate } from 'ui/atoms/LocalizedDate';
import { Table } from 'ui/molecules/table/Table';
import { Loader } from 'ui/atoms/Loader';
import { ActionHeader, Card } from 'ui';
import { Error } from 'ui/atoms/Error';
import { NoContent } from 'ui/atoms/NoContent';
import { CategoryCell } from 'ui/molecules/CategoryCell';
import Box from '@mui/material/Box';
import { theme } from 'theme';
import { AddNewLedgerRecord } from './AddNewLedgerRecord.modal';
import RemoveIcon from '@mui/icons-material/Remove';

export const LedgerWidget = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenType, setIsOpenType] = useState('');

  const handleOpenModal = () => {
    isOpen(true);
    setIsOpenType(isOpenType);
  };

  const tableDefinition = [
    {
      id: 'name',
      label: 'Nazwa',
      renderCell: (row) => row.title,
    },
    {
      id: 'categoryId',
      label: 'Kategoria',
      renderCell: (row) => (
        <CategoryCell color={row.category?.color} name={row.category?.name} />
      ),
    },
    {
      id: 'createdAt',
      label: 'Data',
      renderCell: (row) => <LocalizedDate date={row.createdAt} />,
    },
    {
      id: 'amount',
      label: 'Kwota',
      renderCell: (row) => {
        if (row.mode === 'INCOME')
          return (
            <Box sx={{ color: theme.palette.success.main }}>
              {' '}
              + <Money inCents={row.amountInCents} />
            </Box>
          );
        if (row.mode === 'EXPENSE')
          return (
            <Box sx={{ color: theme.palette.error.main }}>
              {' '}
              - <Money inCents={row.amountInCents} />
            </Box>
          );
      },
    },
  ];
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(LEDGER_QUERY, () =>
    LedgerService.findAll(),
  );

  const mutation = useMutation((ids) => LedgerService.remove({ ids }), {
    onSuccess: async () => {
      await queryClient.refetchQueries([LEDGER_QUERY]);
    },
  });

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

  const deleteRecords = (ids) => mutation.mutate(ids);

  return (
    <Card
      title={
        <ActionHeader
          variant={'h1'}
          title="Portfel"
          renderActions={() => (
            <Box>
              <Button
                startIcon
                variant={'contained'}
                onClick={() => handleOpenModal('INCOME')}
              >
                Wpłac
              </Button>
              <Button
                variant={'contained'}
                onClick={() => handleOpenModal('EXPENSE')}
              >
                <RemoveIcon />
                Wyplac
              </Button>
            </Box>
          )}
        />
      }
    >
      <Table
        rows={data}
        headCells={tableDefinition}
        getUniqueId={(row) => row.id}
        deleteRecords={deleteRecords}
      />
      <AddNewLedgerRecord
        showModal={isOpen}
        handleClose={() => setOpen(false)}
        type={isOpenType}
      />
    </Card>
  );
};
