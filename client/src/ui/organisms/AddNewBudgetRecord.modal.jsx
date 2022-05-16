import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { PropTypes } from 'prop-types';
import { Box, Modal, CategoryField, Loader, Error, NoContent } from 'ui';
import { formatDollarsToCents } from 'utils';
import { PARTIAL_CATEGORIES_QUERY, BUDGET_QUERY } from 'queryKeys';
import { LedgerService, CategoryService } from 'api';
import { TextField } from '@mui/material';

const transitionKeys = {
  income: 'wpływ',
  expense: 'wydatek',
};

export const AddNewBudgetRecord = ({ showModal, onClose, type }) => {
  const queryClient = useQueryClient();

  const { handleSubmit, control, formState, reset } = useForm({
    mode: 'onChange',
  });

  const {
    isLoading,
    error,
    data: categories,
  } = useQuery(PARTIAL_CATEGORIES_QUERY, () => CategoryService.findAll());

  const mutation = useMutation(
    (requestBody) => LedgerService.create({ requestBody }),
    {
      onSuccess: async () => {
        await queryClient.refetchQueries([PARTIAL_CATEGORIES_QUERY]);
        await queryClient.refetchQueries([BUDGET_QUERY]);
        handleClose();
      },
    },
  );
  const onSubmit = async (formData) => {
    mutation.mutate({
      amountInCents: formatDollarsToCents(formData.amount),
      categoryId: formData.categoryId,
    });
    reset();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal
      showModal={showModal}
      onClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
      canSubmit={formState.isValid}
      titile={`Zdefiniuj budet`}
    >
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      {!isLoading && !error && !categories?.length ? (
        'Wszystkie kategorie są przypisane do budetu.Aby zredefiniowac usuń jeden z wpisów.'
      ) : (
        <Box component="form" autoComplete="off">
          <Controller
            name="amount"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: 'Kwota nie moze byc pusta',
              },
              min: {
                value: 0,
                message: 'Kwota musi byc większa niz 0',
              },
              max: {
                value: 1000000,
                message: ' Kwota nie moze byc wieksza niz 1000000',
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                margin={'normal'}
                type="number"
                label="Kwota"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name="amount"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <CategoryField
                margin={'normal'}
                categories={categories}
                value={value}
                onChange={onChange}
                error={!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{
              required: {
                value: true,
                message: 'Wybierz kategorie',
              },
            }}
          />
        </Box>
      )}
    </Modal>
  );
};

AddNewBudgetRecord.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string,
};
