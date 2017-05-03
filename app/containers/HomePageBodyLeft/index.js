/*
 *
 * HomePageBodyLeft
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
// import { createStructuredSelector } from 'reselect';
// import makeSelectHomePageBodyLeft from './selectors';
// import messages from './messages';

export class HomePageBodyLeft extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
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
    );
  }
}
/*
        <FormattedMessage {...messages.header} />
*/

HomePageBodyLeft.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

/*
const mapStateToProps = createStructuredSelector({
  HomePageBodyLeft: makeSelectHomePageBodyLeft(),
});
*/

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(() => ({}), mapDispatchToProps)(HomePageBodyLeft);
