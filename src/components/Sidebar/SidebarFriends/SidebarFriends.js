import React from 'react';
import './SidebarFriends.scss';
import friendOne from '../../../images/friends/friend-1.png';
import friendTwo from '../../../images/friends/friend-2.png';
import friendThree from '../../../images/friends/friend-3.png';
import friendFour from '../../../images/friends/friend-4.png';
import friendFive from '../../../images/friends/friend-5.png';
import friendSix from '../../../images/friends/friend-6.png';

const SidebarFriends = () => (
  <div className="sidebar__friends">
    <div className="sidebar__friend">
      <img
        src={friendOne}
        alt=""
        className="sidebar__friend"
      />
      <img
        src={friendTwo}
        alt=""
        className="sidebar__friend"
      />
      <img
        src={friendThree}
        alt=""
        className="sidebar__friend"
      />
      <img
        src={friendFour}
        alt=""
        className="sidebar__friend"
      />
      <img
        src={friendFive}
        alt=""
        className="sidebar__friend"
      />
      <img
        src={friendSix}
        alt=""
        className="sidebar__friend"
      />
    </div>
  </div>
);

export default SidebarFriends;
