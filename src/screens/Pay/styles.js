import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #000;
`;

export const WrapperContainer = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false
}))`
`;

export const PayContent = styled.View`
  padding: 0px 15px;
`;

export const Services = styled.View`
  padding: 25px 0px;
  border-top-width: 1px;
  border-top-color: rgba(255,255,255,0.2);
`;

export const ServiceTitle = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ServiceItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  padding-bottom: 5px;
`;

export const ServiceImg = styled.Image.attrs(() => ({
  resizeMode: 'cover'
}))`
  margin-right: 20px;
  border-width: 1px;
  border-color: rgba(255,255,255,0.5);
  border-radius: 50px;
`;

export const ServiceContent = styled.View`
  flex: 1;
`;

export const ServiceHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ServiceLabel = styled.Text`
  color: #fff;
  font-weight: 700;
  padding-right: 5px;
`;

export const ServiceSubtitle = styled.Text`
  color: #fff;
  padding-right: 5px;
  font-size: 11px;
  width: 90%;
`;