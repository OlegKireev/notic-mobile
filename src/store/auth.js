export const initialState = {
  isLoading: true,
  isLoggedIn: false,
  userToken: null,
};

export const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOG_IN':
      return {
        ...prevState,
        isLoggedIn: true,
        userToken: action.token,
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        isLoggedIn: false,
        userToken: null,
      };
    default:
      return prevState;
  }
};
