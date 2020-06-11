import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { Switch } from 'react-native';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  Currency,
  EyeButton,
  Info,
  Actions,
  Button,
  Label,
  UserBalance,
  UserBalanceText,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  CreditCardImg,
  CardAction,
  ActionTitle,
  IconCircle,
  Ticket,
  TicketTitle
} from './style';

import creditCard from '../../images/credit-card.png';

let isEnabled = true;
const toggleSwitch = () => {
  isEnabled = !isEnabled;
};

export default function Wallet() {
  return (
    <Wrapper>
      <Header colors={['#52e78c', '#1ab563']}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>
              <Currency>R$</Currency>
              <Bold>315,00</Bold>
            </Value>
            <EyeButton>
              <Feather name="eye" size={20} color="#fff" />
            </EyeButton>
          </BalanceContainer>
          <Info>Seu saldo rende 100% do CDI</Info>
          <Actions>
            <Button>
              <MaterialCommunityIcons name="cash" size={18} color="#fff" />
              <Label>Adicionar</Label>
            </Button>
            <Button>
              <MaterialCommunityIcons name="bank" size={18} color="#fff" />
              <Label>Retirar</Label>
            </Button>
          </Actions>
        </HeaderContainer>
      </Header>
      <UserBalance>
        <UserBalanceText>Usar saldo ao pagar</UserBalanceText>
        <Switch value={isEnabled} trackColor={{ false: "#767577", true: "#000" }} />
      </UserBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>
      </PaymentMethods>
      <Card>
        <CardBody>
          <CardDetails>
            <CardTitle>Cadastre seu cartão de crédito</CardTitle>
            <CardInfo>
              Cadastre um cartão de crédito para poder
              fazer pagamentos mesmo quando não
              tiver saldo no seu PicPay.
          </CardInfo>
          </CardDetails>
          <CreditCardImg source={creditCard} />
        </CardBody>
        <CardAction>
          <IconCircle>
            <AntDesign name="plus" color="#0db060" size={23} />
          </IconCircle>
          <ActionTitle>Adicionar cartão de crédito</ActionTitle>
        </CardAction>
      </Card>
      <Ticket>
        <MaterialCommunityIcons name="ticket" size={18} color="#0db060" />
        <TicketTitle>Usar código promocional</TicketTitle>
      </Ticket>
    </Wrapper>
  );
}
