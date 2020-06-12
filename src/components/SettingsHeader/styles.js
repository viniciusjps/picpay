import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  height: 50px;
`;

export const HeaderAction = styled.Text`
  color: #0db060;
  margin-right: 10px;
  font-weight: bold;
`;

export const Profile = styled.View`
  padding: 15px;
  padding-bottom: 0px;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.Image.attrs(() => ({
  resizeMode: 'contain'
}))`
  height: 100px;
  width: 100px;
`;

export const ProfileBadge = styled.View`
  background: #053255;
  padding: 0px 7px;
  border: 2px solid #fff;
  height: 26px;
  border-radius: 6px;
  align-items: center;
  flex-direction: row;
  margin-top: -17px;
`;

export const TypeAccount = styled.Text`
  padding: 0px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const ProfileDetails = styled.View`
  padding: 20px 0px;
  align-items: center;
`;

export const ProfileUser = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 3px;
`;

export const ProfileName = styled.Text`
  color: rgba(255,255,255,0.6);
  font-size: 14px;
  margin-bottom: 3px;
`;

export const ProfileAction = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ActionTitle = styled.Text`
  color: #0db060;
  font-size: 12px;
  margin-bottom: 3px;
`;