import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function FieldBox ({ name = '', data = {} }) {
  const dispatch = useDispatch();

  console.log('rendering field: ', name);
  

  return (
    <div>
        {name}
    </div>
  );
}
