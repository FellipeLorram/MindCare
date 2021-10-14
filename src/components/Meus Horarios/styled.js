import { motion } from 'framer-motion';
import styled from 'styled-components';

export const DayContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border: var(--primary-border);
  height: 100%;
  background: white;
  padding: var(--main-padding);
  border-radius: 20px;
  font-family: var(--main-font);
  color: var(--font-color);
  cursor: pointer;
  transition: all 0.2s;

  &:hover{
    box-shadow: var(--primary-color-shadow-opacity-H) 0px 3px 6px, var(--primary-color-shadow-opacity-L)  0px 3px 6px;
  }
  @media screen and (max-width:768px) {
    box-shadow: var(--primary-color-shadow-opacity-H) 0px 3px 6px, var(--primary-color-shadow-opacity-L)  0px 3px 6px;
 }
`;

export const DayContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: 1.5rem;
  padding: 0.5em;
`;

export const DayContainerBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 15px;
  width: 100%;
  padding: 0.5em;
  font-size: 1rem;

  @media screen and (max-width:768px) {
    font-size: .8rem;
 }


`;

export const DayContainerBodyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  div{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    width: 100%;
    padding: 0.5em 0 0.2em 0;
    margin-bottom: 0.1em;
    border-bottom: 1px solid #f5f5f5;

    span{
      width: 20%;
      text-align: left;
    }

    .patient{
      width: 80%;
    }
}
`;

export const DayContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 0.5em;
  font-size: .8rem;

  div{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
  }
  .material-icons-outlined{
    font-size: 1.2rem;
  }
`;

export const BoxGrid = styled.div`
  margin: 1.8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  padding: 0.6rem;

  @media screen and (max-width:768px) {
    grid-template-columns:  1fr;
    grid-template-rows: auto;
    margin: 0 0 1rem 0
  }
`;

export const ModalBody = styled(motion.div)`
  width: 100%;
  background: var(--white-color);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "horarios infoPacientes"
    "horarios infoDia"
    "horarios AddRemember"
  ;
  gap: 1.5rem;
  padding: 1rem;
  overflow-y: auto;
  border-radius: 0 0 10px 10px;

`;
export const ModalBodyHorarios = styled(motion.div)`
  width: 100%;
  background: var(--white-color);
  display: grid;
  grid-template-columns: 1fr;
  grid-area: horarios;
  grid-template-rows: repeat(13, 1fr);
  gap: .5rem;
  padding: .5rem;
  border-radius: 10px;
  box-shadow: var(--primary-color-shadow-opacity-H) 0px 3px 6px, var(--primary-color-shadow-opacity-L)  0px 3px 6px;
  .horarios{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    padding: .5rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 1px solid #eee;
    &:hover{
      box-shadow: var(--primary-color-shadow-opacity-H) 0px 3px 6px, var(--primary-color-shadow-opacity-L)  0px 3px 6px;
    }
  }
`;
