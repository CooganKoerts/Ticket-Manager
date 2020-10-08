import Duck from 'extensible-duck';

export const ManagerDuck = new Duck({
    nameSpace: 'ticket-manager',
    store: 'Data',
    types: ['LOAD_USER'],
    initialState: {},
    reducer: (state, action, { types }) => {
        console.log(action);
        switch(action.type) {
            case types.LOAD_USER: 
                console.log('LOAD_USER');
                return {
                    ...state,
                    user: action.user    
                }
            default: return state;
        }
    },
    selectors: {
        root: state => state
    },
    creators: (duck) => ({
        loadUser: (user) => ({ type: duck.types.LOAD_USER, user: user })
    }),
});

export default ManagerDuck;