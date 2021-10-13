import React from 'react';
import { ContainerInfo } from './styled';

export default function InfoContainer(props) {
  return (
    <ContainerInfo
      marginB={props.marginB}
      bgColor={props.bgColor}
      color={props.color}
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.2,
        damping: 1,
        stiffness: 120,
      }}
    >
      <div className="header">
        <span className="material-icons-outlined">{props.TopIcon}</span>
        {props.TopReference}
      </div>
      <div className="body">
        {props.children}
      </div>
      {props.footer
        ? (
          <div className="footer">
            <button onClick={() => props.setShowModal(true)} type="button">Adicionar campo</button>
          </div>
        ) : ''}
    </ContainerInfo>
  );
}
