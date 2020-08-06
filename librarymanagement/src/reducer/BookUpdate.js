import { BOOK_update, BOOK_update_List} from '../action/actionType';

export default function(state, action){
    if (typeof state === 'undefined') {
        return 0
    }
    switch(action.type){
        case BOOK_update:
                return  action.payload.data || false;
        case BOOK_update_List:
            return action.payload;
        default:
            return state;
    }
}