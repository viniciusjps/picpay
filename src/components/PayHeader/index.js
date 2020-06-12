import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Header,
  HeaderBody,
  HeaderBar,
  HeaderAction,
  HeaderActions,
  HeaderInput,
  HeaderLabel
} from './styles';

const items = [
  {
    title: 'Principais',
    selected: true
  },
  {
    title: 'Locais',
    selected: false
  },
  {
    title: 'Store',
    selected: false
  }
];

export default function PayHeader() {
  return (
    <Header>
      <HeaderBody>
        <HeaderBar>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
          <HeaderAction>
            <AntDesign name="search1" size={15} color="rgba(255,255,255,0.8)" />
            <HeaderInput editable={false} placeholder={'A quem você quer pagar?'} />
          </HeaderAction>
        </HeaderBar>
        <HeaderActions>
          {items.map((item, i) => (
            <HeaderLabel selected={item.selected} key={i}>{item.title}</HeaderLabel>
          ))}
        </HeaderActions>
      </HeaderBody>
    </Header>
  );
}