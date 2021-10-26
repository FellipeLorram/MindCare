import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(1, 1fr);
  padding: 1rem;
  width: 100%;
  gap: 1rem;
  border-radius: 10px;
  background: var(--card-background-color);
  box-shadow: inset rgba(0,0,0,0.16) 0px 3px 6px, inset rgba(0,0,0,0.23) 0px 3px 6px;
  position: relative;

  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem .5rem;
    width: 100%;
    font-size: 2rem;
    color: var(--font-color);
    gap: .5rem;

    .add--note{
      background: var(--card-background-color);
      box-shadow: var(--shadow);
      border-radius: 10px;
      padding: .5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all .2s ease-in-out;
      color: var(--font-color);
      font-size: 1rem;

      &:hover{
        transform: scale(1.1);
        filter: brightness(95%);
      }
    }

  }
  .body{
    padding: .2rem 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: .8rem;
    position: relative;
    color: var(--font-color);

    @media screen and (max-width:768px) {
      grid-template-columns: repeat(2, 1fr);
    }

  }

  .background{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.1);
    border-radius: 10px;
    z-index: 1;
    backdrop-filter: blur(2px);
  }
`;

export const Note = styled(motion.div)`
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
      height: 80%;
      min-height: 280px;
      z-index: 5;
      border-radius: 5px;
      @media screen and (max-width:768px) {
        min-height: unset;
        max-height: 50vh;
      }
    `}

    input{
    width: 100%;
    height: 30px;
    font-weight: bold;
    border: none;
    border-bottom: 1px solid var(--border-color);
    background: var(--card-background-color);
    outline: none;
    font-size:  ${props => props.open ? '27px' : '17px'};
    font-family: var(--main-font);
    resize: none;
    padding: .5rem 1rem;
    cursor: initial;
    color: var(--font-color);
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
    background: var(--card-background-color);
    outline: none;
    color: var(--font-color);
    font-size: 17px;
    font-family: var(--main-font);
    resize: none;
    padding: .5rem;
    cursor: initial;
    border-radius: ${props => props.open ? 0 : '5px 5px 0 0'};

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

    @media screen and (max-width:768px) {
        flex-direction: column;
        gap: .5rem;
      }
  }

  .edit--button-container--wrapper{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: var(--card-background-color);
  }

  .edit--button-container{
    width: 100%;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    background: none;
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
