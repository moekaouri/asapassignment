import {MODEL_DATA_UPDATE} from './types';

const INITIAL_STATE = {
  loading: false,
  data: [],
  searchText: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODEL_DATA_UPDATE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
