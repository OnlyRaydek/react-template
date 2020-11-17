import React from 'react';
import classNames from 'classnames';
import './MainStatistics.scss';
import grafic from '../../../../images/profile/grafic.png';

const MainStatistics = () => (
  <section className={
    classNames('main__statistics', 'statistics')
  }
  >
    <div className="statistics__grafic">
      <img src={grafic} alt="" className="statistics__image" />
    </div>
  </section>
);

export default MainStatistics;
