import {EDIT_DATA_UPDATE} from './types';

const INITIAL_STATE = {
  loading: false,
  data: [],
  title: '',
  image: '',
  model: '',
  modelName: '',
  modelType: '',
  cost: '',
  category: '',
  description: '',
  notes: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_DATA_UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
