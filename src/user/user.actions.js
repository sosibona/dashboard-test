export const GET_USER_INFO = "GET_USER_INFO";

const getUserInfo = (userData) => {
  return {
    type: GET_USER_INFO,
    payload: {
      userData,
    },
  };
};

export default getUserInfo;
