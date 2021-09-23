import { EDIT_DATA_UPDATE } from "./types";
import {MODEL_DETIALS_DATA_UPDATE} from '../ModelDetailsView/types';
import axios from 'axios';

export const changeData = (object) => {
    return async (dispatch) => {
        dispatch({
            type: EDIT_DATA_UPDATE,
            payload: object
        })
    }
}

export const loadData = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`http://localhost:3000/model/${id}/`);
            dispatch({
                type: EDIT_DATA_UPDATE,
                payload: {
                    data: res.data,
                    title: res.data.title,
                    image: res.data.image,
                    model: res.data.model,
                    modelName: res.data.modelName,
                    modelType: res.data.modelType,
                    cost: res.data.cost,
                    category: res.data.category,
                    description: res.data.description,
                    notes: res.data.notes,
                }
            })
        } catch(e) {
            console.log('Error in loading detail data');
        }
    }
}

export const updateData = (id, title, image, model, modelName, modelType, cost, category, description, notes) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: EDIT_DATA_UPDATE,
                payload: {
                    loading: true
                }
            })

            const params = JSON.stringify({
                "title": title,
                "image": image,
                "model": model,
                "modelName": modelName,
                "modelType": modelType,
                "cost": cost,
                "category": category,
                "description": description,
                "notes": notes
            })

            const res = await axios.put(`http://localhost:3000/model/${id}/`, params, {
                "headers": {
                    "content-type": "application/json"
                }
            });

            dispatch({
                type: EDIT_DATA_UPDATE,
                payload: {
                    loading: false
                }
            })

        } catch(e) {
            console.log('Error in updating data', e);
        }
    }
}
