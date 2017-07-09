import {
    LOAD_USERS
} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case LOAD_USERS: 
            return { ...state, message: action.payload };
    }

    return state;
}