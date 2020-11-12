import React from 'react';
import './Sidebar.scss';
import SidebarMembers from './SidebarMembers/SidebarMembers';
import SidebarList from './SidebarList/SidebarList';

const Sidebar = () => (
  <>
    <SidebarMembers />
    <SidebarList />
  </>
);

export default Sidebar;
