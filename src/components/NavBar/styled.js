import styled from 'styled-components';

export const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.isActiveNav ? 0 : '-100%'};
  width: 300px;
  height: 100%;
  background: var(--primary-color);
  transition: left 0.19s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .config{
    width: 100%;
  }

  .top{
    width: 100%;
  }

  @media screen and (max-width:768px) {
    bottom: 0;
    width: 100%;
    height: unset;
    top: unset;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background: var(--white-color);
    z-index: 2;
    padding: 0 0.2rem;
    max-width: 100vw;

    .top{
      display: flex;
      flex-direction: row;
      width: 100%;
    }

    .config{
      display: none;
    }
  }

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  padding: var(--main-padding);
  font-size: 2.5em;
  color: var(--white-color);
  font-family: var(--main-font-cursive);
  line-height: 14px;
  box-shadow: inset 0 -6px 10px rgba(0, 0, 0, 0.5);

  @media screen and (max-width:768px) {
    display: none;
  }

`;
