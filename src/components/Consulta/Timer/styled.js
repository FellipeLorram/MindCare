import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  position: relative;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--card-background-color);
  padding: .5rem;
  font-size: 1rem;
  gap: 1rem;
  font-family: var(--main-font);
  border-radius: 10px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);
  @media screen and (max-width:768px) {
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem;
  border-bottom: 1px solid var(--border-color);
  width: 100%;
  font-size: 3.5rem;
  letter-spacing: .2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;

`;
