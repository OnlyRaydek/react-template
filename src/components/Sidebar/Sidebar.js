import React from 'react';
import classNames from 'classnames';
import './Sidebar.scss';
import SidebarMembers from './SidebarMembers/SidebarMembers';
import SidebarMenu from './SidebarMenu/SidebarMenu';

const Sidebar = () => (
  <section className={
    classNames('sidebar', 'page__sidebar')
  }
  >
    <SidebarMembers />
    <SidebarMenu />
  </section>
);

export default Sidebar;
