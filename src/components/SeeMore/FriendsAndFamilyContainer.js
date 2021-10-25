import React, { useEffect, useState } from 'react';
import {
  ContainerColumn,
  ContainerRow,
} from './styled';
import Footer from './ContainersFooter';
import ContainerHeadedBox from './ContainerHeaderBox';
import More from './More';

export default function FriendsAndFamily({ family, friends, others }) {
  const [hide, setHide] = useState(true);
  const [disabled, setDisabled] = useState(true);
  return (
    <ContainerColumn boxShadow hideMaxPrincipal={hide} color="var(--primary-color-shadow-opacity-H)">
      <ContainerRow hideMaxSecondary={hide}>
        <ContainerHeadedBox disabled={disabled} text="Familiares" data={family} />
        <ContainerHeadedBox disabled={disabled} text="Amigos e conhecidos" data={friends} />
        <ContainerHeadedBox disabled={disabled} text="Outras pessoas" data={others} />
      </ContainerRow>
      {disabled && (
        <More
          disabled={disabled}
          setDisabled={setDisabled}
          hide={hide}
          setHide={setHide}
        />
      )}
      {!disabled && (
        <Footer setDisabled={setDisabled} />
      )}
    </ContainerColumn>
  );
}
