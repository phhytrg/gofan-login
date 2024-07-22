import {
  Enterprise,
  IdManagement,
  Location,
  Person,
  WatsonHealthStatusAcknowledge,
} from '@carbon/icons-react';
import { Column, MenuItemDivider } from '@carbon/react';
import { AccountDto } from '../models';

const AccountItem = ({ account }: { account: AccountDto }) => {
  return (
    <Column
      lg={8}
      md={4}
      sm={4}
      xlg={4}
      className="dashboard__content__account-item"
    >
      <div className="dashboard__content__account-item__header">
        <img
          src={account.avatar}
          alt={account.shortname}
          className="dashboard__content__account-item__header__img"
        />
        <p>{account.department}</p>
      </div>
      <a className="dashboard__content__account-item__edit-btn">Edit</a>
      <MenuItemDivider />
      <div className="dashboard__content__account-item__content">
        <div className="dashboard__content__account-item__content__row">
          <Enterprise />
          <p>{account.department}</p>
        </div>
        <div className="dashboard__content__account-item__content__row">
          <Location />
          <p>{account.location}</p>
        </div>
        <div className="dashboard__content__account-item__content__row">
          <WatsonHealthStatusAcknowledge />
          <p>{account.active ? 'Active' : 'Inactive'}</p>
        </div>
        <div className="dashboard__content__account-item__content__row">
          <IdManagement />
          <p>{account.id}</p>
        </div>
        <div className="dashboard__content__account-item__content__row">
          <Person />
          <p>{account.numberOfContacts} contacts</p>
        </div>
      </div>
    </Column>
  );
};

export default AccountItem;
