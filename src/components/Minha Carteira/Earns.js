import React from 'react';
import {
  BoxGrid,
  Card,
  CardContent,
  Container,
  ContainerHeader,
  EarnsMontlyWeeklyContainer,
  EarnsDailyContainer,
  EarnsDayContainer,
} from './styled';

const boxVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export default function EarnsContainer({ montlyEarn, weeklyEarn }) {
  return (
    <Container
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.1,
        duration: 0.1,
        type: 'spring',
        stiffness: 120,
      }}
    >
      <ContainerHeader>Ganhos</ContainerHeader>
      <div className="row2">
        <WeeklyMontlyInfo montlyEarn={montlyEarn} weeklyEarn={weeklyEarn} />
        <DailyInfo />
      </div>
    </Container>
  );
}

function InfoCard({ text, earns, small }) {
  return (
    <Card>
      <CardContent small={small}>
        <span>{text}</span>
        <span className="financial--text">
          R$
          {earns}
        </span>
      </CardContent>
    </Card>
  );
}

function WeeklyMontlyInfo({ montlyEarn, weeklyEarn }) {
  return (
    <EarnsMontlyWeeklyContainer>
      <InfoCard text="Semanal" earns={weeklyEarn} />
      <InfoCard text="Mensal" earns={montlyEarn} />
    </EarnsMontlyWeeklyContainer>
  );
}

function DailyInfo({ weeklyEarn }) {
  const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabádo'];

  return (
    <EarnsDayContainer>
      <EarnsDailyContainer>
        {days.map(day => (
          <InfoCard small text={day} earns={weeklyEarn} />
        ))}
      </EarnsDailyContainer>
    </EarnsDayContainer>
  );
}
