import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AccordionContainer = styled(motion.div)`
  position: relative;
  margin: 30px;
  background: var(--card-background-color);
  border-radius: 20px;
  cursor: pointer;
  border: 0.5px solid var(--border-color);
  transition: all 0.2s ease-in-out;
  color: var(--font-color);

  &:hover{
    //border: 0;
    box-shadow: var(--shadow);
  }
  @media screen and (max-width:768px) {
    margin-top: 5px;
  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  padding: 0.83em;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  font-family: var(--main-font);
  font-size: 1.2rem;
  transition: margin-bottom 0.2s ease-out;
  overflow: hidden;

  @media screen and (max-width:768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: "nomeImg nomeImg" "presencial dia" "ativo mais";
    padding: 1em;
    padding-bottom: .5em;
  }
`;

export const AccordionHeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .paciente_img{
    position: relative;
    min-height: 50px;
    min-width: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 3rem;
    background: rgba(0,0,0,0.5);
  }

  .paciente_img img{
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width:768px) {
    grid-area: nomeImg;
    justify-content: unset;
    font-size: 1.5rem;
  }

`;

export const ConsultationMode = styled.div`
 @media screen and (max-width:768px) {
    margin: 20px 0;
    grid-area: presencial;
    font-size: 17px;
  }
`;

export const AccordionHeaderCenterLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span{
    margin: 0 10px;
  }

  @media screen and (max-width:768px) {
    margin: 20px 0;
    grid-area: dia;
    font-size: 17px;
    justify-content: flex-end;
    gap: 0.4rem;

    span{
      margin: 0;
    }

  }

`;

export const AccordionHeaderCenterRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .ativo_inativo {
    background: ${props => props.isActivePatient ? 'var(--green-color);' : 'var(--red-color);'};
    box-shadow: ${props => props.isActivePatient ? '0 0 8px var(--green-color);' : '0 0 8px var(--red-color);'};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
  }
  @media screen and (max-width:768px) {
    grid-area: ativo;
    justify-content: flex-start;

  }
`;

export const AccordionHeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span{
    transition: all 0.2s ease-in-out;
    transform:  ${props => props.IsAccordionActive ? 'rotate(180deg)' : 0};
  }
  @media screen and (max-width:768px) {
    grid-area: mais;
    justify-content: flex-end;

  }
`;

export const AccordionBody = styled.div`
  position: relative;
  max-height: ${props => props.IsAccordionActive ? '1000px' : 0};
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width:768px) {
    border-radius: 30px;
  }
`;

export const ButtonContainerAccordionBody = styled.div`
  width: 100%;
  padding: 0 1.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  button{
    outline: none;
    border: none;
    font-size: 17px;
    padding: .5em 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    gap: 5px;
    color: var(--white-color);
    transition: transform 0.2s;
    font-family: var(--main-font);
    background: var(--primary-color);

    &:hover {
      transform: scale(1.02);
      cursor: pointer;
      box-shadow: var(--shadow);
    }

    @media screen and (max-width:768px) {
      box-shadow: var(--shadow);
    }
  }

  a{
    text-decoration: none;
    color: var(--font-color);
  }

`;

export const AccordionBodyContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 1.2rem;
  line-height: 1.5rem;
   @media screen and (max-width:768px) {
    overflow-x: auto;
  }
`;

export const BoxPersonalInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 15px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  padding: 1em 1.5em;
  background-image: ${props => props.backGroundImage};
  box-shadow: ${props => props.boxShadow};
  @media screen and (max-width:768px) {
   min-width: 250px;
  }
`;

export const InfoHeader = styled.div`
  color: ${props => props.color}
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
  font-family: var(--main-font);
  padding: var(--main-padding) 0 5px 0;
  border-bottom: 1px solid #e6e6e6;
`;
