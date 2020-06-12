import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Actions,
  ActionLabel,
  Card,
  CardHeader,
  CardBody,
  Bold,
  Avatar,
  Description,
  Username,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  FooterActions,
  Option,
  OptionLabel
} from './styles';

import AvatarImg from '../../images/avatar.png';

const items = [
  {
    avatar: AvatarImg,
    user: '@viniciusjps',
    owner: 'Você',
    value: 'R$ 16,46',
    description: 'Compra da última sexta',
    comments: 0,
    time: '2 horas atrás',
    likes: 1,
  },
  {
    avatar: AvatarImg,
    user: '@viniciusjps',
    owner: 'Você',
    value: 'R$ 38,97',
    description: 'Cinema',
    time: '3 dias atrás',
    comments: 2,
    likes: 1
  }
];

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
        <Actions>
          <ActionLabel hasBorder={true}>Todos</ActionLabel>
          <ActionLabel hasBorder={false}>Minhas</ActionLabel>
        </Actions>
      </Header>
      {items.map((item, i) => (
        <Card key={i}>
          <CardHeader>
            <Avatar source={item.avatar} />
            <Description>
              <Bold>{item.owner}</Bold> pagou a <Bold>{item.user}</Bold>
            </Description>
          </CardHeader>
          <CardBody>
            <Username>{item.description}</Username>
          </CardBody>
          <CardFooter>
            <Details>
              <Value>{item.value}</Value>
              <Divider />
              <Feather name="lock" color="#fff" />
              <Date>{item.time}</Date>
            </Details>
            <FooterActions>
              <Option>
                <MaterialCommunityIcons name="comment-outline" color="#fff" size={16} />
                <OptionLabel>{item.comments}</OptionLabel>
              </Option>
              <Option>
                <Feather name="heart" color="#fff" size={16} />
                <OptionLabel>{item.likes}</OptionLabel>
              </Option>
            </FooterActions>
          </CardFooter>
        </Card>
      ))}
    </Container >
  );
}