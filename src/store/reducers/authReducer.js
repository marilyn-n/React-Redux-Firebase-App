const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
        console.error('you are NOT in!')
      return {
        ...state,
        authError: action.err
      }
    case 'LOGIN_SUCCESS':
      console.log('loged in!')
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('loged out!');
      return state;
    case 'SIGNUP_SUCCESS':
      console.log('signup success!!');
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('signup error');
      console.log(action.error);
      
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
}

export default authReducer;