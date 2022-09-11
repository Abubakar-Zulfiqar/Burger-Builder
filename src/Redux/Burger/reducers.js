import {
    LETTUCE_ADD,
    LETTUCE_REMOVE,
    BACON_ADD,
    BACON_REMOVE,
    CHEESE_ADD,
    CHEESE_REMOVE,
    MEAT_ADD,
    MEAT_REMOVE
} from './types'

const initialState = {
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case LETTUCE_ADD:
            return {
                ...state,
                lettuce: state.lettuce + 1
            }
        case LETTUCE_REMOVE:
            return {
                ...state,
                lettuce: state.lettuce === 0 ? 0 : state.lettuce - 1
            }
        case BACON_ADD:
            return {
                ...state,
                bacon: state.bacon + 1
            }
        case BACON_REMOVE:
            return {
                ...state,
                bacon: state.bacon === 0 ? 0 : state.bacon - 1
            }
        case CHEESE_ADD:
            return {
                ...state,
                cheese: state.cheese + 1
            }
        case CHEESE_REMOVE:
            return {
                ...state,
                cheese: state.cheese === 0 ? 0 : state.cheese - 1
            }
        case MEAT_ADD:
            return {
                ...state,
                meat: state.meat + 1
            }
        case MEAT_REMOVE:
            return {
                ...state,
                meat: state.meat === 0 ? 0 : state.meat - 1
            }
        default:
            return state;
    }
}

export default reducer;