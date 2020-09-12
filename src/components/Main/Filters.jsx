import React from "react";
import Calendar from "./Calendar";
const Filters = () => {
  return (
    <section className="filters">
      <div className="filters__container">
        <Calendar />
        <div className="filters__categories">
          <div className="filters__btn filters__btn--all filters__btn--active">
            All
          </div>
          <div className="filters__btn filters__btn--favorites">Favorites</div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
