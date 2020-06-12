import React from 'react';

import {
  Container,
  Scroll,
  Header,
  Action,
  ActionPay,
  Option,
  Img,
  Label
} from './styles';

import Img1 from '../../images/01.png';
import Img2 from '../../images/02.png';
import Img3 from '../../images/03.png';
import Img4 from '../../images/04.png';
import Img5 from '../../images/05.png';
import Img6 from '../../images/06.png';
import Img7 from '../../images/07.png';


const items = [
  {
    img: Img5,
    label: 'Central de Doações'
  },
  {
    img: Img6,
    label: 'Pagar Conta'
  },
  {
    img: Img7,
    label: 'Cobrar'
  },
  {
    img: Img1,
    label: 'Recarga de Celular'
  },
  {
    img: Img2,
    label: 'Uber Pré Pago'
  },
  {
    img: Img3,
    label: 'Cartão de Transporte'
  },
  {
    img: Img4,
    label: 'SKY TV Pré-Pago'
  }
];

const header = [
  {
    key: '1',
    label: 'Sugestões',
    hasBorder: true
  },
  {
    key: '2',
    label: 'Favoritos',
    hasBorder: false
  }
];

const headerPay = [
  {
    label: 'Sugestões para Você',
    hasBorder: false
  }
];

export default function Suggestions({ page }) {
  return (
    <Container>
      {
        page === 'Home'
          ?
          <Header>
            {header.map((item, i) => (
              <Action key={i} hasBorder={item.hasBorder}>{item.label}</Action>
            ))}
          </Header>
          : null
      }
      {
        page === 'Pay'
          ?
          <Header>
            {headerPay.map((item, i) => (
              <ActionPay key={i} hasBorder={item.hasBorder}>{item.label}</ActionPay>
            ))}
          </Header>
          : null
      }
      <Scroll>
        {items.map((item, j) => (
          <Option key={j}>
            <Img source={item.img} />
            <Label>{item.label}</Label>
          </Option>
        ))}
      </Scroll>
    </Container>
  );
}