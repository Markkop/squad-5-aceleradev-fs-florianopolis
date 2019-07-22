import { ActionTypes } from "../actions";

const INITIAL_STATE = {
  userList: [],
  loading: false,
  error: false
};

function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_ATTEMPT_LOGIN:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.SUCCESS_ATTEMPT_LOGIN:
      return {
        ...state,
        userList: action.payload.userList,
        loading: false,
        error: false
      };
    case ActionTypes.FAILURE_ATTEMPT_LOGIN:
      return {
        ...state,
        userList: [],
        loading: false,
        error: true
      };
    default:
      return state;
  }
}

export default User;
