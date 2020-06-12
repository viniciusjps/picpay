import React from 'react';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Wrapper,
  WrapperContainer,
  PayContent,
  Services,
  ServiceTitle,
  ServiceItem,
  ServiceImg,
  ServiceContent,
  ServiceHeader,
  ServiceLabel,
  ServiceSubtitle
} from './styles';

import Suggestions from '../../components/Suggestions';
import PayHeader from '../../components/PayHeader';

import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';


const items = [
  {
    image: img6,
    label: 'Pagar Conta',
    subtitle: 'Pague sua conta de luz, água, boletos bancários etc.'
  },
  {
    image: img7,
    label: 'Cobrar',
    subtitle: 'Cobre um amigo'
  },
  {
    image: img3,
    label: 'Cartão de Transporte',
    subtitle: 'Bilhete Único SP, Diadema, Ribeirão Preto, Pelotas, Taubaté e Sorocaba'
  },
  {
    image: img2,
    label: 'Uber Pré Pago',
    subtitle: 'Compre créditos para viajar de Uber'
  },
  {
    image: img4,
    label: 'SKY TV Pré-Pago',
    subtitle: 'Recarga da SKY TV'
  },
  {
    image: img1,
    label: 'Recarga de Celular',
    subtitle: 'Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomel, Correios'
  }
];

export default function Pay() {
  return (
    <Wrapper>
      <WrapperContainer>
        <PayHeader />
        <Suggestions page={'Pay'} />
        <PayContent>
          <Services>
            <ServiceTitle>Serviços</ServiceTitle>
            {items.map((item, i) => (
              <ServiceItem key={i}>
                <ServiceImg source={item.image} />
                <ServiceContent>
                  <ServiceHeader>
                    <ServiceLabel>{item.label}</ServiceLabel>
                    <FontAwesome name="shopping-bag" color={'rgba(255,255,255,0.5)'} />
                  </ServiceHeader>
                  <ServiceSubtitle>{item.subtitle}</ServiceSubtitle>
                </ServiceContent>
                <MaterialCommunityIcons name="dots-vertical" color={'#fff'} size={22} />
              </ServiceItem>
            ))}
          </Services>
        </PayContent>
      </WrapperContainer>
    </Wrapper>
  );
}
