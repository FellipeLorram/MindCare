import React from 'react';
import {
  ContainerColumn,
  ContainerHeader,
  ContainerInput,
} from './styled';
import InputContainerEdit from './InputEdit';

export default function ContainerHeadedBox({ text, data, disabled }) {
  return (
    <ContainerColumn>
      <ContainerHeader>{text}</ContainerHeader>
      {data.map(content => (
        <ContainerInput key={content[0]}>
          <InputContainerEdit value={content[1]} disabled={disabled} inputName={content[0]} inputType="text" />
        </ContainerInput>
      ))}
    </ContainerColumn>
  );
}
