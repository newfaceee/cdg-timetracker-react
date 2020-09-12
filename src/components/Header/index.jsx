import React from "react";
import SiteNavigation from "./SiteNavigation";
import UserNavigation from "./UserNavigation";

const Header = () => {
  return (
    <header className="page-header">
      <div className="page-header__container">
        <SiteNavigation />
        <UserNavigation />
      </div>
    </header>
  );
};

export default Header;
