import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styled/Layouts';
import Card from './Card';
import card from '../img/creditcard.svg';
import active from '../img/active.svg';
import inactive from '../img/inactive.svg';
import check from '../img/check.svg';
import checkDisabled from '../img/check-disabled.svg';

const PaymentStyled = styled.section`
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    padding-top: 7.5rem;
    @media screen and (max-width: 689px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const PaymentSection = () => {
  return (
    <PaymentStyled>
      <InnerLayout>
        <h3 className='small-heading'>
          An exceptional service, <span>at the right price</span>
        </h3>
        <p className='c-para'>
          Start with our free plan and switch po premium as you grown.
        </p>
        <div className='card-container'>
          <Card
            account={'Free'}
            amount={'$0'}
            text={'Manage your business with a simple and efficient account.'}
            button={'Get Started'}
            card={card}
            active={active}
            inactive={inactive}
            check={check}
            checkDisabled={checkDisabled}
            text1={'10 free local transfers'}
            text2={'Free ATM withdrawals in Dollar up to $250 per month'}
            text3={'Free payment to other Draft accounts'}
            text4={'Prepaid debit cards'}
            text5={'Virtual cards'}
            text6={'Priotity 24/7 support'}
            text7={'Exchange 24 currencies'}
            text8={'Multi-user acces'}
          />
          <Card
            account={'Premiun'}
            amount={'$10'}
            text={'Manage your business with a simple and efficient account.'}
            button={'Get Started'}
            card={card}
            active={active}
            inactive={inactive}
            check={check}
            checkDisabled={checkDisabled}
            text1={'10 free local transfers'}
            text2={'Free ATM withdrawals in Dollar up to $250 per month'}
            text3={'Free payment to other Draft accounts'}
            text4={'Prepaid debit cards'}
            text5={'Virtual cards'}
            text6={'Priotity 24/7 support'}
            text7={'Exchange 24 currencies'}
            text8={'Multi-user acces'}
          />
        </div>
      </InnerLayout>
    </PaymentStyled>
  );
};

export default PaymentSection;
