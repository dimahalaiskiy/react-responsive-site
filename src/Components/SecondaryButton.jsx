import React from 'react';
import styled from 'styled-components';

const SecondaryButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 0.7rem 2rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const SecondaryButton = ({ name }) => {
  return <SecondaryButtonStyled>{name}</SecondaryButtonStyled>;
};

export default SecondaryButton;
