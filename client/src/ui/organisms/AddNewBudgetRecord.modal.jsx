import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { PropTypes } from 'prop-types';
import { Modal, CategoryField, Loader, Error, NoContent } from 'ui';
import { formatDollarsToCents } from 'utils';
import { PARTIAL_CATEGORIES_QUERY, BUDGET_QUERY, LADGER_QUERY } from 'queryKeys';
import { LedgerService, CategoryService } from 'api';

const transitionKeys ={
  income: 'wpływ',
  expense:'wydatek',
};

export const AddNewBudgetRecord = ({ showModal, onClose, type }) => {
  const queryClient = useQueryClient();

  const { handleSubmit, control, formState, reset } = useForm({
    mode: 'onChange',
  });

  const {isLoading, error,data:categories} = useQuery(PARTIAL_CATEGORIES_QUERY, () => CategoryService.findAll())

  const handleClose = () => { 
    onClose();
  };

  const mutation = useMutation(
    (requestBody)=> LedgerService.create({requestBody}),{
      onSuccess: async () => {
        await queryClient.refetchQueries([LADGER_QUERY]);
        await queryClient.refetchQueries([BUDGET_QUERY]);
        handleClose();
      }
    }
  )
  const onSubmit = async (formData) => {
    if(!formState.isValid) return;
    mutation.mutate({
      title:formData.title,
      amountInCents:formatDollarsToCents(formData.amount),
      mode:type,

    })
  }
  
  return (
    <Modal
      showModal={showModal}
      onClose={handleClose}
      description="Zdefiniuj budet"
    />
  );
};

AddNewBudgetRecord.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string,
};
