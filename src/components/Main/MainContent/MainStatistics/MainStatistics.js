import React from 'react';
import classNames from 'classnames';
import './MainStatistics.scss';
import MainStatisticsTable from '../MainStatisticsTable/MainStatisticsTable';
import graph from '../../../../images/profile/grafic.png';
import increase from '../../../../images/settings/increase.png';
import decrease from '../../../../images/settings/decrease.png';
import statisticList from './statisticsList.json';

const MainStatistics = () => (
  <section className={
    classNames('main__statistics', 'statistics')
  }
  >
    <div className="statistics__graph">
      <img src={graph} alt="" className="statistics__image" />
    </div>

    <div className="statistics__information">
      {statisticList.map(item => (
        <div className="statistics__information-item">
          <div className="statistics__data">
            <p className="statistics__data-number">
              {item['data-number']}
            </p>
            <p
              className="statistics__data-name"
              style={{ color: item.color }}
            >
              {item['data-name']}
            </p>
          </div>
          <div className="statistics__progress">
            <img
              src={item['data-state'] === 'Increase'
                ? increase
                : decrease}
              alt=""
              className="statistics__progress-icon"
            />
            <p className="statistics__progress-text">
              {item['data-percent']}
              {' '}
              {item['data-state']}
            </p>
          </div>
        </div>
      ))}
    </div>

    <MainStatisticsTable />

  </section>
);

export default MainStatistics;
