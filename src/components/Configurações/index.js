import React, { useState } from 'react';
import { BoxGrid, Card } from './styled';
import MeuPerfil from './MeuPerfil';
import Temas from './Temas';

const boxVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export default function ContainerConfigs() {
  const [showModalMeuPerfil, setShowModalMeuPerfil] = useState(false);
  const [showModalPagamentos, setShowModalPagamentos] = useState(false);
  const [showModalTema, setShowModalTema] = useState(false);
  const [showModalLogout, setShowModalLogout] = useState(false);
  return (
    <>
      <MeuPerfil SetshowModal={setShowModalMeuPerfil} showModal={showModalMeuPerfil} />
      <Temas SetshowModal={setShowModalTema} showModal={showModalTema} />
      <BoxGrid>
        <CardConfig text="Meu Perfil" icon="account_circle" delay={0} setModal={setShowModalMeuPerfil} />
        <CardConfig text="Pagamento" icon="payments" delay={0.1} setModal={setShowModalPagamentos} />
        <CardConfig text="Tema" icon="dark_mode" delay={0.2} setModal={setShowModalTema} />
        <CardConfig text="Sair" icon="logout" delay={0.3} setModal={setShowModalLogout} />
      </BoxGrid>
    </>
  );
}

function CardConfig({
  text,
  icon,
  delay,
  setModal,
}) {
  const handleClick = () => {
    setModal(true);
  };
  return (
    <Card
      onClick={handleClick}
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      transition={{
        delay,
        duration: 0.1,
        damping: 10,
      }}
    >
      <span className="material-icons-outlined">
        {icon}
      </span>
      <span>{text}</span>
    </Card>
  );
}
