import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContainerForm = styled(motion.form)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  font-size: 3rem;
  background: var(--background-color);
  padding: 1.8rem;
  gap: 1.8rem;
  overflow-x: hidden;

  .ContainerForm--footer{
    width: 100%;
    button{
      outline: none;
      border: none;
      font-size: 17px;
      padding: 1em 1.5em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      gap: 5px;
      color: var(--white-color);
      transition: transform 0.2s;
      font-family: var(--main-font);
      background: var(--primary-color);
      margin-bottom: 4rem;

      &:hover {
        transform: scale(1.02);
        cursor: pointer;
        box-shadow: var(--shadow);
      }

      @media screen and (max-width:768px) {
        box-shadow: var(--shadow);
      }
    }

  }

  @media screen and (max-width:768px) {
    padding: .8rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const ContainerInfo = styled(motion.div)`
  position: relative;
  width: 100%;
  background: ${(props) => props.bgColor};
  color: var(--font-color);
  border-radius: 10px;
  padding: 1rem;
  font-size: 1rem;
  font-family: var(--main-font);
  box-shadow: var(--shadow);

  .header{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: .5em;
    margin-bottom: 2rem;
    @media screen and (max-width:768px) {
      margin-bottom: 1rem;
    }
  }

  .body{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    gap: .5em;
    flex-direction: column;
  }

  .footer{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: .5em;
    flex-direction: column;

    button{
      outline: none;
      border: none;
      font-size: 17px;
      padding: 1em 1.5em;
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

  }
  @media screen and (max-width:768px) {
    margin-bottom: ${props => props.marginB ? '4rem' : ''};
  }
`;

export const FormInputContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 2rem;
  .input__label{
    width: 100%;
    color: var(--font-color);

  }
  @media screen and (max-width:768px) {
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

`;

export const InputField = styled.input`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--font-color);
  background-color: var(--card-background-color);
  background-clip: padding-box;
  border: 1px solid var(--border-color);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-radius: 5px;
  transition: all .15s ease-in-out;
  margin-top: 5px;

  &:focus{
    box-shadow: 0px 1px 8px var(--primary-color);
  }

  &:disabled{
    background: rgba(0,0,0,0);
    padding: .105rem 0;
    font-family: var(--main-font);
    color: var(--font-color);
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #ccc;
  }
`;

export const SelectField = styled.select`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--font-color);
  background-color: var(--card-background-color);
  background-clip: padding-box;
  border: 1px solid var(--border-color);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-radius: 5px;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  margin-top: 5px;

  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right .75rem center;
  background-size: 16px 12px;

  &:focus{
    box-shadow: 0px 1px 8px var(--primary-color);
  }
`;

export const TextAreaField = styled.textarea`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--font-color);
  background-color: var(--card-background-color);
  background-clip: padding-box;
  border: 1px solid var(--border-color);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-radius: 5px;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  margin-top: 5px;
  &:focus{
    box-shadow: 0px 1px 8px var(--primary-color);
  }

`;

export const AvailableHoursContainer = styled.div`
  width: 100%;
  background: ${props => props.bgColor ? props.bgColor : 'var(--card-background-color)'};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  font-family: var(--main-font);
  border-radius: 10px;
  gap: 1rem;
  .AvailableHoursContainer--header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5em;
    border-bottom: 1px solid var(--border-color);
    width: 100%;
  }

  .AvailableHoursContainer--body{
    width: 100%;

    .AvailableHoursContainer--body--header{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .5em;
      color: var(--font-color);

      span{
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover{
          transform: scale(1.5);
          color: var(--primary-color);
        }
        @media screen and (max-width:768px) {
          &:hover{
            transform: scale(1);
            color: var(--font-color);
          }
        }
      }
    }
    .AvailableHoursContainer--body--body{
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(3, 1fr);
      padding: 1em;
      width: 100%;
      gap: .5rem;

      @media screen and (max-width:768px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(5, 1fr);
        padding: .5em;
      }

    }
  }
`;

// Need fix, Not Forget

export const WeekHour = styled(motion.span)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => {
    if (!props.available) return 'var(--border-color)';
    if (props.selected) return 'var(--selected-field-color)';
    return 'var(--font-color)';
  }};
  background: ${props => {
    if (!props.available) return 'var(--red-color)';
    if (props.selected) return 'var(--selected-field-bg)';
    return 'var(--card-background-color)';
  }};
  padding: 1em;
  border-radius: 10px;
  border: 0.5px solid var(--border-color);
  transition: all 0.2s ease-in;

  &:hover{
    box-shadow: ${props => props.available ? '0 0 8px var(--primary-color)' : ''};
    cursor: ${props => props.available ? 'pointer' : 'initial'};
  }
  @media screen and (max-width:768px) {
    &:hover{
      box-shadow:none;
    }
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
  height: 600px;

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
  background: var(--card-background-color);
  border-radius: 10px 10px 0 0;
  .header--left{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
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
`;

export const HeaderSpan = styled.span`
  cursor: pointer;
  color: ${props => props.selectedHeader ? 'var(--primary-color)' : 'var(--header-span-color)'};
  transition: all 0.2s ease;
  &:hover{
    color: var(--primary-color)
  }
`;

export const ModalBody = styled(motion.div)`
  width: 100%;
  background: var(--card-background-color);
  height: 100%;

  .field--container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: var(--card-background-color);
    gap: .5rem;
  }

  .custom--field--container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: var(--card-background-color);

    label{
      width: 100%;
      color: var(--font-color);
      input{
        border: 1px solid var(--border-color);
      }
    }
  }

  @media screen and (max-width:1200px) {
    overflow-y: auto;

    .field--container{
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width:768px) {
    overflow-y: auto;

    .field--container{
      grid-template-columns: 1fr;
    }
  }
`;

export const ModalField = styled(motion.div)`
  width: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  cursor: pointer;
  background: ${props => !props.selected ? 'var(--card-background-color)' : 'var(--primary-color)'};
  color: ${props => props.selected ? 'var(--card-background-color)' : 'var(--font-color)'};
  transition: all 0.2s ease-in;

  &:hover{
    box-shadow: 0 0 8px var(--font-color);
  }

  @media screen and (max-width:768px) {
    padding: ${props => props.selected ? '1rem' : '1.5rem 1rem'};

    &:hover{
      box-shadow: none;
    }
  }
`;

export const ModalFooter = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  width: 100%;
  background: var(--card-background-color);
  border-radius: 0 0 10px 10px;
  gap: 1rem;

  button{
    outline: none;
    border: none;
    font-size: 17px;
    padding: 1em 2em;
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

`;

export const AppointmentDurationContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  background: var(--card-background-color);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  font-family: var(--main-font);
  border-radius: 10px;
  gap: 1rem; // 1945824

  .AppointmentDurationContainer--header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5em;
    border-bottom: 1px solid var(--border-color);
    width: 100%;
  }

  .AppointmentDurationContainer--body{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 1rem;
    padding: .5em;
    width: 100%;
    @media screen and (max-width:768px) {
    grid-template-columns: repeat(2, 1fr);
    }
  }


`;

export const DurationField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 1em;
  width: 100%;
  border-radius: 10px;
  background: var(--white-color);
  background: ${props => !props.selected ? 'var(--card-background-color)' : 'var(--selected-field-bg)'};
  color: ${props => props.selected ? 'var(--selected-field-color)' : 'var(--font-color)'};
  transition: all 0.2s ease-in;
  border: 1px solid var(--border-color);
  cursor: pointer;
  &:hover{
    box-shadow: 0 0 8px var(--font-color);
  }

  @media screen and (max-width:768px) {
    &:hover{
      box-shadow: none;
    }
  }
`;

export const PaymentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${props => props.col ? 'column' : 'row'};
  gap: 1rem;

  label{
    color: var(--font-color);
    width: 100%;
    input{
      border: 1px solid var(--border-color);
    }
  }

  @media screen and (max-width:768px) {
    flex-direction: column;
  }
`;

export const PaymentModalityContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--card-background-color);
  border-radius: 10px;

  .PaymentModalityContainer--header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5em;
    border-bottom: 1px solid var(--border-color);
    width: 100%;
  }
  .PaymentModalityContainer--body{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em;
    width: 100%;
    gap: 1rem;
  }
  .PaymentModalityContainer--body--due{
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
    padding: .5em;
    width: 100%;
    label{
      color: var(--font-color);
      grid-column: span 6;
    }
    @media screen and (max-width:768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const ModalityField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 1em;
  width: 100%;
  border-radius: 10px;
  background: ${props => !props.selected ? 'var(--card-background-color)' : 'var(--selected-field-bg)'};
  color: ${props => props.selected ? 'var(--selected-field-color)' : 'var(--font-color)'};
  transition: all 0.2s ease-in;
  border: 1px solid var(--border-color);
  cursor: pointer;
  &:hover{
    box-shadow: 0 0 8px var(--primary-color);
  }

  @media screen and (max-width:768px) {
    &:hover{
      box-shadow: none;
    }
  }
`;
