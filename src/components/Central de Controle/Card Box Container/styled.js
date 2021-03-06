import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardBoxContainer = styled.div`
 position: relative;
  margin: 1.8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  font-family: var(--main-font);
  padding: 0.6rem;
  @media screen and (max-width:768px) {
    overflow-x: auto;
    margin: 0 0 1rem 0;
  }

`;

export const WeekBoxContainer = styled(motion.div)`
  position: relative;
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  font-family: var(--main-font);

  @media screen and (max-width:768px) {
    margin: 2rem 0 4rem 0;
    padding: 0.6rem;
  }

`;

export const Week = styled.div`
  background: var(--card-background-color);
  padding: 1em;
  border-radius: 15px;
  border: 0.5px solid var(--border-color);
`;

export const WeekHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding: var(--second-padding);
  width: 100%;
  margin-bottom: 10px;
  color: #5c1e7b;
`;

export const WeekDayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width:768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }

`;

export const Day = styled.div`
  background: var(--card-background-color);
  padding: var(--main-padding);
  border-radius: 15px;
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    box-shadow: var(--shadow);
    padding: var(--main-padding) 1.2em;
  }
`;

export const DayHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding: var(--second-padding);
  padding-top: 0;
  width: 100%;
  margin-bottom: 10px;
  color: var(--header-color);
`;

export const DayContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  padding: var(--second-padding);
  color: var(--font-color);
  padding-bottom: 5px;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--background-color);
`;
