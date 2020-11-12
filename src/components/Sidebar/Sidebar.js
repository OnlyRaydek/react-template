import React from 'react';
import classNames from 'classnames';
import './Sidebar.scss';
import SidebarMembers from './SidebarMembers/SidebarMembers';
import SidebarList from './SidebarList/SidebarList';

const Sidebar = () => (
  <section className={
    classNames('sidebar', 'page__sidebar')
  }
  >
    <SidebarMembers />
    <SidebarList />
  </section>
);

export default Sidebar;
