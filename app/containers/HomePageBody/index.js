/*
 *
 * HomePageBody
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
// import { createStructuredSelector } from 'reselect';
import makeSelectHomePageBody from './selectors';
import messages from './messages';

export class HomePageBody extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className='container'>
        <div className='row'>
          {/* group description */}
          <div className='col-6'>
            <ul>
              <li>
                <ul>
                  <li>Jennifer Bush</li>
                  <li>Cedar City, Southern Utah</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Karen Stephens</li>
                  <li>Cedar City, Southern Utah</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Ciara Beltran</li>
                  <li>Eugene, Oregon</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Contact us at madhatter.facepainting@gmail.com</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* group photos */}
          <div className='col-6'>
          </div>
        </div>
      </div>
    );
  }
}
/*
        <FormattedMessage {...messages.header} />
*/

HomePageBody.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

/*
const mapStateToProps = createStructuredSelector({
  HomePageBody: makeSelectHomePageBody(),
});
*/

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(() => ({}), mapDispatchToProps)(HomePageBody);
