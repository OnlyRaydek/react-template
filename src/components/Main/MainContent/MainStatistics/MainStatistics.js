import React from 'react';
import classNames from 'classnames';
import './MainStatistics.scss';
import grafic from '../../../../images/profile/grafic.png';

const MainStatistics = () => (
  <section className={
    classNames('main__statistics', 'statistics')
  }
  >
    <div>
      <img src={grafic} alt="" />
    </div>
  </section>
);

export default MainStatistics;
