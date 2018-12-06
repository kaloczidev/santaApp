import {createStore} from 'redux';


const initState = {
  gifts: []
};

export const ACTIONS = {
  UPDATE: 'UPDATE',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export default createStore(reducer);
