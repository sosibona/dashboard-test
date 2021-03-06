import { SET_USER_INFO } from "./user.actions";

const initialState = {
  userData: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      return {
        ...state,
        userData: action.payload.userData,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
