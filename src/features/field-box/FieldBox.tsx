import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

type FieldBoxProps = {
  name: string,
  data: any,
  imageWidth: number 
};

export default function FieldBox ({ name, data, imageWidth }: FieldBoxProps) {
  const dispatch = useDispatch();

  const {
    boundingBox: [
      x1, y1,
      x2, y2,
      x3, y3,
      x4, y4
    ]
  } = data; 

  const width  = x2 - x1;
  const height = y3 - y2;
  const rectX = x1 / 2 - width / 2;
  const rectY = y1 / 2 - height / 2;

  return (
    <svg width={window.innerWidth / 2} height={window.innerHeight}>
      <rect x={rectX} y={rectY} width={width} height={height}
      style={{stroke: 'red', strokeWidth: 2, fill: 'rgba(0,0,0,0)'}} />
    </svg>
  );
}
