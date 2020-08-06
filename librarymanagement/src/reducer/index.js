import { combineReducers } from 'redux';

import Library from './Library';
import Books from './Books';
import BookUpdate from './BookUpdate';

const rootReducer = combineReducers({
    // form: formReducer,
    Library:Library,
    Books:Books,
    BookUpdate:BookUpdate
});

export default rootReducer;