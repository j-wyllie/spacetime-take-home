import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

type FieldBoxProps = {
  name: string,
  data: any,
  imageWidth: number,
  imageHeight: number,
  imageWidthOriginal: number,
  imageHeightOriginal: number 
};

export default function FieldBox ({ name, data, imageWidth, imageHeight, imageWidthOriginal, imageHeightOriginal }: FieldBoxProps) {
  const dispatch = useDispatch();

  const {
    boundingBox: [
      x1, y1,
      x2, y2,
      x3, y3,
      x4, y4
    ]
  } = data; 

  const scale  = imageWidth / imageWidthOriginal;
  const width  = (x2 - x1) * scale;
  const height = (y3 - y2) * scale;
  const rectX  = x1 * scale; 
  const rectY  = y1 * scale;

  return (
    <svg width={imageWidth} height={imageHeight}>
      <rect x={rectX} y={rectY} width={width} height={height}
      style={{stroke: 'red', strokeWidth: 2, fill: 'rgba(0,0,0,0)'}} />
    </svg>
  );
}
