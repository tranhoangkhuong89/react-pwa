import { persistentReducer } from 'redux-pouchdb';

const schedule = (state = [], action) => {
  switch (action.type) {
    case "ADD_SCHEDULE":
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};

export default persistentReducer(schedule);
