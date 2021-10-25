import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Activitie = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  box-shadow: var(--shadow);
  cursor: pointer;

  ${props => props.open
    && `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 300px;
      z-index: 5;
      border-radius: 5px;
    `}

  input{
    width: 100%;
    height: 30px;
    font-weight: bold;
    border: none;
    border-bottom: 1px solid var(--border-color);
    outline: none;
    font-size:  ${props => props.open ? '27px' : '17px'};
    font-family: var(--main-font);
    resize: none;
    padding: .5rem 1rem;
    cursor: initial;
    border-radius: ${props => props.open ? 0 : '5px 5px 0 0'};

    &:disabled{
      background: var(--card-background-color);
      color: var(--font-color);
    }
  }

  textarea{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 17px;
    font-family: var(--main-font);
    resize: none;
    padding: 1rem .5rem;
    cursor: initial;

    &:disabled{
      background: var(--card-background-color);
      color: var(--font-color);
    }
  }

  .footer{
    width: 100%;
    border-radius: 0 0 5px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem;
    background:${props => props.open ? '#aaa' : 'var(--card-background-color)'};
    color: var(--font-color);
    .footer-content{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 30%;
    }
  }

  .edit--button-container{
    width: 100%;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    background: var(--card-background-color);
    color: var(--font-color);
    gap: .5rem;
    .delete--btn{
      transition: all .2s ease-in-out;
      &:hover{
        color: red;
      }
    }
  }

  .note-header{
    width: 100%;
    border-radius: 5px 5px 0 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    background: var(--card-background-color);
    color: var(--font-color);
    .material-icons-outlined{
      padding: .2rem;
      cursor: pointer;
      border-radius: 50%;
      background: var(--darkerYellow-color--opacity);
      color: var(--white-color);
    }
  }
`;
