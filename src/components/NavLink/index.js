import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  NavLinks,
  StyledLink,
  LinkText,
  LinkIcon,
} from './styled';
import { GlobalContext } from '../../contexts/App/index';

const animateVariant = {
  initial: {
    rotate: ['5deg', 0, '-5deg'],
  },
  animate: { rotate: 0 },
};

export default function NavLink({
  linkText,
  linkIcon,
  toLink,
  topReference,
}) {
  const bodyContext = useContext(GlobalContext);
  const { themeName } = bodyContext.Theme;
  return (
    <NavLinks>
      <StyledLink isactivelink={topReference === linkText ? 'true' : 'false'} to={toLink}>
        <LinkText active={topReference === linkText} darkTheme={themeName === 'Black&White'}>{linkText}</LinkText>
        <LinkIcon
          active={topReference === linkText}
          darkTheme={themeName === 'Black&White'}
          className={topReference === linkText ? 'material-icons' : 'material-icons-outlined'}
          variants={topReference === linkText ? animateVariant : ''}
        >
          {linkIcon}
        </LinkIcon>
      </StyledLink>
    </NavLinks>
  );
}

NavLink.propTypes = {
  linkText: PropTypes.string.isRequired,
  linkIcon: PropTypes.string.isRequired,
};
