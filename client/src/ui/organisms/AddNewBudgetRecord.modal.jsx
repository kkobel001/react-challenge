import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import { PropTypes } from 'prop-types';
import { Modal, CategoryField, Loader,Error} from 'ui';
import {formatDollarsToCents} from 'utils';
import {PARTIAL_CATEGORIES_QUERY, BUDGET_QUERY} from 'queryKeys';
import { useQueryClient } from 'react-query';



export const AddNewBudgetRecord = ({ showModal, onClose }) => {
  const queryClient=useQueryClient();

  const {handleSubmit, control,formState,reset}= useForm({
    mode: 'onChange',
  });

  const handleClose = () => {
    onClose();
  };

  // const {isLoading, error,data:categories} = useQuery(PARTIAL_CATEGORIES_QUERY, ()=>CategoryServices)

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
