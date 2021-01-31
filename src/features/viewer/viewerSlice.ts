import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';


export interface ViewerState {
}

const initialState: ViewerState = {
};

export const viewerSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        getImage: (state, action: PayloadAction<number>) => {
        }
    },
});


const { actions, reducer } = viewerSlice;
// export const { selectForm } = actions;
export default reducer;