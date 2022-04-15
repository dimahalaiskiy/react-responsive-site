import React from 'react';
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';

const HeaderContentStyle = styled.div``;

const HeaderContent = () => {
  return (
    <HeaderContentStyle>
      <div className='left-content'>
        <h1>Smart banking for freelancers</h1>
        <p className='white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit reiciendis neque eaque
          amet! Similique provident eos voluptatum. Dolorum asperiores incidunt tempora delectus
          soluta reprehenderit optio autem quos nulla fugiat!
        </p>
        <SecondaryButton name={'Register Now'} />
      </div>
      <div className='right-content'></div>
    </HeaderContentStyle>
  );
};

export default HeaderContent;
