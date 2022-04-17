import Header from './Components/Header';
import { OuterLayout } from './styled/Layouts';
import styled from 'styled-components';
import CardSection from './Components/CardSection';
import ChartSection from './Components/ChartSection';
import MessagingSection from './Components/MessagingSection';
import PaymentSection from './Components/PaymentSection';
import FAQSection from './Components/FAQSection';
import Footer from './Components/Footer';

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
          <FAQSection />
        </MainStyled>
      </OuterLayout>
      <Footer />
    </>
  );
}

export default App;
