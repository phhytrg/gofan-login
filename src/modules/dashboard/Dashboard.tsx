import DashboardHeader from './components/DashboardHeader';
import AccountItem from './components/AccountItem';
import { Column, Content, Grid, IconButton } from '@carbon/react';
import {
  Grid as GridIcon,
  ListBoxes,
  Search,
  SettingsAdjust,
} from '@carbon/icons-react';
import { ReactNode, useState } from 'react';
import { useGetAccounts } from './hooks';
import { AccountDto } from './models';
import SkeletonAccountItem from './components/SkeletonAccountItem';
import './Dashboard.scss';

const AccountsGroup = ({
  name,
  children,
}: {
  name: string;
  children?: ReactNode;
}) => {
  return (
    <>
      <div className="dashboard__content__accounts-group-heading">
        <p>{name}</p>
      </div>
      <Grid className="dashboard__content__accounts-group-content">
        {children}
      </Grid>
    </>
  );
};

const Dashboard = () => {
  const [viewMode, setViewMode] = useState<'group' | 'all'>('group');
  const {
    data: accounts,
    isLoading,
    isFetching,
  } = useGetAccounts({ viewMode });

  return (
    <div className="dashboard">
      <DashboardHeader />
      <Content>
        <div className="dashboard__content__header">
          <h3 className="">Accounts</h3>
          <div className="dashboard__content__header__btn-group">
            <IconButton label={'Search'} kind="ghost" size="sm">
              <Search />
            </IconButton>
            <IconButton label={'Settings Adjust'} kind="ghost" size="sm">
              <SettingsAdjust />
            </IconButton>
            <IconButton
              label={'Group View'}
              size="sm"
              kind={viewMode === 'group' ? 'secondary' : 'ghost'}
              onClick={() => {
                setViewMode('group');
              }}
            >
              <ListBoxes />
            </IconButton>
            <IconButton
              label={'View All'}
              kind={viewMode === 'all' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => {
                setViewMode('all');
              }}
            >
              <GridIcon />
            </IconButton>
          </div>
        </div>
        {!accounts || isLoading || isFetching ? (
          <AccountsGroup name="Account Group">
            {Array.from({ length: 3 }).map(() => (
              <SkeletonAccountItem />
            ))}
          </AccountsGroup>
        ) : (
          <>
            {viewMode === 'all' ? (
              <AccountsGroup name="All accounts">
                {accounts.length === 0 && (
                  <Column span={'100%'}>No account found</Column>
                )}
                {(accounts as AccountDto[])?.map((account) => (
                  <AccountItem key={account.id} account={account} />
                ))}
              </AccountsGroup>
            ) : (
              <>
                {Object.keys(accounts).length === 0 && (
                  <Column span={'100%'}>No account found</Column>
                )}
                {Object.entries(
                  accounts as { [key: string]: AccountDto[] },
                )?.map(([department, accounts]) => (
                  <AccountsGroup key={department} name={department}>
                    {accounts?.map((account) => (
                      <AccountItem key={account.id} account={account} />
                    ))}
                  </AccountsGroup>
                ))}
              </>
            )}
          </>
        )}
      </Content>
    </div>
  );
};

export default Dashboard;
