import {GET_List,ERROR_List,BOOK_List,BOOK_ERROR_List,BOOK_update,BOOK_update_List} from './actionType'
import axios from 'axios';

export const listOfLibrary = () => {
    let config = "", url = '';

    url = `http://localhost:8080/getLibrary`

    return function (dispatch) {
        axios.get(url, config)

            .then(res => dispatch({
                type: GET_List,
                payload: res
            }))
            .catch(error => dispatch({
                type: ERROR_List,
                payload: error
            }))
    }


}


export const listOfBooks = (lib_id) => {
    let config = "", url = '';

    url = `http://localhost:8080/getBooks/${lib_id}`

    return function (dispatch) {
        axios.get(url, config)

            .then(res => dispatch({
                type: BOOK_List,
                payload: res
            }))
            .catch(error => dispatch({
                type: BOOK_ERROR_List,
                payload: error
            }))
    }
}


export const updateBook = (data) => {
    let config = "", url = '';

    url = `http://localhost:8080/updateBooks`

    return function (dispatch) {
        axios.put(url,data, config)

            .then(res => dispatch({
                type: BOOK_update,
                payload: res
            }))
            .catch(error => dispatch({
                type: BOOK_update_List,
                payload: error
            }))
    }
}


