import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  margin: 1.8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  font-family: var(--main-font);
  padding: 0.6rem;
  @media screen and (max-width:768px) {
    margin: 0 0 4rem 0;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled(motion.div)`
  background: var(--card-background-color);
  color: var(--font-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 1rem;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.16);
  cursor: pointer;
  transition: all .2s ease-in-out;
  gap: 1.5rem;
  .material-icons-outlined{
    font-size: 2rem;
  }
  span{
    font-size: 1.5rem;
  }
  box-shadow: var(--shadow);
  @media screen and (max-width:768px) {
    padding: 1.5rem 1rem;
 }
`;

export const InputContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  label{
  width: 100%;
  color: var(--font-color);
  }
  input{
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: none;
    border: 1px solid #eee;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border-radius: 5px;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    margin-top: 5px;
    &:focus{
      box-shadow: 0px 1px 8px var(--primary-color);
    }
  }
  .input{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: .5rem;
  }
  .material-icons-outlined{
    border: .1px solid var(--primary-color-shadow-opacity-H);
    padding: .375rem .75rem;
    align-self: flex-end;
    border-radius: 5px;
    color: var(--primary-color);
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover{
      box-shadow: var(--shadow);
    }
  }
`;

export const ModalBodyThemes = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  color: var(--font-color);

  @media screen and (max-width:768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Themes = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  box-shadow:var(--shadow);
  border: 1px solid var(--border-color);
  padding: 1rem;
  gap: 1rem;
  cursor: pointer;
  color: var(--font-color);

  .colors{
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
  }

`;

export const Indicator = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .5rem;

    .select{
      cursor: pointer;
      padding: .5rem;
      border-radius: 50%;
      border: 1px solid #ccc;
      transition: all .2s ease-in-out;
      background: ${props => props.selected ? 'rgba(0, 255, 0, 0.6)' : 'none'};

      &:hover{
        background: rgba(0, 255, 0, 0.2);
      }
    }

`;

export const Color = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: ${props => props.bg};
  cursor: pointer;
`;
