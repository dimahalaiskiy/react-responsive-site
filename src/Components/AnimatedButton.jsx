import React from 'react';
import arrow from '../img/arrow.svg';
import blobtop from '../img/blob_top.svg';
import blobbottom from '../img/blob_bottom.svg';
import styled from 'styled-components';

const AnimatedButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 1rem 2rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  img {
    padding-left: 0.9rem;
  }

  &:hover {
    color: var(--accent-pink);
    .blob1 {
      transform: translateX(-100px);
    }
    .blob2 {
      transform: translateX(120px);
    }
    .arrow {
      padding-left: 1.4rem;
    }
  }
  .arrow {
    padding-left: 0.9rem;
    transition: all 0.4s ease-in-out;
  }

  .blob1,
  .blob2 {
    transition: all 0.4s ease-in-out;
    position: absolute;
    pointer-events: none;
  }

  .blob1 {
    top: 0;
    right: 0;
  }
  .blob2 {
    bottom: 0;
    left: 0;
  }
`;

const AnimatedButton = ({ name }) => {
  return (
    <AnimatedButtonStyled>
      {name}
      <img src={arrow} alt='' className='arrow' />
      <img src={blobtop} alt='' className='blob1' />
      <img src={blobbottom} alt='' className='blob2' />
    </AnimatedButtonStyled>
  );
};

export default AnimatedButton;
