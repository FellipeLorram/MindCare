import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLinks,
  StyledLink,
  LinkText,
  LinkIcon,
} from './styled';

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
  return (
    <NavLinks>
      <StyledLink IsActiveLink={topReference === linkText} to={toLink}>
        <LinkText>{linkText}</LinkText>
        <LinkIcon
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
