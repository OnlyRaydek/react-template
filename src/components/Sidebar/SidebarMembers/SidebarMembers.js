import React from 'react';
import './SidebarMembers.scss';
import personOne from '../../../images/persons/person-1.png';
import personTwo from '../../../images/persons/person-2.png';
import personThree from '../../../images/persons/person-3.png';
import personFour from '../../../images/persons/person-4.png';
import personFive from '../../../images/persons/person-5.png';

const SidebarMembers = () => (
  <div className="sidebar__members">
    <div className="sidebar__images">
      <img
        src={personOne}
        alt=""
        className="sidebar__image"
      />
      <img
        src={personTwo}
        alt=""
        className="sidebar__image"
      />
      <img
        src={personThree}
        alt=""
        className="sidebar__image"
      />
      <img
        src={personFour}
        alt=""
        className="sidebar__image"
      />
      <img
        src={personFive}
        alt=""
        className="sidebar__image"
      />
    </div>
  </div>
);

export default SidebarMembers;
