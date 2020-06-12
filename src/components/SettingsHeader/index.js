import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Header,
  HeaderAction,
  Profile,
  ProfileImage,
  ProfileBadge,
  TypeAccount,
  ProfileDetails,
  ProfileUser,
  ProfileName,
  ProfileAction,
  ActionTitle
} from './styles';

import avatar from '../../images/avatar.png'

export default function SettingsHeader() {
  return (
    <Container>
      <Header>
        <HeaderAction>Ajuda</HeaderAction>
      </Header>
      <Profile>
        <ProfileImage source={avatar} />
        <ProfileBadge>
          <TypeAccount>UNI</TypeAccount>
        </ProfileBadge>
        <ProfileDetails>
          <ProfileUser>@viniciusjps</ProfileUser>
          <ProfileName>Vinícius Jorge</ProfileName>
          <ProfileAction>
            <ActionTitle>Ver meu perfil</ActionTitle>
            <MaterialIcons name="keyboard-arrow-right" size={12} color="#0db060" />
          </ProfileAction>
        </ProfileDetails>
      </Profile>
    </Container>
  )
}