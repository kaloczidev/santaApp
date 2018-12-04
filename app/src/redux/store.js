import {createStore} from 'redux';


const initState = {
  items: {},
};

export const ACTIONS = {
  UPDATE: 'UPDATE',
};

const reducer = (state = initState, action) => {
  console.log('brekk', action);
  switch (action.type) {
    case ACTIONS.UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export default createStore(reducer);
