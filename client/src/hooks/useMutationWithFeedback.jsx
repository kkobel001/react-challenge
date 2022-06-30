import { useMutation } from 'react-query';
import { useSnacker } from 'notistack';

export const useMutationWithFeedback = (request, options) => {
  const {
    onSuccess = () => {},
    onError = () => {},
    successMessage = 'Akcja zakonczona sukcesem',
    errorMessage = 'Wystapił nieoczekiwany bład',
    ...rest
  } = options;

  const { enqueueSnackbar } = useSnacker();
  return useMutation(request, {
    onSuccess: async () => {
      enqueueSnackbar(successMessage, { variant: 'success' });
      onSuccess();
    },

    onError: () => {
      enqueueSnackbar(errorMessage, { variant: 'error' });
      onError();
    },
    ...rest,
  });
};
