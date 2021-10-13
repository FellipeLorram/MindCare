import React from 'react';
import { SelectField } from './styled';

export default function SelectContainer(props) {
  return (
    <>
      <label htmlFor={props.selectName} className="input__label">
        {props.selectName}
        <SelectField id={props.selectName}>
          {props.children}
        </SelectField>
      </label>
    </>
  );
}
