import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentForm } from '../menu/menuSlice';
import styled from 'styled-components';
import { selectResponseData, setResponseDataAsync } from './viewerSlice';

const FormImg = styled.img`
    width: 50vw;
    margin: 2rem;
 `;

export default function Viewer () {
    const dispatch = useDispatch();
    const currentForm = useSelector(selectCurrentForm);
    const imagePath = `/data/forms/${currentForm.image}`;
    const responseData = useSelector(selectResponseData);

    useEffect(() => {
        dispatch(setResponseDataAsync(currentForm.response))
    }, [currentForm.response]) 

    return (
        <div>
            <FormImg src={imagePath}/> 
            {JSON.stringify(responseData)}
        </div>
    );
}