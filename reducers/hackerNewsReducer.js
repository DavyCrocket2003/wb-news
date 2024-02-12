import axios from "axios"
import { useDispatch } from "react-redux"


const initialState = {
    loading: false,
    articles: []
}

export const requestArticles = async (dispatch) => {


    dispatch({type: 'PENDING'})
    let articles = await axios.get('/api/hacker-news')
    dispatch({ type: 'REQUEST_ARTICLES', payload: articles})
}


export default function hackerNewsReducer(state = initialState, action) {

    switch(action.type) {

        case 'PENDING':
            // Stuff for pending
            return {...state, loading: true}

        case 'REQUEST_ARTICLES':
            // Stuff for request articles
            return {
                loading: false,
                articles: action.payload
            }


        default:
            return state


    }
}









