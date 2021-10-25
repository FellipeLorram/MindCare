import styled from 'styled-components';

export const Line = styled.div`
    background: var(--line-color);
    height: 0.5px;
    margin: 10px 30px;
    @media screen and (max-width:768px) {
      margin: 10px;
    }
`;
