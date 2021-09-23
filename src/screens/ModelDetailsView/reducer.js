import {MODEL_DETIALS_DATA_UPDATE} from './types';

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
  comment: '',
  notes: [],
  id: 3
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODEL_DETIALS_DATA_UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
