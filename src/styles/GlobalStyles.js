import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --green-color: ${props => props.theme.greenColor};
  --darkerYellow-color: #668cff;
  --darkerYellow-color--opacity: rgba(102, 140, 255, 0.23);
  --white-color:  ${props => props.theme.whiteColor};
  --main-padding: 1em;
  --main-font-cursive: 'Dancing Script', cursive;
  --main-font: 'Josefin Sans', sans-serif;

  --primary-color: ${props => props.theme.primaryColor};
  --primary-color-shadow-opacity-H: ${props => props.theme.primaryColorShadowOpacityH};
  --primary-color-shadow-opacity-L: ${props => props.theme.primaryColorShadowOpacityL};

  --primary-border: 1px solid rgba(0,0,0,0.16);

  --second-color: ${props => props.theme.secondColor};

  --font-color: ${props => props.theme.fontColor};
  --font-white-color:  ${props => props.theme.fontWhiteColor};

  --red-color: ${props => props.theme.redColor};

  --palette-color--green-money: #73ba2c;

  --palette-color--first: ${props => props.theme.paletteColorFirst};
  --palette-color--first--opacity: ${props => props.theme.paletteColorFirstOpacity};

  --palette-color--second: ${props => props.theme.paletteColorSecond};
  --palette-color--second--opacity: ${props => props.theme.paletteColorSecondOpacity};

  --palette-color--third: ${props => props.theme.paletteColorThird};

  --background-color:${props => props.theme.backgroundColor};

  --logo-shadow-color: ${props => props.theme.logoShadowColor};

  //
  --shadow:  ${props => props.theme.shadow};

  --card-background-color: ${props => props.theme.cardBackgroundColor};
  --line-color: ${props => props.theme.lineColor};
  --header-color: ${props => props.theme.headerColor};
  --border-color: ${props => props.theme.borderColor};
  --header-span-color: ${props => props.theme.headerSpanColor};
  --selected-field-bg: ${props => props.theme.selectedFieldBg};
  --selected-field-color: ${props => props.theme.selectedFieldColor};
  --btn-color:  ${props => props.theme.btnColor};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

html, #root, body{
  height: 100%;
}

body {
  overflow-x: hidden;
  background: var(--background-color);
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  font-size: 62.5%;
  overflow-y: ${props => props.bodyBlock ? 'hidden' : 'auto'};
}


@keyframes rotate_icon {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
  }

`;

export const MainContainer = styled(motion.div)`
  position: absolute;
  width: ${(props) => props.isActiveMain ? 'calc(100% - 300px)' : '100%'};
  min-width: 100vh;
  left: ${(props) => props.isActiveMain ? '300px' : 0};
  transition: 0.5s, width 0.2s, left 0.2s;

  @media screen and (max-width:768px) {
    width: 100%;
    left: 0;
    min-width: 100vw;
   // margin-top: 4rem;
  }
`;

export const SmallButton = styled.button`
  outline: none;
  border: none;
  font-size: 14px;
  padding: .2em .6em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  gap: 5px;
  color: var(--white-color);
  transition: transform 0.2s;
  font-family: var(--main-font);
  background: ${props => props.color ? props.color : 'var(--btn-color)'};

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: var(--shadow);
  }

  @media screen and (max-width:768px) {
    box-shadow: var(--shadow);
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
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
  background: ${props => props.color ? props.color : 'var(--btn-color)'};

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: var(--shadow);
  }

  @media screen and (max-width:768px) {
    box-shadow: var(--shadow);
  }
`;

export const ModalBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0,0,0,0.5);
  z-index: 6;
`;

export const ModalContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 60%;
  z-index: 7;
  font-family: var(--main-font);
  font-size: 1.2rem;
  height: 90%;

  &.large{
    width: 100%;
    max-width: 80%;
    @media screen and (max-width:768px) {
      width: 100%;
      max-width: 95%;
    }
  }

  @media screen and (max-width:1200px) {
    width: 100%;
    max-width: 80%;
    max-height: 500px;
    &.large--height{
      max-height: 860px;
    }
    &.medium--height{
      max-height: 540px;
    }
  }

  @media screen and (max-width:768px) {
    width: 100%;
    max-width: 90%;
    max-height: 460px;
    &.large--height{
      max-height: 860px;
    }
    &.medium--height{
      max-height: 540px;
    }
  }
`;

export const ModalHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  background: var(--card-background-color);
  border-radius: 10px 10px 0 0;
  color: var(--font-color);

  &.end{
    justify-content: flex-end;
    padding: .5rem 1rem;
  }

  .header--configs{
    font-size: 2rem;
    color: var(--font-color);
  }
  .header--day{
    font-size: 2rem;
    color: var(--primary-color);
  }
  .header--lembretes{
    font-size: 2rem;
    color: var(--darkerYellow-color);
  }

  .material-icons-outlined{
    cursor: pointer;
    transition: all .2s ease-in-out;
    background: var(--primary-color-shadow-opacity-L);
    border-radius: 50%;
    padding: .2em;
    color:  var(--primary-color);

    &:hover{
      transform: scale(1.1);
      color: red;
    }
  }
  .material-icons-outlined.remembers{
    background: var(--darkerYellow-color--opacity);
    color: var(--white-color);
    &:hover{
      transform: scale(1.1);
      color: red;
    }
  }
`;

export const ModalBody = styled(motion.div)`
  width: 100%;
  background: ${props => props.bgColor ? props.bgColor : 'var(--card-background-color)'};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1.5rem;
  padding: 1rem;
  overflow-y: auto;

  @media screen and (max-width:768px) {
    padding: ${props => props.initialPadding ? '1rem' : '.5rem'};
    gap: ${props => props.initialGap ? '1.5rem' : '.5rem'};
    height: 100%;
  }
`;

export const ModalFooter = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: .5rem 1rem;
  width: 100%;
  background: var(--card-background-color);
  border-radius: 0 0 10px 10px;
  @media screen and (max-width:768px) {
  }
`;
