import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styled/Layouts';
import lines from '../img/lines.svg';
import Question from './Question';
import questions from '../questions';

const FaqStyled = styled.section`
  .c-para {
    width: 60%;
    margin: 0 auto;
  }

  .lines {
    position: absolute;
    left: 0;
    top: 212%;
    width: 100%;
    z-index: -1;
    img {
      width: 100%;
    }
  }

  .questions-container {
    padding-top: 4rem;
  }
`;

const FAQSection = () => {
  return (
    <FaqStyled>
      <InnerLayout>
        <h3 className='small-heading'>
          Frequemtly <span>asked questions</span>
        </h3>
        <p className='c-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          soluta sunt ullam ab dolor rerum quasi autem fugiat corporis officiis
          dolorum inventore.
        </p>
        <div className='lines'>
          <img src={lines} alt='' />
        </div>
        <div className='questions-container'>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </div>
      </InnerLayout>
    </FaqStyled>
  );
};

export default FAQSection;
