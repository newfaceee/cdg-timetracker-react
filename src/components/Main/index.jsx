import React from "react";
import {
  StartIcon,
  MoreHorizontalIcon,
  CalendarIcon,
  UploadIcon,
} from "../../icons";
import Filters from "./Filters";

const Main = () => {
  return (
    <main className="main">
      <div className="main__wrapper">
        <div className="main__left-side">
          <section className="worklog">
            <div className="worklog__container">
              <Filters />
              <div className="worklog__item">
                <div className="worklog__header">
                  <p className="worklog__date">
                    <span className="worklog__weekday">Wed</span>, June 10
                  </p>
                  <div className="worklog__details">
                    <div className="worklog__info">
                      <p className="worklog__total-time">06:05:00</p>
                      <div className="worklog__progress-bar bar">
                        <div className="bar__done"></div>
                      </div>
                    </div>
                    <button className="worklog__upload-btn worklog__btn">
                      <span>
                        <UploadIcon />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="worklog__schedule event">
                  <ul className="event__list">
                    <li className="event__item">
                      <div className="event__wrapper">
                        <div className="event__timing">
                          <span className="event__start"> 09:00 </span>-
                          <span className="event__end"> 10:00 </span>
                        </div>
                        <div className="event__status"></div>
                        <div className="event__details">
                          <div className="event__info">
                            <p className="event__id">JRM-310</p>
                            <p className="event__name">Team standup</p>
                          </div>
                          <div className="event__details--right">
                            <div className="event__bar"></div>
                            <p className="event__duration">01:00:00</p>
                            <button className="event__timer-start-btn worklog__btn">
                              <StartIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="event__menu menu">
                        <button className="menu__more-btn menu__more-btn--horizontal">
                          <MoreHorizontalIcon className="menu__more-icon" />
                          {/* <svg
                            className=""
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.16699 15.5833C9.16699 14.5708 9.9878 13.75 11.0003 13.75C12.0128 13.75 12.8337 14.5708 12.8337 15.5833C12.8337 16.5959 12.0128 17.4167 11.0003 17.4167C9.9878 17.4167 9.16699 16.5959 9.16699 15.5833Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.16699 5.49999C9.16699 4.48747 9.9878 3.66666 11.0003 3.66666C12.0128 3.66666 12.8337 4.48747 12.8337 5.49999C12.8337 6.51251 12.0128 7.33332 11.0003 7.33332C9.9878 7.33332 9.16699 6.51251 9.16699 5.49999Z"
                              fill="white"
                            />
                          </svg> */}
                        </button>
                        <ul className="menu__list">
                          <li className="menu__item">Jira Link</li>
                          <li className="menu__item">Jira Link</li>
                          <li className="menu__item">Jira Link</li>
                          <li className="menu__item">Jira Link</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <section className="worklog__timebar timebar">
                    <div className="timebar__timeline"></div>
                    <ul className="timebar__timing-list">
                      <li className="timebar__item">07:00</li>
                      <li className="timebar__item">08:00</li>
                      <li className="timebar__item">09:00</li>
                      <li className="timebar__item">10:00</li>
                      <li className="timebar__item">11:00</li>
                      <li className="timebar__item">12:00</li>
                      <li className="timebar__item">13:00</li>
                      <li className="timebar__item">14:00</li>
                      <li className="timebar__item">15:00</li>
                      <li className="timebar__item">16:00</li>
                      <li className="timebar__item">17:00</li>
                      <li className="timebar__item">18:00</li>
                      <li className="timebar__item">19:00</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="main__right-side">
          <section className="timer main__item">
            <div className="timer__header">
              <p className="timer__caption main__header">Time tracking</p>
              <div className="timer__menu menu">
                <button className="menu__more-btn"></button>
                <ul className="menu__list">
                  <li className="menu__item">Jira Link</li>
                  <li className="menu__item">Jira Link</li>
                  <li className="menu__item">Jira Link</li>
                  <li className="menu__item">Jira Link</li>
                </ul>
              </div>
            </div>
            <div className="timer__new-worklog">
              <button className="timer__btn"></button>
              <p className="timer__description">New Worklog</p>
            </div>
            <div className="timer__current-event current-event">
              <div className="current-event__container">
                <p className="current-event__title">Meeting with QA</p>
                <button className="current-event__add-issue-btn">
                  Add issue
                </button>
                <p className="current-event__timer">1:15:00</p>
                <div className="current-event__controls">
                  <button className="current-event__btn current-event__btn--stop"></button>
                  <button className="current-event__btn current-event__btn--pause"></button>
                </div>
              </div>
            </div>
          </section>
          <section className="sync main__item">
            <div className="sync__header">
              <div className="sync__caption main__header">
                Google calendar sync
              </div>
              <label className="sync__btn">
                <input className="sync__btn--input" type="checkbox" />
                <span className="sync__btn--checkmark"></span>
                <span className="sync__btn--pointer"></span>
              </label>
              <div className="sync__calendar">
                <CalendarIcon className="sync__calendar--icon" />
                {/* <object
                  type="image/svg+xml"
                  data="./icons/calendar.svg"
                  className=""
                ></object> */}
              </div>
            </div>

            <div className="sync__events">
              <ul className="sync__list">
                <li className="sync__item">
                  <p className="sync__item--text sync__item--title">
                    Logo redesign
                  </p>
                  <p className="sync__item--text sync__item--timing">
                    09:00 - 10:00
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Main;
