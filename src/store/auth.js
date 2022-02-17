export const initialState = {
  isLoading: true,
  isLoggedIn: false,
  token: null,
};

export const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        token: action.token,
        isLoading: false,
      };
    case 'LOG_IN':
      return {
        ...prevState,
        isLoggedIn: true,
        token: action.token,
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        isLoggedIn: false,
        token: null,
      };
    default:
      return prevState;
  }
};
