const initState = {
  projects: [
    { id: '1', title: 'Loreeeem title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e'},
    { id: '2', title: 'Ipsum project', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e'},
    { id: '3', title: 'Fx rates title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e'},
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer;