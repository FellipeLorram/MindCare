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
  transition: background 0.2s;
  cursor: pointer;
  text-decoration: none;
  background: ${(props) => props.IsActiveLink ? 'var(--second-color)' : 'none'};

  &:hover{
    background: ${(props) => props.IsActiveLink ? 'background: rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.2)'};
  }

  @media screen and (max-width:768px) {
    justify-content: center;
    flex-direction: column-reverse;
    height: 100%;

    background: none;
    border-top: ${(props) => props.IsActiveLink ? '2px solid var(--primary-color)' : '1px solid rgba(0, 0, 0, 0.1)'};
  }

`;

export const LinkText = styled.span`
  font-size: 1.2rem;
  color: var(--white-color);
  font-family: var(--main-font);

  @media screen and (max-width:768px) {
    //display: none;
    color: var(--primary-color);
    font-size: .9rem;
  }

`;

export const LinkIcon = styled(motion.span)`
  font-size: 1.5rem;
  color: var(--white-color);

  @media screen and (max-width:768px) {
    font-size: 1.1rem;
    color: var(--primary-color);
  }
`;
