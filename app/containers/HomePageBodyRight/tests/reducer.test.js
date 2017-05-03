
import { fromJS } from 'immutable';
import homePageBodyRightReducer from '../reducer';

describe('homePageBodyRightReducer', () => {
  it('returns the initial state', () => {
    expect(homePageBodyRightReducer(undefined, {})).toEqual(fromJS({}));
  });
});
