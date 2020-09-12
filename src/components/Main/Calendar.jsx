import React from "react";
import { CalendarIcon } from "../../icons";
const Calendar = () => {
  return (
    <div className="filters__btn filters__btn--calendar">
      10 June 2020
      <span>
        <CalendarIcon />
        {/* <object
          type="image/svg+xml"
          data="./icons/calendar.svg"
          className=""
        ></object> */}
      </span>
      <div className="calendar hidden filters__btn--modal">
        <div className="calendar__container">
          <table className="calendar__table">
            <thead className="calendar__header">
              <tr className="calendar__row">
                <th>June</th>
              </tr>
            </thead>
            <tbody className="calendar__body">
              <tr className="calendar__row">
                <td className="calendar__cell calendar__week-day">S</td>
                <td className="calendar__cell calendar__week-day">M</td>
                <td className="calendar__cell calendar__week-day">T</td>
                <td className="calendar__cell calendar__week-day">W</td>
                <td className="calendar__cell calendar__week-day">T</td>
                <td className="calendar__cell calendar__week-day">F</td>
                <td className="calendar__cell calendar__week-day">S</td>
              </tr>
              <tr className="calendar__row">
                <td className="calendar__cell">
                  29 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  30 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  31 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  1 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  2 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  3 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  4 <span className="calendar__progress-bar"> </span>
                </td>
              </tr>
              <tr className="calendar__row">
                <td className="calendar__cell">
                  29 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  30 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  31 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  1 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  2 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  3 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  4 <span className="calendar__progress-bar"> </span>
                </td>
              </tr>
              <tr className="calendar__row">
                <td className="calendar__cell">
                  29 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  30 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  31 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  1 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  2 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  3 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  4 <span className="calendar__progress-bar"> </span>
                </td>
              </tr>
              <tr className="calendar__row">
                <td className="calendar__cell">
                  29 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  30 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell calendar__cell--today">
                  31 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  1 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  2 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  3 <span className="calendar__progress-bar"> </span>
                </td>

                <td className="calendar__cell">
                  4 <span className="calendar__progress-bar"> </span>
                </td>
              </tr>
            </tbody>
            <tfoot className="calendar__legend legend">
              <tr className="legend__row">
                <td className="legend__cell">
                  <span className="calendar__progress-bar calendar__progress-bar--done"></span>
                  Done
                </td>
                <td className="legend__cell">
                  <span className="calendar__progress-bar calendar__progress-bar--in-progress"></span>
                  In progress
                </td>
                <td className="legend__cell">
                  <span className="calendar__progress-bar calendar__progress-bar--missed"></span>
                  Missed
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
