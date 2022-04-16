import React from 'react';
import styled from 'styled-components';

const ChartStatsStyled = styled.div`
  background-color: white;
  border-radius: 20px;
  border: 1px solid var(--border-colour);
  width: 15rem;
  padding: 2rem;
`;

const ChartStats = ({ name, amount }) => {
  return (
    <ChartStatsStyled>
      <p>{name}</p>
      <h4>{amount}</h4>
    </ChartStatsStyled>
  );
};

export default ChartStats;
