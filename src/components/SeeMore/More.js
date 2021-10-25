import React, { useEffect } from 'react';
import {
  MoreContainer,
} from './styled';

export default function More({
  setHide,
  hide,
  disabled,
  setDisabled,
}) {
  useEffect(() => {
    if (hide) setDisabled(true);
  }, [hide]);

  const handleClickEdit = () => {
    setDisabled(!disabled);
  };

  const handleClickHide = () => {
    setHide(!hide);
  };

  return (
    <MoreContainer>
      {!hide && (
        <>
          <span
            role="button"
            tabIndex={0}
            onKeyUp={handleClickEdit}
            onClick={handleClickEdit}
            className="material-icons-outlined edit"
          >
            edit
          </span>
        </>
      )}

      <span
        role="button"
        tabIndex={0}
        onKeyUp={handleClickHide}
        onClick={handleClickHide}
        className="material-icons-outlined more"
      >
        more_horiz
      </span>
    </MoreContainer>
  );
}
