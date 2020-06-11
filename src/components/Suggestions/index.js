import React from 'react';

import { Container, Scroll, Header, Action, Option, Img, Label } from './styles';
import Img1 from '../../images/01.png';
import Img2 from '../../images/02.png';
import Img3 from '../../images/03.png';
import Img4 from '../../images/04.png';
import Img5 from '../../images/05.png';
import Img6 from '../../images/06.png';
import Img7 from '../../images/07.png';


const items = [
  {
    key: String(Math.random()),
    img: Img1,
    label: 'Recarga de Celular'
  },
  {
    key: String(Math.random()),
    img: Img2,
    label: 'Uber Pré Pago'
  },
  {
    key: String(Math.random()),
    img: Img3,
    label: 'Cartão de Transporte'
  },
  {
    key: String(Math.random()),
    img: Img4,
    label: 'SKY TV Pré-Pago'
  },
  {
    key: String(Math.random()),
    img: Img5,
    label: 'Central de Doações'
  },
  {
    key: String(Math.random()),
    img: Img6,
    label: 'Pagar Conta'
  },
  {
    key: String(Math.random()),
    img: Img7,
    label: 'Cobrar'
  }
];

const header = [
  {
    key: String(Math.random()),
    label: 'Sugestões',
    hasBorder: true
  },
  {
    key: String(Math.random()),
    label: 'Favoritos',
    hasBorder: false
  }
];

export default function Suggestions() {
  return (
    <Container>
      <Header>
        {header.map(item => (
          <Action border={item.hasBorder}>{item.label}</Action>
        ))}
      </Header>
      <Scroll>
        {items.map(item => (
          <Option key={item.key}>
            <Img source={item.img} />
            <Label>{item.label}</Label>
          </Option>
        ))}
      </Scroll>
    </Container>
  );
}