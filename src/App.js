import Header from './Components/Header';
import { OuterLayout } from './styled/Layouts';
import styled from 'styled-components';
import CardSection from './Components/CardSection';
import ChartSection from './Components/ChartSection';
import MessagingSection from './Components/MessagingSection';
import PaymentSection from './Components/PaymentSection';

const MainStyled = styled.main``;

function App() {
  return (
    <>
      <Header></Header>
      <OuterLayout>
        <MainStyled>
          <CardSection></CardSection>
          <ChartSection />
          <MessagingSection />
          <PaymentSection />
        </MainStyled>
      </OuterLayout>
    </>
  );
}

export default App;
