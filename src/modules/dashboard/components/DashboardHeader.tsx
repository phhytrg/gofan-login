import { Header, HeaderContainer, HeaderMenuButton } from '@carbon/react';
import { Close as CloseIcon, Menu as MenuIcon } from '@carbon/icons-react';
import { faker } from '@faker-js/faker';
import { memo, useState } from 'react';

const HeaderUser = memo(
  ({ name, avatar }: { name: string; avatar: string }) => {
    return (
      <div className="header__user" role="button">
        <p className="header__user__name">Hi {name}</p>

        <img src={avatar} alt={name} className="header__user__avatar" />
      </div>
    );
  },
);

const DashboardHeader = () => {
  const [name, setName] = useState(faker.person.firstName());
  const [avatar, setAvatar] = useState(faker.image.avatar());

  return (
    <HeaderContainer
      render={({
        isSideNavExpanded,
        onClickSideNavExpand,
      }: {
        isSideNavExpanded: boolean;
        onClickSideNavExpand: () => void;
      }) => (
        <Header className="header">
          <HeaderMenuButton
            className="header__menu-btn"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
            renderMenuIcon={
              <MenuIcon size={24} className="header__menu-btn__ic" />
            }
            renderCloseIcon={
              <CloseIcon size={24} className="header__menu-btn__ic" />
            }
            
          />
          <p className="header__name">playon HQ</p>
          <HeaderUser name={name} avatar={avatar} />
        </Header>
      )}
    />
  );
};

export default DashboardHeader;
