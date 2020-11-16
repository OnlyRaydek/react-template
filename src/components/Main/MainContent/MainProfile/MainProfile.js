import React from 'react';
import classNames from 'classnames';
import './MainProfile.scss';
import backgroundImage from '../../../../images/profile/background-picture.jpg';
import profilePicture from '../../../../images/profile/profile-picture.png';

const MainProfile = () => (
  <section className={
    classNames('main__profile', 'profile')
  }
  >
    <div className="profile__user">
      <img src={backgroundImage} alt="" />
      <img src={profilePicture} alt="" />
      <h3>Jordan Jackson</h3>
      <p>Beta Tester | Ultimate User</p>
    </div>
  </section>
);

export default MainProfile;
