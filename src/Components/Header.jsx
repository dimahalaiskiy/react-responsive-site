import React from 'react';
import styled from 'styled-components';
import bg from '../img/bg.svg';
import HeaderContent from './HeaderContent';
import Navigation from './Navigation';

const HeaderStyled = styled.header`
  min-height: 100vh;
  width: 100%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 100%;

  .header-content {
    padding: 2rem 18rem;
    @media screen and (max-width: 1347px) {
      padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px) {
      padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px) {
      padding: 5rem 4rem;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className='header-content'>
        <Navigation />
        <HeaderContent />
      </div>
    </HeaderStyled>
  );
};

export default Header;
