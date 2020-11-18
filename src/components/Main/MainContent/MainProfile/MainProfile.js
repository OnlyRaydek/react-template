import React from 'react';
import classNames from 'classnames';
import './MainProfile.scss';
import pencil from '../../../../images/settings/pencil.svg';
import profilePicture from '../../../../images/profile/profile-picture.png';

const MainProfile = () => (
  <section className={
    classNames('main__profile', 'profile')
  }
  >
    <div className="profile__top">
      <div className="profile__wrapper">
        <div>
          <img className="profile__picture" src={profilePicture} alt="" />
        </div>
        <h3 className="profile__name">Jordan Jackson</h3>
        <p className="profile__status">Beta Tester | Ultimate User</p>
        <div className="profile__pencil">
          <img src={pencil} alt="" />
        </div>

        <div className="profile__info">
          <div className="profile__info-item">
            <h4>Email</h4>
            <p className="profile__contact">jordan.jackson@dashboard.com</p>
          </div>

          <div className="profile__info-item">
            <h4>Mobile</h4>
            <p className="profile__contact">+44 (0) 7887 665 588</p>
          </div>

          <div className="profile__info-item">
            <h4>Skill Level</h4>
            <p className="profile__contact">Senior (50K+)</p>
          </div>

          <div className="profile__info-item">
            <h4>Skill Level</h4>
            <div className="profile__money">
              <div className="profile__money-bar" />
              <p className="profile__money-limit">
                <span>$580</span>
                /$750
              </p>
            </div>
          </div>

          <div className="profile__info-item">
            <h4>Skill Level</h4>
            <p className="profile__biography">
              Jordan graduated from Cornell University
              in 2004 with a Bachelor degree in computer
              science and a specialization in mathematics.
              While there, he published two articles on Code-project.
            </p>
          </div>

          <div className="profile__info-item">
            <h4>Skill</h4>
            <ul className="profile__skills">
              <li className="profile__skill">
                Photography
              </li>
              <li className="profile__skill">
                Teacher
              </li>
              <li className="profile__skill">
                Traveller
              </li>
              <li className="profile__skill">
                IOS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="profile__bottom">
      <h4 className="profile__bottom-topic">Upcoming Events with Jordan</h4>
      <div className="profile__bottom-item">
        <p>Super Photography 2016</p>
        <p className={
          classNames('profile__bottom-category',
            'profile__bottom-category--dark-blue')
        }
        >
          Photography
        </p>
      </div>
      <date className="profile__bottom-date">
        January 13th, Vienna - 6:30 PM
      </date>
      <div className="profile__bottom-item">
        <p>Photo Expo</p>
        <p className={
          classNames('profile__bottom-category',
            'profile__bottom-category--coral')
        }
        >
          Design
        </p>
      </div>
      <date className="profile__bottom-date">
        March 28th, Paris - 7:30 PM
      </date>
    </div>
  </section>
);

export default MainProfile;
