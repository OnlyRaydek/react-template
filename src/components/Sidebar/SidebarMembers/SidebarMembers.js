import React from 'react';
import './SidebarMembers.scss';
import membersList from './persons';

const SidebarMembers = () => (
  <div className="sidebar__members">
    {membersList.map(img => (
      <img
        src={img}
        alt=""
        className="sidebar__member"
      />
    ))}
  </div>
);

export default SidebarMembers;
