import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentForm } from '../menu/menuSlice';
import styled from 'styled-components';

const FormImg = styled.img`
    width: 50vw;
    margin: 2rem;
 `;

export default function Viewer () {
    const dispatch = useDispatch();
    const currentForm = useSelector(selectCurrentForm);
    const imagePath = `/forms/${currentForm.image}`

    return (
        <div>
            <FormImg src={imagePath}/> 
        </div>
    );
}