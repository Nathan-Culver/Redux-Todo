import { UPDATE_TITLE } from '../actions';

const initialState = {
    title: 'Redux Todos'
};

function titleReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TITLE:
            return {
                ...state,
                title: action.payload
            };
        default:
            return state;
    }
}

export default titleReducer;