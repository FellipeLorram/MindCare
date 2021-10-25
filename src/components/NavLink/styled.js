import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NavLinks = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 0;

  @media screen and (max-width:768px) {
    margin-top: 0;
  }

`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--main-padding);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  background: ${(props) => props.isactivelink === 'true' ? 'var(--second-color)' : 'none'};

  &:hover{
    background: ${(props) => props.isactivelink === 'true' ? 'background: rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.2)'};
  }

  @media screen and (max-width:768px) {
    justify-content: center;
    flex-direction: column-reverse;
    height: 100%;

    background: none;
    border-top: ${(props) => props.isactivelink === 'true' ? '2px solid var(--selected-field-bg)' : '1px solid var(--border-color)'};
  }

`;

export const LinkText = styled.span`
  font-size: 1.2rem;
  color: ${props => {
    if (props.darkTheme && props.active) return '#000';
    return 'var(--font-white-color)';
  }};
  font-family: var(--main-font);

  @media screen and (max-width:768px) {
    //display: none;
    color: var(--selected-field-bg);
    font-size: .9rem;
  }

`;

export const LinkIcon = styled(motion.span)`
  font-size: 1.5rem;
  color: ${props => {
    if (props.darkTheme && props.active) return '#000';
    return 'var(--font-white-color)';
  }};

  @media screen and (max-width:768px) {
    font-size: 1.1rem;
    color: var(--selected-field-bg);
  }
`;
