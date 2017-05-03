/*
 *
 * HomePageBodyRight
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
// import { createStructuredSelector } from 'reselect';
// import makeSelectHomePageBodyRight from './selectors';
// import messages from './messages';
import * as img1 from './img/mad_hatter_1.jpg'
import * as img2 from './img/mad_hatter_2.jpg'
import * as img3 from './img/mad_hatter_3.jpg'
import * as img4 from './img/mad_hatter_4.jpg'

console.log('URL:', img1)
console.log('URL:', img2)
console.log('URL:', img3)
console.log('URL:', img4)

export class HomePageBodyRight extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className='container embed-responsive-1by1 rounded'>
        <div className='row no-gutters'>
          <div className='col-6'>
            <div className='embed-responsive-1by1'>
              <img src={img1} className="img-fluid"/>
            </div>
          </div>
          <div className='col-6'>
            <div className='embed-responsive-1by1'>
              <img src={img2} className="img-fluid"/>
            </div>
          </div>
          <div className='col-6'>
            <div className='embed-responsive-1by1'>
              <img src={img3} className="img-fluid"/>
            </div>
          </div>
          <div className='col-6'>
            <div className='embed-responsive-1by1'>
              <img src={img4} className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/*
        <FormattedMessage {...messages.header} />
*/

HomePageBodyRight.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

/*
const mapStateToProps = createStructuredSelector({
  HomePageBodyRight: makeSelectHomePageBodyRight(),
});
*/

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(() => ({}), mapDispatchToProps)(HomePageBodyRight);
