import { createSelector } from 'reselect';

/**
 * Direct selector to the homePageBodyLeft state domain
 */
const selectHomePageBodyLeftDomain = () => (state) => state.get('homePageBodyLeft');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HomePageBodyLeft
 */

const makeSelectHomePageBodyLeft = () => createSelector(
  selectHomePageBodyLeftDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHomePageBodyLeft;
export {
  selectHomePageBodyLeftDomain,
};
