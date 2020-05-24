export const SET_USER_INFO = "SET_USER_INFO";

const setUserInfo = (userData) => {
  return {
    type: SET_USER_INFO,
    payload: {
      userData,
    },
  };
};

export default setUserInfo;
