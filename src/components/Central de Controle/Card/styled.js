import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CardBox = styled(motion.div)`
  background: var(--white-color);
  padding: var(--main-padding);
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  cursor: pointer;
  transition: transform 0.2s, border 0.2s, box-shadow 0.2s;
  z-index: 1;
  position: relative;

  &:hover{
    box-shadow: var(--primary-color-shadow-opacity-H) 0px 3px 6px, var(--primary-color-shadow-opacity-L)  0px 3px 6px;
  }

  @media screen and (max-width:768px) {
    min-width: 280px;
    box-shadow: var(--primary-color-shadow-opacity-H) 0px 3px 6px, var(--primary-color-shadow-opacity-L)  0px 3px 6px;
  }

`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: var(--second-padding);
    padding-top: 0;
    width: 100%;
    margin-bottom: 0.8rem;
    color: var(--font-color);
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  border-radius: 10px;
  padding: 0.5em;
  margin-bottom: 0.5em;
  border-bottom: 1px solid #f5f5f5;
  transition: all 0.2s ease-in-out;

  &:hover{
    box-shadow: var(--primary-color-shadow-opacity-H) 0px 3px 6px, var(--primary-color-shadow-opacity-L)  0px 3px 6px;
    padding: 0.5em 0.7em;
  }

  .info_icon{
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  .info_number-financeiro{
    color: #73b92d;
  }
  .info_number-atrasado{
    color: #d75b5b;
  }
`;

export const CardContainer = styled(motion.div)`
  background: var(--white-color);
  padding: var(--main-padding);
  border-radius: 20px;
  cursor: pointer;
  transition: border 0.2s, box-shadow 0.2s;
  border: 0.5px solid rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //gap: 5px;

  &:hover {
    box-shadow: var(--primary-color-shadow-opacity-H) 0px 3px 6px, var(--primary-color-shadow-opacity-L)  0px 3px 6px;

  }
  @media screen and (max-width:768px) {
    min-width: 280px;
   box-shadow: var(--primary-color-shadow-opacity-H) 0px 3px 6px, var(--primary-color-shadow-opacity-L)  0px 3px 6px;
  }

`;

export const CardContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: .2rem;
  font-size: 1.2rem;
  padding: .5rem ;
  gap: 1rem;

  span{
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s ease-in-out;
    font-size: 1.2rem;
  }

  .button{
    background: var(--darkerYellow-color);
    padding: .5rem;
    width: 30%;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &:hover{
      filter: brightness(110%);
    }
  }

  .burlywood{
    color: burlywood;
  }

  .brown{
    color: brown;
  }

  &.bordered{
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.16);
  }
`;

export const Note = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  border-radius: 10px;
  padding: var(--second-padding);
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid #f5f5f5;
  transition: box-shadow 0.2s;
`;

export const InfoText = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoTable = styled.table`
  width: 100%;
  height: 100%;

  thead td {
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 0.5em;
    text-align: center;
    font-size: 1rem;
  }

  thead td:nth-child(2) {
    border-right: 1px solid #f5f5f5;
  }

  tbody tr:nth-child(1) td{
    margin-bottom: 1rem;
  }

  tbody td {
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 0;
    text-align: center;
    font-size: 1rem;
  }

  tbody tr td:nth-child(1) {
    border-bottom: 1px solid #f5f5f5;
    text-align: left;
  }

  tbody tr td:nth-child(2) {
    border-right: 1px solid #f5f5f5;
  }

  tbody tr:nth-child(2) td {
    border-bottom: 0;
    color: #73b92d;
  }

  tbody tr:nth-child(2) td:nth-child(1) {
    border-bottom: 0;
    color: #000;
  }
`;

export const ModalBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0,0,0,0.5);
  z-index: 6;
`;

export const ModalContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 60%;
  z-index: 7;
  font-family: var(--main-font);
  font-size: 1.2rem;
  height: 90%;

  &.large{
    width: 100%;
    max-width: 80%;
    @media screen and (max-width:768px) {
      width: 100%;
      max-width: 95%;
    }
  }

  @media screen and (max-width:1200px) {
    width: 100%;
    max-width: 80%;
    max-height: 500px;
  }

  @media screen and (max-width:768px) {
    width: 100%;
    max-width: 90%;
    max-height: 460px;
  }
`;

export const ModalHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  background: var(--white-color);
  border-radius: 10px 10px 0 0;

  &.end{
    justify-content: flex-end;
    padding: .5rem 1rem;
  }

  .header--day{
    font-size: 2rem;
    color: var(--primary-color);
  }
  .header--lembretes{
    font-size: 2rem;
    color: var(--darkerYellow-color);
  }

  .material-icons-outlined{
    cursor: pointer;
    transition: all .2s ease-in-out;
    background: var(--primary-color-shadow-opacity-L);
    border-radius: 50%;
    padding: .2em;
    color:  var(--primary-color);

    &:hover{
      transform: scale(1.1);
      color: red;
    }
  }
  .material-icons-outlined.remembers{
    background: var(--darkerYellow-color--opacity);
    color: var(--white-color);
    &:hover{
      transform: scale(1.1);
      color: red;
    }
  }
`;

export const ModalBody = styled(motion.div)`
  width: 100%;
  background: var(--white-color);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1.5rem;
  padding: 1rem;
  overflow-y: auto;

  @media screen and (max-width:768px) {
    padding: .5rem;
    gap: .5rem;
    height: 100%;
  }
`;

export const ModalBodyRemembers = styled(motion.div)`
  width: 100%;
  background: var(--white-color);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  padding: 1rem;
  overflow-y: auto;
  justify-content: center;

  @media screen and (max-width:768px) {
    padding: .5rem;
    gap: .5rem;
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ModalBodyContent = styled(motion.div)`
  width: 100%;
  background: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem .5rem .5rem 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  gap: .5rem;
  position: relative;

  .modalBody--left-side{
    background: var(--white-color);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    flex-grow: 1;

    .hour{
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #eee;
      padding: 0 1em;
    }

    @media screen and (max-width:768px) {
      justify-content: flex-start;
      width: 70%;
      gap: 0;
    }

  }

  .modalBody--right-side{
    background: var(--white-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    @media screen and (max-width:768px) {
      justify-content: center;
      width: 30%;
      flex-direction: column;
      gap: .2rem;
      button{
        width: 100%;
        font-size: 14px;
      }
    }
  }
  &:hover{
    box-shadow: var(--primary-color-shadow-opacity-H) 0px 3px 6px, var(--primary-color-shadow-opacity-L)  0px 3px 6px;
    padding: .5rem;
    border-radius: 10px;
  }

  @media screen and (max-width:768px) {
    padding: .5rem 0;
    border-bottom: 1px solid #eee;

    &:hover{
      box-shadow: none;
      padding: initial;
      border-radius: 0px;
    }
  }
`;

export const ModalFooter = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: .5rem 1rem;
  width: 100%;
  background: var(--white-color);
  border-radius: 0 0 10px 10px;
  @media screen and (max-width:768px) {
  }
`;

export const StyledLink = styled(Link)`
    color: #ccc;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    font-style: italic;
    font-size: 1rem;

    &:hover{
      color: var(--primary-color)
    }
`;

export const AddRemember = styled.div`
  width: 100%;
  height: 150px;
  background: var(--darkerYellow-color--opacity);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0,0,0,0.1) 0px 3px 6px, rgba(0,0,0,0.2) 0px 3px 6px;

  &:hover{
    .material-icons-outlined{
      font-size: 66px;
    }
  }

  .material-icons-outlined{
    font-size: 46px;
    color: var(--darkerYellow-color);
    transition: all .2s ease-in-out;

  }



`;

export const Remember = styled.div`
  width: 100%;
  height: 150px;
  padding: .5em;
  padding-bottom: 0;
  background: var(--white-color);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0,0,0,0.1) 0px 3px 6px, rgba(0,0,0,0.2) 0px 3px 6px;
  position: relative;
  transition: all 0.2s ease-in-out;

  &.editing{
    grid-column: span 3;
    grid-row: 1;
    height: 300px;
    @media screen and (max-width:768px) {
      grid-column: span 2;
    }

  }

  textarea{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 17px;
    font-family: var(--main-font);
    resize: none;

    &.toDelete{
      opacity: 0.5;
    }
  }
  textarea:disabled{
    background: none;
  }
  .remember-footer{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width:768px) {
      padding: .2rem 0;
    }
  }
  .Date{
    color: #ccc;
    padding: .5rem;
    @media screen and (max-width:768px) {
      font-size: 14px;
      padding: 0;
    }
  }
  .delete_edit_container{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .3rem;
    @media screen and (max-width:768px) {
      font-size: 14px;
    }
  }
  .material-icons-outlined.trash{
    color: #ffb3b3;
  }
  .material-icons.trash{
    color: #ff0000;
  }
  .material-icons-outlined.edit{
    color: #9999ff;
  }
  .material-icons.edit{
    color: #0000ff;
  }
  .delete-confirm{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    background: rgba(255,0,0,0.2);
    color: rgba(255,0,0,0.6);;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
    transition: all 0.1s ease-in-out;
    &:hover{
      color: rgba(255,0,0,1);
      font-size: 20px;
    }
    &.appear{
      display: flex;
      animation: NiceAppear 0.2s ease-in-out;
    }
  }
`;
