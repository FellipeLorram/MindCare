import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { AvailableHoursContainer, WeekHour } from './styled';

const Data = {
  'Segunda-feira': [
    { '9:00': true },
    { '10:00': true },
    { '11:00': false },
    { '12:00': true },
    { '13:00': true },
    { '14:00': false },
    { '15:00': true },
    { '16:00': true },
    { '17:00': true },
    { '18:00': true },
    { '19:00': true },
    { '20:00': true },
    { '21:00': true },
  ],
  'Terça-feira': [
    { '9:00': true },
    { '10:00': true },
    { '11:00': true },
    { '12:00': true },
    { '13:00': true },
    { '14:00': false },
    { '15:00': true },
    { '16:00': true },
    { '17:00': true },
    { '18:00': true },
    { '19:00': true },
    { '20:00': false },
    { '21:00': true },
  ],
  'Quarta-feira': [
    { '9:00': false },
    { '10:00': true },
    { '11:00': true },
    { '12:00': true },
    { '13:00': true },
    { '14:00': true },
    { '15:00': true },
    { '16:00': true },
    { '17:00': true },
    { '18:00': false },
    { '19:00': true },
    { '20:00': true },
    { '21:00': false },
  ],
  'Quinta-feira': [
    { '9:00': true },
    { '10:00': true },
    { '11:00': true },
    { '12:00': true },
    { '13:00': true },
    { '14:00': true },
    { '15:00': true },
    { '16:00': true },
    { '17:00': true },
    { '18:00': true },
    { '19:00': true },
    { '20:00': true },
    { '21:00': true },
  ],
  'Sexta-feira': [
    { '9:00': true },
    { '10:00': true },
    { '11:00': true },
    { '12:00': false },
    { '13:00': true },
    { '14:00': true },
    { '15:00': true },
    { '16:00': true },
    { '17:00': true },
    { '18:00': true },
    { '19:00': true },
    { '20:00': false },
    { '21:00': true },
  ],
  'Sabádo': [
    { '9:00': true },
    { '10:00': false },
    { '11:00': true },
    { '12:00': true },
    { '13:00': true },
    { '14:00': true },
    { '15:00': true },
    { '16:00': true },
    { '17:00': false },
    { '18:00': true },
    { '19:00': true },
    { '20:00': true },
    { '21:00': true },
  ],
};

export default function AvailableHours() {
  const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabádo'];
  const [selectedHour, setSelectedHour] = useState('');
  const [currentDay, setCurrentDay] = useState(0);
  const [day, setDay] = useState(Data[days[currentDay]]);
  const [selected, setSelected] = useState([true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  let count = 0;

  useEffect(() => setDay(Data[days[currentDay]]), [currentDay]);

  const handleClickChevron = (e) => {
    if (e.target.classList.contains('left')) {
      if (currentDay === 0) setCurrentDay(5);
      else setCurrentDay(currentDay - 1);
    } else if (currentDay === 5) setCurrentDay(0);
    else setCurrentDay(currentDay + 1);
  };

  return (
    <AvailableHoursContainer>
      <div className="AvailableHoursContainer--header">
        Horários Disponíveis
      </div>
      <div className="AvailableHoursContainer--body">
        <header className="AvailableHoursContainer--body--header">
          <span
            onKeyUp={handleClickChevron}
            onClick={handleClickChevron}
            className="material-icons-outlined left"
            role="button"
            tabIndex={0}
          >
            chevron_left
          </span>
          {days[currentDay]}
          <span
            onKeyUp={handleClickChevron}
            onClick={handleClickChevron}
            className="material-icons-outlined"
            role="button"
            tabIndex={0}
          >
            chevron_right
          </span>
        </header>

        <div className="AvailableHoursContainer--body--body">
          {day.map(hour => {
            count += 1;
            return (
              <DayHour
                setSelected={setSelected}
                index={count - 1}
                selected={selected[count - 1]}
                setSelectedHour={setSelectedHour}
                key={Object.keys(hour)}
                available={hour[Object.keys(hour)]}
                text={Object.keys(hour)}
              />
            );
          })}
        </div>
      </div>
    </AvailableHoursContainer>
  );
}

function DayHour({
  available,
  text,
  setSelectedHour,
  setSelected,
  selected,
  index,
}) {
  const handleClickWeekHour = (availableHour, hour) => {
    if (availableHour) {
      setSelectedHour(text[0]);
      setSelected(prevArr => {
        const newArr = prevArr.map(item => false);
        newArr[index] = true;
        return newArr;
      });
    }
  };

  return (
    <AnimatePresence>
      <WeekHour
        selected={selected}
        onClick={() => handleClickWeekHour(available, text)}
        available={available}
      >
        {text}
      </WeekHour>
    </AnimatePresence>
  );
}
