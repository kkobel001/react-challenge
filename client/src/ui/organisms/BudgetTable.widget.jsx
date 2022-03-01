import React from 'react';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {BUDGET_QUERY} from 'queryKeys';
import { BudgetService } from 'api';
import { Loader} from 'ui/atoms/Loader';
import { Error} from 'ui/atoms/Error';
import { NoContent} from 'ui/atoms/NoContent';
import { Money} from 'ui/atoms/Money';
import { LocalizedDate} from 'ui/atoms/LocalizedDate';
import { Table} from 'ui/molecules/table/Table';
import { CategoryCell} from 'ui/molecules/CategoryCell';


export const BudggetTableWidget = () => {

    const queryClient=useQueryClient();
    const { isLoading, isError, data } = useQuery(BUDGET_QUERY, () => BudgetService.findAll(),);


    const mutation = useMutation((ids) => BudgetService.remove({ids}), {
        onSuccess: async () =>  {
            await queryClient.refetchQueries([BUDGET_QUERY]);
        }
    })
    const deleteRecords = (ids) => mutation.mutate(ids)

    const tableDefintion=[];


}






