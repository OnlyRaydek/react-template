import React from 'react';
import classNames from 'classnames';
import './MainHeader.scss';
import personHeader from '../../../images/persons/person-header.png';

const MainHeader = () => (
  <section className={
    classNames('main__header', 'header')
  }
  >
    <h3 className="main__header-topic">Your Profit!</h3>
    <div className="main__person-status">
      <img
        src={personHeader}
        alt=""
        className="main__person-photo"
        width="58px"
        height="58px"
      />
      <div className="main__person-info">
        <p className="main__person-name">
          Jordan J.
        </p>
        <p className="main__person-position">
          Administrator
        </p>
      </div>
    </div>
  </section>
);

export default MainHeader;
