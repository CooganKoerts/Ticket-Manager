import Duck from 'extensible-duck';

export const ManagerDuck = new Duck({
    nameSpace: 'ticket-manager',
    store: 'Data',
    types: ['LOAD'],
    initialState: {},
    reducer: (state, action, duck) => {
        switch(action.type) {
            default: return state;
        }
    },
    selectors: {
        root: state => state
    },
    creators: (duck) => ({
        loadData: () => ({ type: duck.types.LOAD })
    }),
});

export default ManagerDuck;