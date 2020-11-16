import React from 'react';
import classNames from 'classnames';
import './Main.scss';
import MainHeader from './MainHeader/MainHeader';
import MainContent from './MainContent/MainContent';

const Main = () => (
  <section className={
    classNames('main', 'page__main')
  }
  >
    <MainHeader />
    <MainContent />
  </section>
);

export default Main;
