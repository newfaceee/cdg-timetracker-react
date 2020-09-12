import React from "react";
import profileAvatar from "../../assets/img/avatar.jfif";
import { SettingsIcon, InfoIcon, LogoutIcon } from "../../icons";

const UserNavigation = () => {
  return (
    <div className="user-navigation">
      <ul className="user-navigation__list">
        <li className="user-navigation__item">
          <a href="#" className="user-navigation__link">
            <span className="visually-hidden">Settings</span>
            <SettingsIcon className="user-navigation__link--icon user-navigation__link--settings-icon" />
          </a>
        </li>
        <li className="user-navigation__item">
          <a href="#" className="user-navigation__link">
            <span className="visually-hidden">Info</span>
            <InfoIcon className="user-navigation__link--icon user-navigation__link--info-icon" />
          </a>
        </li>
        <li className="user-navigation__item">
          <a href="#" className="user-navigation__link">
            <span className="visually-hidden">Logout</span>
            <LogoutIcon className="user-navigation__link--icon user-navigation__link--logout-icon" />
          </a>
        </li>
        <li className="user-navigation__item">
          <a
            href="#"
            className="user-navigation__link user-navigation__link--profile"
          >
            <span className="visually-hidden">Profile</span>
            <img
              width="46"
              height="46"
              className="user-navigation__link--profile-icon"
              src={profileAvatar}
              alt="profile avatar"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserNavigation;
