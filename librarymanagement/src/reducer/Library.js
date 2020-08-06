import { GET_List, ERROR_List } from '../action/actionType';

export default function(state, action){
    if (typeof state === 'undefined') {
        return 0
    }
    switch(action.type){
        case GET_List:
                return  action.payload.data || false;
        case ERROR_List:
            return action.payload;
        default:
            return state;
    }
}
