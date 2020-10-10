import Duck from 'extensible-duck';

const AccountDuck = new Duck({
  nameSpace: 'ticket-manager',
  store: 'Data',
  types: ['LOAD_USER'],
  initialState: {},
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.LOAD_USER:
        return {
          ...state,
          'access-validation-id': action.data['access-validation-id'],
          user: action.data.user,
        };
      default: return state;
    }
  },
  selectors: {
    root: (state) => state,
  },
  creators: (duck) => ({
    loadUser: (data) => ({ type: duck.types.LOAD_USER, data }),
  }),
});

export default AccountDuck;
