
import { fromJS } from 'immutable';
import homePageBodyReducer from '../reducer';

describe('homePageBodyReducer', () => {
  it('returns the initial state', () => {
    expect(homePageBodyReducer(undefined, {})).toEqual(fromJS({}));
  });
});
