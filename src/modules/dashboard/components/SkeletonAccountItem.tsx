import {
  Enterprise,
  WatsonHealthStatusAcknowledge,
  IdManagement,
  Person,
  Location,
} from '@carbon/icons-react';
import {
  Column,
  MenuItemDivider,
  SkeletonPlaceholder,
  SkeletonText,
} from '@carbon/react';

const SkeletonAccountItem = () => {
  return (
    <Column
      lg={8}
      md={4}
      sm={4}
      xlg={4}
      className="dashboard__content__account-item"
    >
      <div className="dashboard__content__account-item__header">
        <SkeletonPlaceholder className="dashboard__content__account-item__header__img" />
        <SkeletonText />
      </div>
      <MenuItemDivider />
      <div className="dashboard__content__account-item__content">
        <div className="dashboard__content__account-item__content__row">
          <Enterprise />
          <SkeletonText />
        </div>
        <div className="dashboard__content__account-item__content__row">
          <Location />
          <SkeletonText />
        </div>
        <div className="dashboard__content__account-item__content__row">
          <WatsonHealthStatusAcknowledge />
          <SkeletonText />
        </div>
        <div className="dashboard__content__account-item__content__row">
          <IdManagement />
          <SkeletonText />
        </div>
        <div className="dashboard__content__account-item__content__row">
          <Person />
          <SkeletonText />
        </div>
      </div>
    </Column>
  );
};

export default SkeletonAccountItem;
