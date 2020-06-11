import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Container, WrapperContainer, Wrapper, Header, BalanceContainer, BalanceTitle, Balance } from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function Home() {
  return (
    <WrapperContainer>
      <Wrapper>
        <Container>
          <Header>
            <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
            <BalanceContainer>
              <BalanceTitle>Meu saldo</BalanceTitle>
              <Balance>R$ 315,00</Balance>
            </BalanceContainer>
            <AntDesign name="gift" size={30} color="#10c86e" />
          </Header>
          <Suggestions />
          <Activities />
          <Tips />
          <Banner />
        </Container>
      </Wrapper >
    </WrapperContainer>
  );
}
