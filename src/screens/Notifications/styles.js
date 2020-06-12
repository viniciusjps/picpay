import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const WrapperContainer = styled.SafeAreaView`
  margin-bottom: 10px;
`;

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false
}))`
`;

export const NotificationsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background: #131313;
  padding: 15px;
`;

export const NotificationTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const NotificationAction = styled.Text`
  color: #0db060;
`;

export const Card = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8
}))`
  background: #1c1c1e;
`;

export const CardContainer = styled.View`
  margin: 0px 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255,255,255,0.2);
  padding: 0px 5px;
`;

export const CardContent = styled.Text`
  color: rgba(255,255,255,0.8);
  padding-bottom: 8px;
  padding-top: 10px;
`;

export const Bold = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const CardTime = styled.Text`
  color: #0db060;
  font-size: 11px;
  margin-bottom: 10px;
`;