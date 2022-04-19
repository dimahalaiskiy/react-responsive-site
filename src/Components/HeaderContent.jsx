import React from 'react';
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';
import phone from '../img/phone.svg';
import ring1 from '../img/ring_orange.svg';
import message1 from '../img/message_pink.svg';
import message2 from '../img/message_blue.svg';

const HeaderContentStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;

    .white {
      color: white;
    }
    h1 {
      font-size: 4rem;
      font-weight: 600;

      @media screen and (max-width: 700px) {
        font-size: 3rem;
      }
    }
    .white {
      padding: 1.4rem 0;
      line-height: 1.8rem;
      color: white;
    }
  }

  .right-content {
    position: relative;
    display: flex;
    justify-content: center;

    .phone {
      width: 80%;
    }

    .ring1 {
      position: absolute;
      bottom: 10%;
      right: 0;
      left: auto;
      animation: move2 20s infinite;
      animation-delay: 0.9s;
      transition: all 0.4s ease-in-out;
    }
    .message1 {
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
      animation: move 5s infinite;
      transition: all 0.4s ease-in-out;
    }
    .message2 {
      position: absolute;
      bottom: 15%;
      left: 0;
      right: auto;
      animation: move 8s infinite;
      animation-delay: 0.5s;
      transition: all 0.4s ease-in-out;
    }
  }

  // Header Animations

  .message1 {
    @keyframes move {
      0% {
        transform: translateX(0) rotate(0deg) scale(1) translateX(0);
      }
      50% {
        transform: translateX(-10px) rotate(20deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateX(0) rotate(0deg) scale(1) translateX(0);
      }
    }

    @keyframes move2 {
      0% {
        transform: translateX(0) rotate(0deg) scale(1) translateX(0);
      }
      50% {
        transform: translateX(-10px) rotate(100deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateX(0) rotate(0deg) scale(1) translateX(0);
      }
    }
  }
`;

const HeaderContent = () => {
  return (
    <HeaderContentStyle>
      <div className='left-content'>
        <div className='left-text-container'>
          <h1>Smart banking for freelancers</h1>
          <p className='white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit
            reiciendis neque eaque amet! Similique provident eos voluptatum.
            Dolorum asperiores incidunt tempora delectus soluta reprehenderit
            optio autem quos nulla fugiat!
          </p>
          <SecondaryButton name={'Register Now'} />
        </div>
      </div>
      <div className='right-content'>
        <img src={phone} alt='' className='phone' />
        <img src={ring1} alt='' className='ring1' />
        <img src={message1} alt='' className='message1' />
        <img src={message2} alt='' className='message2' />
      </div>
    </HeaderContentStyle>
  );
};

export default HeaderContent;
