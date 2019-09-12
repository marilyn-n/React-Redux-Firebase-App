const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
        console.error('you are NOT in!')
      return {
        ...state,
        authError: 'Incorrect username or password.'
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
    default:
      return state;
  }
}

export default authReducer;