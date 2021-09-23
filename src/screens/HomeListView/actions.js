import { HOME_DATA_UPDATE } from "./types";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export const changeData = (object) => {
    return async (dispatch) => {
        dispatch({
            type: HOME_DATA_UPDATE,
            payload: object
        })
    }
}

export const loadData = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: HOME_DATA_UPDATE,
                payload: {
                    loading: true
                }
            })

            const res = await axios.get('http://localhost:3000/home')

            dispatch({
                type: HOME_DATA_UPDATE,
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
