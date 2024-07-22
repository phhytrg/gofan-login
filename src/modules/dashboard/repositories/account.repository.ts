import axiosInstance from '../../../axios-config';
import { AccountDto } from '../models';

export const accountRepo = {
  getAccounts: async (): Promise<AccountDto[]> => {
    return (await axiosInstance.get('/accounts')).data;
  },
};
