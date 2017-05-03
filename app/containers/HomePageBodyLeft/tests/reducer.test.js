
import { fromJS } from 'immutable';
import homePageBodyLeftReducer from '../reducer';

describe('homePageBodyLeftReducer', () => {
  it('returns the initial state', () => {
    expect(homePageBodyLeftReducer(undefined, {})).toEqual(fromJS({}));
  });
});
