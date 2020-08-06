import { BOOK_List, BOOK_ERROR_List } from '../action/actionType';

export default function(state, action){
    if (typeof state === 'undefined') {
        return 0
    }
    switch(action.type){
        case BOOK_List:
                return  action.payload.data || false;
        case BOOK_ERROR_List:
            return action.payload;
        default:
            return state;
    }
}




