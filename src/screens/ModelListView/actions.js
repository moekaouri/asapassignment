import { MODEL_DATA_UPDATE } from "./types";
import axios from 'axios';

export const changeData = (object) => {
    return async (dispatch) => {
        dispatch({
            type: MODEL_DATA_UPDATE,
            payload: object
        })
    }
}

export const loadData = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: MODEL_DATA_UPDATE,
                payload: {
                    loading: true
                }
            })

            const res = await axios.get('http://localhost:3000/model')

            dispatch({
                type: MODEL_DATA_UPDATE,
                payload: {
                    data: res.data,
                    loading: false
                }
            })
        } catch(e) {
            console.log('Error in loading home data');
        }
    }
}

export const searchData = (object) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: MODEL_DATA_UPDATE,
                payload: {
                    loading: true,
                    payload: object
                }
            })

            const res = await axios.get(`http://localhost:3000/model?q=${object}`)

            dispatch({
                type: MODEL_DATA_UPDATE,
                payload: {
                    data: res.data,
                    loading: false,
                    payload: object
                }
            })
        } catch(e) {
            console.log('Error in loading home data');
        }
    }
}
