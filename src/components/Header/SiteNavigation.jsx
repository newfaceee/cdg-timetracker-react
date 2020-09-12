import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const SiteNavigation = () => {
  const sections = ["home", "issues", "filter", "projects"];
  const [activeSection, setActiveSection] = React.useState(0);

  const onSectionChange = (i) => {
    console.log("da");
    setActiveSection(i);
  };
  return (
    <nav className="site-navigation">
      <ul className="site-navigation__list">
        {sections.map((section, index) => {
          const isActive = activeSection === index;
          return (
            <li
              onClick={() => {
                onSectionChange(index);
              }}
              key={`${index}_${section}`}
              className={classNames("site-navigation__item", {
                "site-navigation__item--active": isActive,
              })}
            >
              <Link to={`/${section}`} className="site-navigation__link">
                {section}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SiteNavigation;
