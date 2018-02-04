import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoggedInTabs } from '../../components/LoggedInNavigation/index.js';
import { NotLoggedInTabs } from '../../components/NotLoggedInNavigation/index.js';

class Authenticator extends Component {
  render() {
    return (
      this.props.marketList.isLoggedIn ? (
        <LoggedInTabs />
      ) : (
        <NotLoggedInTabs />
      )
    );
  }
}

function mapStateToProps({ marketList }) {
  return { marketList };
}

export default connect(mapStateToProps)(Authenticator);
