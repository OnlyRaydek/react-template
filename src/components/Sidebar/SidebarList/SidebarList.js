import React from 'react';
import './SidebarList.scss';
import navigationList from './navigationList';
import SidebarSearch from '../SidebarSearch/SidebarSearch';

const SidebarList = () => (
  <div className="sidebar__list">
    <h3 className="sidebar__list-topic">Menu</h3>
    <ul>
      {navigationList.map(item => (
        <li className="sidebar__list-item">
          <a
            href="URL"
            className="sidebar__list-link"
            target="_blank"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
    <SidebarSearch />
  </div>
);

export default SidebarList;
