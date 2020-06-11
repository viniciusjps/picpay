import React, { useState } from 'react';
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
  Line,
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

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(false);
  const [useBalance, setUseBalance] = useState(true);

  function toggleEyeVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function toggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <Header
        colors={
          useBalance
            ? ['#52e78c', '#1ab563']
            : ['#d3d3d3', '#868686']
        }
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>
              <Currency>R$</Currency>
              <Bold>
                {isVisible
                  ? '315,00'
                  : <Line />
                }
              </Bold>
            </Value>
            <EyeButton onPress={toggleEyeVisibility}>
              <Feather name={isVisible ? 'eye' : 'eye-off'} size={20} color="#fff" />
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
        <Switch value={useBalance} trackColor={{ false: "#767577", true: "#000" }} onValueChange={toggleUseBalance} />
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
