import React from 'react';
import SidebarFriends from '../SidebarFriends/SidebarFriends';
import './SidebarList.scss';

const navigationList = [
  'Profit',
  'Explore',
  'Profile',
  'Photos',
  'Videos',
  'Invite',
  'Music',
  'Candidates',
  'Calendar',
  'Feedback',
  'Help',
];

const SidebarList = () => (
  <div className="sidebar__list">
    <h3>Menu</h3>
    <ul>
      {navigationList.map(item => (
        <li>{item}</li>
      ))}
    </ul>
    <SidebarFriends />
  </div>
);

export default SidebarList;
