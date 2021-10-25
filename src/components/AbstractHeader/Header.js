import React from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerHeader, Toggle, TopReference } from './styled';

export default function Header({ text }) {
  const history = useHistory();

  return (
    <ContainerHeader>
      <Toggle>
        <span
          onClick={history.goBack}
          onKeyUp={history.goBack}
          className="material-icons"
          role="button"
          tabIndex="0"
        >
          arrow_back_ios_new
        </span>
      </Toggle>
      <TopReference>
        {text}
      </TopReference>
      <span />
    </ContainerHeader>
  );
}
