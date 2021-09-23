import { MODEL_DATA_UPDATE } from "./types";
import axios from 'axios';
import { Platform } from "react-native";

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

            const res = await axios.get(Platform.OS === 'ios' ? 'http://localhost:3000/model' : 'http://10.0.2.2:3000/model')

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

            const res = await axios.get(Platform.OS === 'ios' ? `http://localhost:3000/model?q=${object}` : `http://10.0.2.2:3000/model?q=${object}`)

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
