import React, { Component } from 'react';
import './SidebarMembers.scss';
import membersList from './persons';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

class SidebarMembers extends Component {
  state = {
    menuState: false,
  };

  handleClick = () => {
    this.setState(previousState => ({
      menuState: !previousState.menuState,
    }));
  }

  render() {
    return (
      <>
        <div className="sidebar__main">
          <div className="sidebar__members">
            {membersList.map(img => (
              <div className="sidebar__member">
                <button
                  className="sidebar__button"
                  type="button"
                  onClick={this.handleClick}
                >
                  <img
                    src={img}
                    alt=""
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="sidebar__settings">
            <div className="sidebar__grid" />
            <div className="sidebar__setting" />
          </div>
        </div>
        {this.state.menuState
          ? <SidebarMenu />
          : ''
        }
      </>
    );
  }
}

export default SidebarMembers;
