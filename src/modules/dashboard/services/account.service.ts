import { AccountDto } from '../models';
import { accountRepo } from '../repositories';

export const accountService = {
  getAccountsPerGroups: async (): Promise<{ [key: string]: AccountDto[] }> => {
    const accounts = await accountRepo.getAccounts();

    // Groups accounts by department
    return accounts.reduce((acc, account) => {
      if (!acc[account.department]) {
        acc[account.department] = [];
      }
      acc[account.department].push(account);
      return acc;
    }, {} as { [key: string]: AccountDto[] });
  },

  getAccounts: async () => {
    return await accountRepo.getAccounts();
  },
};
