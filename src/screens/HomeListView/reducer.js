import {HOME_DATA_UPDATE} from './types';

const INITIAL_STATE = {
  loading: false,
  data: [],
  counter: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOME_DATA_UPDATE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
