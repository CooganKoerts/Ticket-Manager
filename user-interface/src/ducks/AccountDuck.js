import Duck from 'extensible-duck';

const AccountDuck = new Duck({
  nameSpace: 'ticket-manager',
  store: 'Account',
  types: ['LOAD_USER'],
  initialState: {
    isUserLoggedIn: false,
  },
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.LOAD_USER:
        return {
          ...state,
          user: action.user,
          myProjects: action.myProjects,
          isUserLoggedIn: true,
        };
      default: return state;
    }
  },
  selectors: {
    root: (state) => state,
  },
  creators: (duck) => ({
    loadUser: (user, myProjects) => ({ type: duck.types.LOAD_USER, user, myProjects }),
  }),
});

export default AccountDuck;
