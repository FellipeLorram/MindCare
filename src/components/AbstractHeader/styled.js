import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContainerHeader = styled(motion.div)`
  width: 100%;
  background: var(--card-background-color);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Toggle = styled(motion.div)`
  font-size: 24px;
  padding: .5em;
  transition: transform 0.2s;
  color: var(--font-color);
  
  .material-icons:hover {
    color: var(--font-color);
    transform: scale(1.1);
    cursor: pointer;
  }

  &.small-pd{
    padding: .5rem;
  }
`;

export const TopReference = styled(motion.div)`
  padding: 0.5em;
  font-size: 1.5rem;
  font-family: var(--main-font);
  color: var(--font-color);
  text-align: center;
  @media screen and (max-width:768px) {
    font-size: 1.2rem;
  }

  &.small-pd{
    padding: .5rem;
  }
`;
