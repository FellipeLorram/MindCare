import React from 'react';
import {
  WeekBoxContainer,
  Week,
  WeekDayContainer,
} from './styled';
import WeekDay from './WeekContent';

export default function WeekContainer({ WeekDayInfos }) {
  return (
    <WeekBoxContainer
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.1,
        type: 'spring',
        stiffness: 120,
      }}
    >
      <Week>
        <WeekDayContainer>
          {WeekDayInfos.map(DataDay => (
            <WeekDay
              key={DataDay.Day}
              day={DataDay.Day}
              PatientPercent={DataDay.PatientPercent}
              DaytWeight={DataDay.DaytWeight}
              DayHours={DataDay.DayHours}
              DayEarns={DataDay.DayEarns}
            />
          ))}
        </WeekDayContainer>
      </Week>
    </WeekBoxContainer>
  );
}
