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

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
        <Actions>
          <ActionLabel>Todos</ActionLabel>
          <ActionLabel>Minhas</ActionLabel>
        </Actions>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={AvatarImg} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@viniciusjps</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <Username>Compra da última sexta</Username>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 16,46</Value>
            <Divider />
            <Feather name="lock" color="#fff" />
            <Date>2 horas atrás</Date>
          </Details>
          <FooterActions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" color="#fff" size={16} />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <Feather name="heart" color="#fff" size={16} />
              <OptionLabel>0</OptionLabel>
            </Option>
          </FooterActions>
        </CardFooter>
      </Card>
    </Container>
  );
}