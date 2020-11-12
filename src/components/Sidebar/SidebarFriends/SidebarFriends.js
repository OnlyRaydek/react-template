import React from 'react';
import './SidebarFriends.scss';
import friendsList from './friends';

const SidebarFriends = () => (
  <div className="sidebar__friends">
    {friendsList.map(img => (
      <img
        src={img}
        alt=""
        className="sidebar__friend"
      />
    ))}
  </div>
);

export default SidebarFriends;
