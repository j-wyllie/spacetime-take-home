import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentForm } from '../menu/menuSlice';
import styled from 'styled-components';
import { selectResponseData, setResponseDataAsync } from './viewerSlice';
import styles from './Viewer.module.css';
import FieldBox from '../field-box/FieldBox';
import { updateParenthesizedType } from 'typescript';

const FormImg = styled.img`
    width: 50vw;
 `; 
 
export default function Viewer () {
    const dispatch = useDispatch();
    const currentForm = useSelector(selectCurrentForm);
    const imagePath = `/data/forms/${currentForm.image}`;
    const responseData = useSelector(selectResponseData);

    const ref: any = useRef(null);
    const [ imageSize, setImageSize ] = useState({width: 1, height: 1});

    const updateSize = () => {
        setImageSize({
            width: ref.current?.offsetWidth,
            height: ref.current?.offsetHeight,
        });
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        updateSize();
    }, [ref.current]);
    setTimeout(() => {  // The above useEffect does not do anything for some reason, this is a workaround
        updateSize();
    }, 100) 

    useEffect(() => {
        dispatch(setResponseDataAsync(currentForm.response))
    }, [currentForm.response]) 

    return (
        <div className={styles.viewerContainer}>
            <FormImg ref={ref} src={imagePath}/>
            {
                responseData && responseData.analyzeResult && responseData.analyzeResult.documentResults
                    .map(({ fields = {}}) => {
                        return (
                            Object.entries(fields).map(
                                ([key, value]: any[]) =>
                                    <FieldBox name={key} data={value} 
                                        imageWidth={imageSize.width} imageHeight={imageSize.height} 
                                        imageWidthOriginal={responseData?.analyzeResult?.readResults[0]?.width} imageHeightOriginal={responseData?.analyzeResult?.readResults?.height} 
                                    /> 
                            )
                        )
                    })
            } 
        </div>
    );
}