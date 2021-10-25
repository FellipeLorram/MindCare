import React from 'react';
import { InputField } from '../Form/styled';

export default function InputContainerEdit({
  inputName,
  inputType,
  disabled = false,
  value,
}) {
  return (
    <>
      <label htmlFor={inputName} className="input__label">
        {inputName}
        <InputField
          value={value}
          disabled={disabled}
          id={inputName}
          type={inputType}
          autoComplete="none"
        />
      </label>
    </>
  );
}
