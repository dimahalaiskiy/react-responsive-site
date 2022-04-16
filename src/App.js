import Header from './Components/Header';
import { OuterLayout } from './styled/Layouts';
import styled from 'styled-components';
import CardSection from './Components/CardSection';
import ChartSection from './Components/ChartSection';

const MainStyled = styled.main``;

function App() {
  return (
    <>
      <Header></Header>
      <OuterLayout>
        <MainStyled>
          <CardSection></CardSection>
          <ChartSection />
        </MainStyled>
      </OuterLayout>
    </>
  );
}

export default App;
