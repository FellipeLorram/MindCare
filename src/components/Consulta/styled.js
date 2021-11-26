import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  background: var(--card-background-color);
  padding: 0;
  font-size: 1rem;
  font-family: var(--main-font);
  height: 100%;
  @media screen and (max-width:768px) {
    margin-bottom: 4rem;
    padding: 1rem;
    flex-direction: column;
  }
  .notes--activities--container{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: var(--card-background-color);
    padding: 0 1rem 1rem 1rem;
    gap: 1rem;
  }
`;
