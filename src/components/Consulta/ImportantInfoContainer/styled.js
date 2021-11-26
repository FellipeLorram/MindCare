import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 100%;
  gap: 1rem;
  background: var(--card-background-color);
  padding: .5rem 1rem;
  font-family: var(--main-font);
  width: 20%;
`;

export const ImportantPeopleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    width: 100%;
    color: var(--font-color);
    gap: 1rem;
    padding: .7rem;
    background: var(--second-color);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow);
    border-radius: 10px;

  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    font-size: 1.2rem;
    padding-bottom: .5rem;
    border-bottom: 1px solid var(--border-color);
  }

  .body{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;
    flex-direction: column;
  }

  .content{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 1rem;
    padding-bottom: .5rem;
    border-bottom: 1px solid var(--border-color);

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
  }

`;

export const AddPeopleContainer = styled(motion.div)`
  position: absolute;
  width: 90%;
  margin: 0 auto;
  z-index: 4;
  box-shadow: var(--shadow);
  border-radius: 10px;
  .add--people--body{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background: var(--card-background-color);
    padding: .5rem 1rem;
    position: relative;
    gap: .2rem;

  input{
    width: 100%;
    font-weight: bold;
    border: 1px solid var(--border-color);
    outline: none;
    font-size: 17px;
    font-family: var(--main-font);
    resize: none;
    padding: .5rem 1rem;
    cursor: initial;
    background: none;
    transition: all .2s ease-in-out;
    border-radius: 4px;

    &:disabled{
        background: none;
        color: var(--font-color);
        border: none;
    }
    }
  }
`;

export const OptionsArrow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all .2s ease-in-out;
  padding: .25rem;
  color: var(--font-color);
  &:hover{
    color: var(--second-color);
  }
`;

export const OptionsContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  bottom: -100%;
  right: 0;
  transform: translate(50%, 50%);
  width: 100px;
  padding: .2rem;
  background: var(--card-background-color);
  box-shadow: var(--shadow);
  gap: .3rem;

  .option{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: .3rem .1rem;
    background: var(--card-background-color);
    cursor: pointer;
    transition: all .2s ease-in-out ;
    color: var(--font-color);

    &:hover{
      filter: brightness(95%);
    }

  }
`;
