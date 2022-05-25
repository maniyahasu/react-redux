const initialState = 10;

const incrementCountReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT_COUNT': return state + 1;
        case 'DECREMENT_COUNT': return state - 1;
        default: return state
    }
}
export default incrementCountReducer;

