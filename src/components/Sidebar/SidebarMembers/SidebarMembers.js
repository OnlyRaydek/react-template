import React from 'react';
import './SidebarMembers.scss';
import membersList from './persons';

const SidebarMembers = () => (
  <div className="sidebar__main">
    <div className="sidebar__members">
      {membersList.map(img => (
        <img
          src={img}
          alt=""
          className="sidebar__member"
        />
      ))}
    </div>
    <div className="sidebar__settings">
      <div className="sidebar__grid" />
      <div className="sidebar__setting" />
    </div>
  </div>
);

export default SidebarMembers;
