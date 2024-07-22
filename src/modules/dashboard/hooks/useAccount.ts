import { useQuery } from 'react-query';
import { accountService } from '../services';
import { ACCOUNTS } from '../constants';
import { AccountDto } from '../models';

export const useGetAccounts = ({ viewMode }: { viewMode: 'group' | 'all' }) => {
  return useQuery<AccountDto[] | { [key: string]: AccountDto[] }>(
    [ACCOUNTS, viewMode],
    {
      queryFn: async () => {
        if (viewMode === 'group') {
          return accountService.getAccountsPerGroups();
        }
        return accountService.getAccounts();
      },
    },
  );
};
