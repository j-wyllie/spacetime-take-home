import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentForm } from '../menu/menuSlice';
import styled from 'styled-components';
import { selectResponseData, setResponseDataAsync } from './viewerSlice';
import styles from './Viewer.module.css';
import FieldBox from '../field-box/FieldBox';

const FormImg = styled.img`
    width: 50vw;
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
        <div className={styles.viewerContainer}>
            <FormImg src={imagePath}/>
            {
                responseData && responseData.analyzeResult && responseData.analyzeResult.documentResults
                    .map(({ fields = {}}) => {
                        return (
                            Object.entries(fields).map(
                                ([key, value]: any[]) => <FieldBox name={key} data={value} imageWidth={window.innerWidth / 2}/> 
                            )
                        )
                    })
            } 
        </div>
    );
}