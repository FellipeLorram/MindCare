import { motion } from 'framer-motion';
import styled from 'styled-components';

export const DayContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border: 1px solid var(--border-color);
  height: 100%;
  background: var(--card-background-color);
  padding: var(--main-padding);
  border-radius: 20px;
  font-family: var(--main-font);
  color: var(--font-color);
  cursor: pointer;
  transition: all 0.2s;

  &:hover{
    box-shadow: var(--shadow);
  }
  @media screen and (max-width:768px) {
    box-shadow: var(--shadow);
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
    border-bottom: 1px solid var(--border-color);

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
    margin: 0 0 4rem 0
  }
`;

export const ModalBody = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: var(--card-background-color);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 1rem;
  padding: 1rem;
  overflow-y: auto;
  border-radius: 0 0 10px 10px;
  overflow-y: auto;


  @media screen and (max-width:768px) {
    grid-template-columns:  1fr;
    grid-template-rows: repeat(6, auto);
  }

`;

export const ModalBodyHorarios = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: var(--card-background-color);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row: span 3;
  gap: .2rem;
  padding: .5rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  @media screen and (max-width:768px) {
    font-size: 17px;
  }
`;

export const ModalBodyHorariosContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .2rem;
    padding: .3rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 1px solid var(--border-color);

    .patient{
      text-align: left;
      width: 60%;
      padding-left: 10%;
    }
    .hour{
      text-align: center;
      width: 10%;
      font-size: 17px;
    }
    .frequency{
      text-align: center;
      width: 30%;
      color: ${props => props.color ? props.color : 'var(--font-color)'};
      @media screen and (max-width:768px) {
        width: unset;
      }
    }
    .material-icons-outlined.add{
      width: 30%;
      font-size: 14px;
      text-align: right;
      color: black;
    }
    &:hover{
      box-shadow: var(--shadow);
    }

`;

export const ModalRelatoryBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-direction: column;
  background: var(--card-background-color);
  padding: var(--main-padding);
  border-radius: 10px;
  transition: all .2s ease-in-out;
  box-shadow: var(--shadow);
  grid-row: span 1;
`;

export const ModalRelatoryBodyContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  padding: var(--second-padding);
  padding-bottom: 5px;
  border-bottom: 1px solid var(--border-color);
`;

export const ModalRelatoryFinancial = styled.div`
  background: var(--card-background-color);
  padding: 0.5rem;
  border-radius: 10px;
  transition: all .2s ease-in-out;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-row: span 2;
  flex-direction: row;

  @media screen and (max-width:768px) {
    flex-direction: column;
    gap: 1rem;
  }

`;

export const ModalRelatoryFinancialInfo = styled.div`
  width: 100%;
  height: 100%;
  background: var(--card-background-color);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalRelatoryFinancialInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.2rem;
  color: ${props => props.color};
  width: 100%;
  border-left: ${props => props.bdLft ? '1px solid var(--primary-color-shadow-opacity-L)' : 'none'};

  @media screen and (max-width:768px) {
    border: none;
  }
`;

export const ModalRelatoryFinancialInfoBody = styled.div`
  width: 100%;
  height: 100%;
  background: var(--card-background-color);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: .5rem;
  @media screen and (max-width:768px) {
    gap: 1rem;
  }
`;
