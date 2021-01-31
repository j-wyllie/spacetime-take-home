import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';


export interface MenuState {
  forms: Form[],
  index: number 
}

export interface Form {
    name: string,
    image: string,
    response: string
}

const forms = [
    {
        name: 'Invoice one',
        image: 'project_invoice_01.jpg',
        response: 'InvoiceResult-project_invoice_01.json'
    },
    {
        name: 'Invoice two',
        image: 'project_invoice_02.jpg',
        response: 'InvoiceResult-project_invoice_02.json'
    },
    {
        name: 'Invoice three',
        image: 'project_invoice_03.jpg',
        response: 'InvoiceResult-project_invoice_03.json'
    },
]


const initialState: MenuState = {
    forms: forms,
    index: 0
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
    selectForm: (state, action: PayloadAction<number>) => {
        state.index = action.payload;
    }
  },
});

export const selectForms = (state: any) => state.menu.forms;
export const selectFormIndex = (state: any) => state.menu.index;
export const selectCurrentForm = (state: any) => state.menu.forms[state.menu.index];

const { actions, reducer } = menuSlice;
export const { selectForm } = actions;
export default reducer;