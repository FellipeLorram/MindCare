import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--background-color);
  padding: 1.8rem;
  font-size: 1rem;
  font-family: var(--main-font);
  gap: 1.8rem;
  @media screen and (max-width:768px) {
    margin-bottom: 4rem;
    padding: 1rem;
  }

`;

export const ContainerRow = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  gap: 1rem;
  border-radius: 10px;
  background: ${props => props.color ? props.color : ''};
  padding:  ${props => props.padding ? props.padding : ''};
  max-height: ${props => props.maxHeight};
  transition: all .2s ease-in-out;
  position: relative;
  border-radius: 10px;
  ${props => props.boxShadow && `
    box-shadow: var(--shadow);
  `};

  ${props => props.hide && `
    transition: all .2s ease-in-out;

    &:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 20%;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, .2));
    border-radius: 10px;
  }`}
  ${props => props.hideMax && `
    max-height: 0;
    overflow:hidden;
    padding: 0;
    transition: all .2s ease-in-out;

  }`}
  ${props => props.hideMaxPrincipal && `
    max-height: 80px;
    overflow:hidden;
    padding: 0;
    transition: all .2s ease-in-out;

    &:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, .2));
    border-radius: 10px;
  }`}
  ${props => props.hideMaxSecondary && `
    max-height: 80px;
    overflow:hidden;
    padding: 0;
    transition: all .2s ease-in-out;
  }`}

  .input__label{
    width: 100%;
  }
  @media screen and (max-width:768px) {
    flex-direction: column;
  }
`;

export const ContainerColumn = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: ${props => props.gap ? props.gap : '2rem'};
  width: 100%;
  background: ${props => props.color ? 'var(--card-background-color)' : ''};
  padding: ${props => props.p ? props.p : '1rem'};;
  position: relative;
  transition: all .2s ease-in-out;
  border-radius: 10px;

  ${props => props.boxShadow && `
    box-shadow: var(--shadow);
  `};

  ${props => props.hide && `
    &:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0%;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, .1));
  }`}
  ${props => props.hideMax && `
    height: 0;
    overflow: hidden;
    padding: 0;
  }`}

  ${props => props.hideMaxPrincipal && `
    max-height: 120px;
    overflow:hidden;
    padding: 0;
    transition: all .2s ease-in-out;

    &:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0%;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, .1));
  }

  `}


  .input__label{
    color: var(--font-color);
    width: 100%;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  @media screen and (max-width:768px) {
    flex-direction: column;
  }

`;

export const Image = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 20%;
  height: 150px;

  .image{
    background: #ccc;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  @media screen and (max-width:768px) {
    align-items: center;
    width: 100%;
    .image{
      width: 80%;
    }
  }
`;

export const ContainerHeader = styled.div`
  width: 100%;
  font-size: 1.2rem;
  padding: 1rem 0;
  color: var(--font-color);
  border-bottom: 1px solid var(--font-color);
`;

export const MoreContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0;
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  gap: .5rem;
  transition: all .2s ease-in-out;

  .more{
    transition: all .2s ease-in-out;
    padding: 0 5px;
    border-radius: 10px;
    background: var(--card-background-color);
    color: var(--font-color);
    box-shadow: var(--shadow);
  }
  .more:hover{
    transform: scale(1.15);
  }

  .edit{
    transition: all .2s ease-in-out;
    padding: 0 5px;
    border-radius: 10px;
    background: var(--card-background-color);
    color: var(--font-color);
    box-shadow: var(--shadow);

  }
  .edit:hover{
    transform: scale(1.15);
  }
`;

export const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: .5rem 1rem;
  gap: 1rem;
`;

export const PaymentsAndAppoitmentsContainerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--font-color);
`;

export const PaymentsAndAppoitmentsContainerContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  border-bottom: 1px solid var(--border-color);
  padding: 0 .5rem .5rem .5rem ;
  color: var(--font-color);

`;

export const EditContainer = styled.div`
  position: absolute;
  right: 5px;
  bottom: 0;
  padding: .2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  transition: all .2s ease-in-out;

  .edit{
    transition: all .2s ease-in-out;
    padding: 0 5px;
    border-radius: 10px;
    background: var(--card-background-color);
    color: var(--font-color);
    box-shadow: var(--shadow);
    opacity: .5;
  }
  .edit:hover{
    transform: scale(1.1);
    opacity: 1;
  }
`;
