import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styled/Layouts';
import ChartStats from './ChartStats';
import chart from '../img/chart.svg';

const ChartStyled = styled.section`
  .chart-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .chart-left {
      .stats {
        .stats-money {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
`;

const ChartSection = () => {
  return (
    <ChartStyled>
      <InnerLayout>
        <div className='chart-container'>
          <div className='chart-left'>
            <div className='stats'>
              <div className='stats-money'>
                <ChartStats name={'Balance'} amount={'$250'} />
                <ChartStats name={'Last Transaction'} amount={'$1,000'} />
              </div>
              <img src={chart} alt='' />
            </div>
          </div>
          <div className='chart-right'></div>
        </div>
      </InnerLayout>
    </ChartStyled>
  );
};

export default ChartSection;
