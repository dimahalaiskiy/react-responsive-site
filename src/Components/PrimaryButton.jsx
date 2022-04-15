import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: var(--accent-pink);
  padding: 0.7rem 2rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const PrimaryButton = ({ name }) => {
  return <ButtonStyled>{name}</ButtonStyled>;
};

export default PrimaryButton;
