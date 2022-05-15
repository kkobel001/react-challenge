import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, TextField } from '@mui/icons-material';
import { Modal, CategoryField, Loader, Error, NoContent } from 'ui';
import { formatDollarsToCents } from 'utils';
import { LedgerService, CategoryService } from 'api';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import {
CATEGORIES_QUERY,
  BUDGET_QUERY,
  LEDGER_QUERY,
} from 'queryKeys';
import PropTypes from 'prop-types';

const transitionKeys = {
  income: 'wpływ',
  expense: 'wydatek',
};

export const AddNewLedgerRecord = ({ showModal, onClose, type }) => {
  const queryClient = useQueryClient();

  const { handleSubmit, control, formState, reset } = useForm({
    mode: 'onChange',
  });

  const {
    isLoading,
    error,
    data: categories,
  } = useQuery(CATEGORIES_QUERY, () => CategoryService.findAll());

  const mutation = useMutation(
    (requestBody) => LedgerService.create({ requestBody }),
    {
      onSuccess: async () => {
        await queryClient.refetchQueries([LEDGER_QUERY]);
        await queryClient.refetchQueries([BUDGET_QUERY]);
        handleClose();
      },
    },
  );
  const onSubmit = async (formData) => {
    if (!formState.isValid) return;
    mutation.mutate({
      title: formData.title,
      amountInCents: formatDollarsToCents(formData.amount),
      mode: type,
    });
  };


    const handleClose = () => {
    onClose();
  };
  return (
    <Modal
      showModal={showModal}
      onClose={handleClose}
      canSubmit={handleSubmit(onSubmit)}
      title={`Dodaj ${transitionKeys[type.toLowerCase()]}`}
    >
    { isLoading && <Loader />}
    { error && <Error error={error} />}
    { !isLoading && !error && !categories?.length ? (
      'Wszystkie kategorie są przypisane do budetu.Aby zredefiniowac usuń jeden z wpisów.' 

    ): (
      <Box component="form" autoComplete='off'>
        <Controller
            name="amount"
            control={control}
            defaultValue=""
            rules={{
              validate:(field) =>{if(!field.toString().trim()){
                return 'Nazwa nie moze byc pusta'
              }}
            }}
            render={({field: { onChange, value }, fieldState: {error} }) => (
                <TextField
                margin={'normal'}
                type="number"
                label="Nazwa"
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
                
                rules={{
                  setValueAs:(value) => value.trim(),
                      required: {
                        value: true,
                        message: 'Kwota nie moze byc pusta',
                      }, 
                       min: {
                        value : 0,
                        message:'Kwota musi byc większa niz 0'
                      },
                      max:{
                        value:1000000,
                        message: ' Kwota nie moze byc wieksza niz 1000000'
                      },
                }}
                render={({field: { onChange, value }, fieldState: {error} }) => (
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
               {type === 'EXPENSE' && (
                 <Controller
                    name='categoryId'
                    control={control}
                    defaultValue=""
                    render={({field:{onChange,value}, fieldState:{error},}) => (
                        <CategoryField
                          margin={'normal'}
                          categories={categories}
                          value={value}
                          onChange={onChange}
                          error={!!error}
                          helperText={error ? error.message : null}
                          />
                    )}
                    rules={{
                      required : {
                        value: true,
                        message:'Wybierz kategorie',
                        },
                      }}
                />
                )}
       </Box>   
      )}  
    </Modal>
  );
};

AddNewLedgerRecord.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string,
};
