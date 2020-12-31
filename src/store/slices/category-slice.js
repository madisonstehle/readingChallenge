import { createSlice } from "@reduxjs/toolkit";

import db from '../../db.json';

const categorySlice = createSlice({
    name: 'category',

    initialState: {
        categoriesList: []
    },

    reducers: {
        setCategoryList: (state, action) => {
            state.categoriesList = action.payload;
        }
    }
});

export const {
    setCategoryList,
} = categorySlice.actions;

// Read
export const getCategories = (payload) => {
    return async (dispatch) => {
        // let response = await server.get(url);
        // let categories = response.data;
        let categories = db.categories;
        dispatch(setCategoryList(categories));
    }
}

export default categorySlice.reducer