import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  background: var(--card-background-color);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: top 0.3s;
  padding: 0 .5rem;
  @media screen and (max-width:768px) {
    background: none;
    height: unset;
    padding: .5rem 1rem;
  }
  .right-side{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
  }
`;

export const Toggle = styled.div`
  font-size: 24px;
  padding: .5em;
  transition: all 0.2s ease-in-out;
  color: var(--header-color);
  transition: all 0.2s ease-in-out;

  .material-icons {
    transition: all 0.2s ease-in-out;
  }
  .material-icons:hover {
    color: var(--header-color);
    transform: scale(1.1);
    cursor: pointer;
  }
  @media screen and (max-width:768px) {
    display: none;
  }
`;

export const TopIcon = styled(Link)`
  font-size: 17px;
  padding: .5em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  gap: 5px;
  color: var(--white-color);
  transition: transform 0.2s;
  font-family: var(--main-font);
  background: var(--btn-color);
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: var(--shadow);
  }
  .material-icons-outlined {
    font-size: 17px;
  }

  @media screen and (max-width:768px) {
    padding: .25em .5em;

    .text{
      display: none;
    }

    .material-icons-outlined {
      font-size: 24px;
    }
  }

`;

export const TopReference = styled.div`
  padding: 0.5em;
  font-size: 1.5rem;
  font-family: var(--main-font);
  color: var(--header-color);
  text-align: center;
  @media screen and (max-width:768px) {
    font-size: 1.6rem;
    padding: 0.5em 0.2em 0.2em 0.2em;
    position: relative;
    overflow-x: hidden;

    &::after{
      content: '';
      padding: 0 0 0.1em 0;
      position: absolute;
      left: -100%;
      opacity: 0;
      bottom: 0;
      width: 50%;
      height: 2px;
      background: var(--header-color);
      animation: leftToCenter 0.3s ease-in-out forwards;
    }
  }
`;
