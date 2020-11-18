import React from 'react';
import classNames from 'classnames';
import './Sidebar.scss';
import SidebarMembers from './SidebarMembers/SidebarMembers';

const Sidebar = () => (
  <section className={
    classNames('sidebar', 'page__sidebar')
  }
  >
    <SidebarMembers />
  </section>
);

export default Sidebar;
