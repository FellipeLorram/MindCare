import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --green-color: #99d75b;
  --red-color: #ff4000;
  --darkerYellow-color: #668cff;
  --darkerYellow-color--opacity: rgba(102, 140, 255, 0.23);
  --white-color: #fff;
  --main-padding: 1em;
  --main-font-cursive: 'Dancing Script', cursive;
  --main-font: 'Josefin Sans', sans-serif;

  --primary-color: #cc98e6;
  --primary-color-shadow-opacity-H: rgba(204, 152, 230, 0.16);
  --primary-color-shadow-opacity-L: rgba(204, 152, 230, 0.23);
  --primary-border: 1px solid rgba(0,0,0,0.16);
  --second-color: #c284e1;
  --font-color: #5c1e7b;

  --red-color: #ff6666;

  --palette-color--first: #f5d6ed;
  --palette-color--first--opacity: rgba(245, 214, 237, 0.16);

  --palette-color--second: #f2faea;
  --palette-color--second--opacity: rgba(242, 250, 234, 0.23);

  --palette-color--third: #f5eafa;
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
  background: #f5f5f5;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  font-size: 62.5%;
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
  background: ${props => props.color ? props.color : 'var(--primary-color)'};

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: var(--primary-color-shadow-opacity-H) 0px 3px 6px, var(--primary-color-shadow-opacity-L)  0px 3px 6px;
  }

  @media screen and (max-width:768px) {
    box-shadow: var(--primary-color-shadow-opacity-H) 0px 3px 6px, var(--primary-color-shadow-opacity-L)  0px 3px 6px;
  }
`;
