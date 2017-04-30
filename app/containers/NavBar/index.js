/*
 *
 * NavBar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
// import { createStructuredSelector } from 'reselect';
import makeSelectNavBar from './selectors';
// import messages from './messages';

// <FormattedMessage {...messages.header} />

export class NavBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className='container' style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <div className='row justify-content-center'>
          <div className='col-4'>
            <nav className='navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top'>
              <div className='navbar-brand'>
                Madhatter Face Painting
              </div>
              <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>Home <span className='sr-only'>(current)</span></a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>Album</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>Events</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

/*
const mapStateToProps = createStructuredSelector({
  NavBar: makeSelectNavBar(),
});
*/

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default connect(() => ({}), mapDispatchToProps)(NavBar);
