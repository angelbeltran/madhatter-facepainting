import { createSelector } from 'reselect';

/**
 * Direct selector to the homePageBodyRight state domain
 */
const selectHomePageBodyRightDomain = () => (state) => state.get('homePageBodyRight');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HomePageBodyRight
 */

const makeSelectHomePageBodyRight = () => createSelector(
  selectHomePageBodyRightDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHomePageBodyRight;
export {
  selectHomePageBodyRightDomain,
};
