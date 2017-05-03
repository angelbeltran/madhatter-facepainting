/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import NavBar from '../NavBar';
import HomePageBodyLeft from '../HomePageBodyLeft';
import HomePageBodyRight from '../HomePageBodyRight';
import * as placeHolderImg from '../../img/placeholder_600x400.svg'

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const images = []
    for (let i = 0; i < 9; i++) {
      images.push(placeHolderImg)
    }

    return (
      <div style={{ backgroundColor: '#f7f7f7' }}>
        <NavBar/>
        <div className='container' style={{ paddingTop: '70px', paddingBottom: '30px' }}>
          {/* Intro and profile pictures */}
          <div className='row'>
            <div className='col-6'>
              <HomePageBodyLeft/>
            </div>
            <div className='col-6'>
              <HomePageBodyRight/>
            </div>
          </div>
        </div>

        <div className='container' style={{ paddingTop: '30px' }}>
          {/* Album */}
          <div className='row no-gutters'>
            {images.map((img, index) =>
              <div key={'' + img + index} className='col-4'>
                <div className='embed-responsive-1by1 card border-0'>
                  <div className='card-block'>
                    <img src={img} className='img-fluid'/>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
/*
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
*/
