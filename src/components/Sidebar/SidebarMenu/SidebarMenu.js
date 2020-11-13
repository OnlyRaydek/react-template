import React from 'react';
import SidebarList from '../SidebarList/SidebarList';
import SidebarFriends from '../SidebarFriends/SidebarFriends';
import './SidebarMenu.scss';

const SidebarMenu = () => (
  <div className="sidebar__menu">
    <SidebarList />
    <SidebarFriends />
  </div>
);

export default SidebarMenu;
