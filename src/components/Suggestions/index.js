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
    key: '1',
    img: Img5,
    label: 'Central de Doações'
  },
  {
    key: '2',
    img: Img6,
    label: 'Pagar Conta'
  },
  {
    key: '3',
    img: Img7,
    label: 'Cobrar'
  },
  {
    key: '4',
    img: Img1,
    label: 'Recarga de Celular'
  },
  {
    key: '5',
    img: Img2,
    label: 'Uber Pré Pago'
  },
  {
    key: '6',
    img: Img3,
    label: 'Cartão de Transporte'
  },
  {
    key: '7',
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

export default function Suggestions() {
  return (
    <Container>
      <Header>
        {header.map(item => (
          <Action hasBorder={item.hasBorder}>{item.label}</Action>
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