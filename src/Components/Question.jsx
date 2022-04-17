import React, { useState } from 'react';
import styled from 'styled-components';
import plus from '../img/plus.svg';
import minus from '../img/minus.svg';

const QuestionStyled = styled.div`
  background-color: #fff;
  margin: 1rem 0;
  padding: 1.4rem 1rem;
  border-radius: 24px;
  transition: all 0.4s ease-in-out;

  p {
    transition: all 0.4s ease-in-out;
  }

  h4 {
    color: #16194f;
    font-size: 1.3rem;
  }
  .toggle-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
`;

const Question = ({ title, description }) => {
  const [toggle, setToggle] = useState(false);

  const btnToggler = () => {
    setToggle(!toggle);
  };

  return (
    <QuestionStyled>
      <div className='question-container'>
        <div className='toggle-title'>
          <h4>{title}</h4>
          <button onClick={btnToggler}>
            {toggle ? <img src={minus} alt='' /> : <img src={plus} alt='' />}
          </button>
        </div>
        {toggle && <p>{description}</p>}
      </div>
    </QuestionStyled>
  );
};

export default Question;