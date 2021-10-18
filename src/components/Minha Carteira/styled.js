import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BoxGrid = styled.div`
  position: relative;
  margin: 1.8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  font-family: var(--main-font);
  padding: 0.6rem;
  @media screen and (max-width:768px) {
    grid-template-columns: 1fr;
    margin: 0 0 4rem 0;
  }

`;

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  grid-column: span 2;
  background: var(--white-color);
  border-radius: 10px;
  padding: .5rem;
  border: 1px solid rgba(0,0,0,0.16);
  box-shadow: var(--primary-color-shadow-opacity-H) 0px 5px 6px, var(--primary-color-shadow-opacity-L)  0px 5px 6px;
  @media screen and (max-width:768px) {
    grid-column: span 1;
  }

  .row2{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
    @media screen and (max-width:768px) {
      flex-direction: column;
    }
  }

`;

export const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding: .5rem;
  color: var(--font-color);
`;

export const EarnsMontlyWeeklyContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .5rem;
  @media screen and (max-width:768px) {
    width: 100%;
  }
`;

export const EarnsDailyContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: .5rem;
  @media screen and (max-width:768px) {
    grid-template-columns: 1fr;
  }
`;

export const EarnsDayContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .5rem;
  padding: .5rem;
  border-radius: 10px;

  .header{
    padding: 0 .5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.5rem;
    color: var(--font-color);
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .5rem;
  padding: .5rem;
  color: var(--font-color);
  border: 1px solid #eee;
  border-radius: 10px;
`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${props => props.small ? '1rem' : '1.3rem'};
  padding: .5rem;
  .financial--text{
    color: var(--palette-color--green-money);
  }
`;

export const ContainerPayments = styled(motion.div)`
  display: grid;
  grid-template-rows: auto;
  width: 100%;
  grid-column: span 2;
  gap: 1rem;
  background: var(--white-color);
  border-radius: 10px;
  padding: .5rem;
  border: 1px solid rgba(0,0,0,0.16);
  box-shadow: var(--primary-color-shadow-opacity-H) 0px 5px 6px, var(--primary-color-shadow-opacity-L)  0px 5px 6px;
  @media screen and (max-width:768px) {
    overflow-x: auto;
    grid-column: span 1;
  }

`;

export const ContainerPaymentsContent = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  background: var(--white-color);
  padding: .5rem;
  font-size: 1rem;
  border-bottom: 1px solid #eee;
  position: relative;

  span{
    width: 20%;
    text-align: center;
    color: ${props => props.header ? 'var(--font-color)' : ''};
    font-size: ${props => props.header ? '1.2rem' : '1rem'};
  }
  .name{
      text-align: left;
    }
  .situation{
    color: ${props => props.late ? 'var(--red-color)' : ''}
  }
  .financial--text{
    color: ${props => props.header ? '' : 'var(--palette-color--green-money);'};
    text-align: right;
  }
  @media screen and (max-width:768px) {
    gap: 5rem;
    span{
      font-size: ${props => props.header ? '1rem' : '1rem'};
    }
  }
`;
