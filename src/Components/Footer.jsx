import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styled/Layouts';
import logo from '../img/logo.svg';

const FooterStyled = styled.footer`
  padding: 0 18rem;
  background-color: #dce2f0;

  @media screen and (max-width: 1347px) {
    padding: 5rem 14rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 5rem 4rem;
  }

  .footer-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 690px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .bottom-nav {
    display: flex;
    justify-content: space-between;
    li {
      padding: 2rem 0;
      color: #16194f;
    }
  }

  .logo-container {
    display: flex;
    align-items: center;
    @media screen and (max-width: 690px) {
      display: none;
    }
    img {
      width: 90px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <InnerLayout>
        <div className='footer-container'>
          <div className='logo-container'>
            <div className='logo-items'>
              <img src={logo} alt='' />
              <p>
                Copyright @2022 LoremIpsum. <br />
                All rights reserved.
              </p>
            </div>
          </div>
          <ul className='bottom-nav'>
            <div className='links1'>
              <li>
                <a href='#'>Team</a>
              </li>
              <li>
                <a href='#'>Press</a>
              </li>
              <li>
                <a href='#'>Fees</a>
              </li>
            </div>
            <div className='links2'>
              <li>
                <a href='#'>Services</a>
              </li>
              <li>
                <a href='#'>Projects</a>
              </li>
              <li>
                <a href='#'>Affiliate</a>
              </li>
            </div>
            <div className='links3'>
              <li>
                <a href='#'>Terms of use</a>
              </li>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
              <li>
                <a href='#'>Contacts us</a>
              </li>
            </div>
          </ul>
        </div>
      </InnerLayout>
    </FooterStyled>
  );
};

export default Footer;
