import React from 'react';
import classNames from 'classnames';
import './MainContent.scss';
import MainProfile from './MainProfile/MainProfile';
import MainStatistics from './MainStatistics/MainStatistics';

const MainContent = () => (
  <section className={
    classNames('main__content', 'content')
  }
  >
    <MainStatistics />
    <MainProfile />
  </section>
);

export default MainContent;
