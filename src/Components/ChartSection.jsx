import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styled/Layouts';
import ChartStats from './ChartStats';
import chart from '../img/chart.svg';
import AnimatedButton from './AnimatedButton';

const ChartStyled = styled.section`
  .chart-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .chart-left {
      width: 80%;
      .stats {
        img {
          width: 100%;
          box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
          border-radius: 62px;
        }
        .stats-money {
          display: flex;
          justify-content: space-between;
          padding-bottom: 1.3rem;
        }
      }
    }
    .chart-right {
      padding-left: 2rem;
      p {
        padding: 1.3rem 0;
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
          <div className='chart-right'>
            <h2 className='secondary-heading'>
              Manage your financses like a pro in no time
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quod distinctio ipsam deleniti repellendus. Magnam rerum culpa
              error accusamus quas aliquid animi vitae laudantium provident!
            </p>
            <AnimatedButton name={'Learn More'} />
          </div>
        </div>
      </InnerLayout>
    </ChartStyled>
  );
};

export default ChartSection;
