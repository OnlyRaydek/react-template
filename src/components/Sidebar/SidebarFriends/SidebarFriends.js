import React from 'react';
import './SidebarFriends.scss';
import friendsList from './friends';

const SidebarFriends = () => (
  <div className="sidebar__friends">
    <div className="sidebar__friends-top">
      <h4 className="sidebar__friends-topic">
        Friends
      </h4>
      <div className="sidebar__setting" />
    </div>
    <div className="sidebar__friends-list">
      {friendsList.map(friend => (
        <div className="sidebar__friend">
          <img
            src={friend.imgUrl}
            alt=""
            className="sidebar__friend-image"
            width="43px"
            height="43px"
          />
          <div className="sidebar__friend-info">
            <p className="sidebar__friend-name">
              {friend.name}
            </p>
            <p className="sidebar__friend-status">
              {friend.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SidebarFriends;
