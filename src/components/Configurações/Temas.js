import { AnimatePresence } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/App/index';
import {
  Color,
  Indicator,
  ModalBodyThemes,
  Themes,
} from './styled';
import {
  ModalBackground,
  ModalContainer,
  ModalBody,
} from '../../styles/GlobalStyles';
import ModalHeaderAbstract from './ModalHeader';
import ModalFooterAbstract from './ModalFooter';
import dataThemeColors from './dataThemeColors';

const backDrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: '-100vh', scale: 0 },
  visible: { y: 0, scale: 1 },
  exit: { y: '-100vh', scale: 0 },
};

export default function Temas({ showModal, SetshowModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <ModalBackground
          variants={backDrop}
          animate="visible"
          initial="hidden"
          exit="exit"
        >
          <ModalContainer
            variants={modalVariants}
            transition={{ duration: 0.3 }}
          >
            <ModalHeaderAbstract text="Temas" SetshowModal={SetshowModal} />
            <Body />
            <ModalFooterAbstract SetshowModal={SetshowModal} />
          </ModalContainer>
        </ModalBackground>
      )}
    </AnimatePresence>
  );
}

function Body() {
  const [theme, setTheme] = useState(dataThemeColors);
  return (
    <ModalBody>
      <ModalBodyThemes>
        <Theme themeName="Default" themeColors={theme.default} />
        <Theme themeName="Summer" themeColors={theme.Summer} />
        <Theme themeName="Gray" themeColors={theme.Gray} />
        <Theme themeName="Carnaval" themeColors={theme.Carnaval} />
        <Theme themeName="DarkGreen" themeColors={theme.DarkGreen} />
      </ModalBodyThemes>
    </ModalBody>
  );
}

function Theme({ themeName, themeColors }) {
  const bodyContext = useContext(GlobalContext);
  const [selected, setSelected] = useState(bodyContext.Theme.themeName === themeName);

  useEffect(() => {
    setSelected(bodyContext.Theme.themeName === themeName);
  }, [bodyContext.Theme.themeName]);

  const handleClick = () => {
    bodyContext.setTheme(themeColors);
  };

  return (
    <Themes
      onClick={handleClick}
    >
      <div className="colors">
        <Color className="color" bg={themeColors.primaryColor} />
        <Color className="color" bg={themeColors.secondColor} />
        <Color className="color" bg={themeColors.backgroundColor} />
        <Color className="color" bg={themeColors.fontColor} />
      </div>
      <Indicator selected={selected}>
        <span className="select" />
        <span>{themeName}</span>
      </Indicator>
    </Themes>
  );
}
