import { createSelector } from 'reselect';

/**
 * Direct selector to the homePageBody state domain
 */
const selectHomePageBodyDomain = () => (state) => state.get('homePageBody');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HomePageBody
 */

const makeSelectHomePageBody = () => createSelector(
  selectHomePageBodyDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHomePageBody;
export {
  selectHomePageBodyDomain,
};
