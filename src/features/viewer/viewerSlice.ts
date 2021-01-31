import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';


export interface ViewerState {
    responseData: any
}

const initialState: ViewerState = {
    responseData: null
};

export const viewerSlice = createSlice({
    name: 'viewer',
    initialState,
    reducers: {
        setResponseData: (state, action: PayloadAction<any>) => {
            state.responseData = action.payload
        }
    },
});

export const setResponseDataAsync = (path: string): AppThunk => dispatch => 
    fetch(`/data/ocr-responses/${path}`)
        .then((data: any) => data.json())
        .then((data: any) => dispatch(setResponseData(data)))


export const selectResponseData = (state: RootState) => state.viewer.responseData;

const { actions, reducer } = viewerSlice;
export const { setResponseData } = actions;
export default reducer;