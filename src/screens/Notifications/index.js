import React from 'react';

import {
  Wrapper,
  WrapperContainer,
  Container,
  NotificationsHeader,
  NotificationTitle,
  NotificationAction,
  Card,
  CardContainer,
  CardContent,
  Bold,
  CardTime
} from './styles';

const items = [
  {
    user: '@hemi',
    text: 'colocou R$ 315,00 no seu PicPay',
    date: 'Ontem às 18:27'
  },
  {
    user: '',
    text: 'A companha de 5% de volta em pagamentos com saldo PicPay vai até dia 12/06. Toca aqui pra saber mais.',
    date: 'Ontem às 18:25'
  },
  {
    user: '',
    text: 'Eu ouvi: dinheiro de volta? Sim! Pague o que quiser com PicPay hoje e ganhe 5% de volta. Toque e saiba mais.',
    date: 'Ontem às 17:13'
  },
  {
    user: '',
    text: 'Programe seus pagamentos. Quinta-feira é feriado e alguns serviços serão afetados. Toque aqui para saber mais',
    date: 'Ontem às 12:37'
  },
  {
    user: '',
    text: 'Precisamos falar sobre os últimos acontecimentos. Toque aqui para saber mais',
    date: '9 de jun às 14:10'
  },
  {
    user: 'A transferência',
    text: 'de R$ 21,70 para sua conta bancária foi concluída',
    date: '9 de jun às 13:52'
  },
  {
    user: '@eugenia',
    text: 'colocou R$ 18,35 no seu PicPay',
    date: '8 de jun às 13:36'
  },
  {
    user: '@geo',
    text: 'colocou R$ 55,00 no seu PicPay',
    date: '8 de jun às 09:06'
  },
  {
    user: 'Você',
    text: 'ganhou R$ 2,50 de volta na sua carteira PicPay. Aproveite!',
    date: '4 de jun às 14:12'
  },
  {
    user: '@hemi',
    text: 'colocou R$ 25,00 no seu PicPay',
    date: '3 de jun às 14:04'
  },
  {
    user: 'A transferência',
    text: 'de R$ 78,90 para sua conta bancária foi concluída',
    date: '20 de mai às 16:02'
  },
  {
    user: '',
    text: 'Com o PicPay você transfere para seus amigos na hora que quiser, de onde quiser! Toque aqui para saber mais.',
    date: '16 de mai às 14:05'
  },
  {
    user: '@eugenia',
    text: 'colocou R$ 39,11 no seu PicPay',
    date: '14 de mai às 12:06'
  },
]

export default function Notifications() {
  return (
    <Wrapper>
      <WrapperContainer>
        <Container>
          <NotificationsHeader>
            <NotificationTitle>Notificações</NotificationTitle>
            <NotificationAction>Configurar</NotificationAction>
          </NotificationsHeader>
          {items.map((item, i) => (
            <Card key={String(i)}>
              <CardContainer>
                <CardContent>
                  <Bold>{item.user}</Bold> {item.text}
                </CardContent>
                <CardTime>{item.date}</CardTime>
              </CardContainer>
            </Card>
          ))}
        </Container>
      </WrapperContainer>
    </Wrapper>
  );
}