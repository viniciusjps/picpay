import React from 'react';

import {
  Wrapper,
  WrapperContainer,
  Container,
  Options,
  Section,
  SettigsItems,
  SettingsOption,
  SettingsTitle,
  SettingsContent,
  SettingsBadge,
  BadgeTitle
} from './style';

import HeaderSettings from '../../components/SettingsHeader';

const items = [
  {
    section: 'Conta universitária',
    options: [
      {
        title: 'Benefícios',
        content: '',
        badge: 'Novo'
      }
    ]
  },
  {
    section: 'Minha conta',
    options: [
      {
        title: 'Meu PicPay',
        content: '@viniciusjps',
        badge: ''
      },
      {
        title: 'Meu número',
        content: '(**) *****-0000',
        badge: ''
      },
      {
        title: 'Meu E-mail',
        content: 'v**************s@g***l.com',
        badge: ''
      },
      {
        title: 'Dados pessoais',
        content: 'Nome, CPF e data de nascimento',
        badge: ''
      },
      {
        title: 'Conta Bancária',
        content: '',
        badge: ''
      },
      {
        title: 'Taxas e limites',
        content: '',
        badge: ''
      },
      {
        title: 'Meus endereços',
        content: '',
        badge: ''
      },
      {
        title: 'Meus favoritos',
        content: '',
        badge: ''
      },
      {
        title: 'Validar identidade',
        content: 'Verificado',
        badge: ''
      }
    ]
  },
  {
    section: 'Promoções',
    options: [
      {
        title: 'Conta Universitária',
        content: '',
        badge: ''
      },
      {
        title: 'Usar código promocional',
        content: '',
        badge: ''
      },
      {
        title: 'Convide seus amigos',
        content: '',
        badge: ''
      }
    ]
  },
  {
    section: 'Minhas assinaturas',
    options: [
      {
        title: 'Ver Minhas Assinaturas',
        content: '',
        badge: ''
      }
    ]
  },
  {
    section: 'Para o meu negócio',
    options: [
      {
        title: 'PicPay PRO',
        content: '',
        badge: ''
      },
      {
        title: 'Para estabelecimentos',
        content: '',
        badge: ''
      },
      {
        title: 'Venda por assinaturas',
        content: '',
        badge: ''
      }
    ]
  },
  {
    section: 'Configurações',
    options: [
      {
        title: 'Usar digital para pagar',
        content: '',
        badge: ''
      },
      {
        title: 'Alterar senha',
        content: '',
        badge: ''
      },
      {
        title: 'Privacidade',
        content: '',
        badge: ''
      },
      {
        title: 'Notificações',
        content: '',
        badge: ''
      },
      {
        title: 'Contas vinculadas',
        content: '',
        badge: ''
      }
    ]
  },
  {
    section: 'Geral',
    options: [
      {
        title: 'Precisa de ajuda?',
        content: '',
        badge: ''
      },
      {
        title: 'Sobre o PicPay',
        content: '',
        badge: ''
      },
      {
        title: 'Desativar minha conta',
        content: '',
        badge: ''
      }
    ]
  },
  {
    section: '',
    options: [
      {
        title: 'Sair',
        content: '',
        badge: ''
      }
    ]
  }
];

export default function Settings() {
  return (
    <Wrapper>
      <WrapperContainer>
        <Container>
          <HeaderSettings />
          {items.map((item, i) => (
            <Options key={i}>
              {
                item.section
                  ? <Section>{item.section}</Section>
                  : null
              }
              {item.options.map((option, j) => (
                <SettigsItems key={j}>
                  <SettingsOption>
                    <SettingsTitle>{option.title}</SettingsTitle>
                    {
                      option.content
                        ? <SettingsContent>{option.content}</SettingsContent>
                        : null
                    }
                  </SettingsOption>
                  {
                    option.badge
                      ?
                      <SettingsBadge>
                        <BadgeTitle>{option.badge}</BadgeTitle>
                      </SettingsBadge>
                      : null
                  }
                </SettigsItems>
              ))}
            </Options>
          ))}
        </Container>
      </WrapperContainer>
    </Wrapper>
  );
}