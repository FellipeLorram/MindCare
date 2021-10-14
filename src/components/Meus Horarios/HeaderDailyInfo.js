import React from 'react';
import { ContainerHeader, Toggle, TopReference } from '../AbstractHeader/styled';

export default function HeaderDailyInfo({ setIndex, day, setCurrentDay }) {
  const handleChevronMinusClick = () => {
    setIndex(index => index < 1 ? 5 : index - 1);
  };
  const handleChevronPlusClick = () => {
    setIndex(index => index > 4 ? 0 : index + 1);
  };

  return (
    <ContainerHeader>
      <Toggle>
        <span
          onKeyUp={handleChevronMinusClick}
          onClick={handleChevronMinusClick}
          className="material-icons"
          role="button"
          tabIndex="0"
        >
          arrow_back_ios_new
        </span>
      </Toggle>
      <TopReference>
        {day}
      </TopReference>
      <Toggle>
        <span
          onKeyUp={handleChevronPlusClick}
          onClick={handleChevronPlusClick}
          className="material-icons"
          role="button"
          tabIndex="0"
        >
          arrow_forward_ios
        </span>
      </Toggle>
    </ContainerHeader>
  );
}
