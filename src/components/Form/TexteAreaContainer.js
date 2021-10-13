import React from 'react';
import { TextAreaField } from './styled';

export default function TextAreaContainer({
  inputName, inputCols, inputRows,
}) {
  return (
    <>
      <label htmlFor={inputName} className="input__label">
        {inputName}
        <TextAreaField id={inputName} cols={inputCols} rows={inputRows} />
      </label>
    </>
  );
}
