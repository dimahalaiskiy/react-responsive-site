/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg';

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  min-width: 10vh;
  align-items: center;
  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }
`;

const Navigation = () => {
  return (
    <NavigationStyled>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Features</a>
        </li>
        <li>
          <a href='#'>Pricing</a>
        </li>
      </ul>
      <PrimaryButton name={'Sign Up'}></PrimaryButton>
    </NavigationStyled>
  );
};

export default Navigation;
