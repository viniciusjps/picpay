import styled from 'styled-components/native';

export const Container = styled.View`
  background: #1c1c1e;
  height: 195px;
`;

export const Scroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 5,
  }
}))`
  flex-direction: row;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 15px;
  padding-top: 20px;
  margin-bottom: 10px;
`;

export const Action = styled.Text`
  font-weight: 700;
  color: #fff;
  margin-right: 20px;
  padding-bottom: 10px;
  font-size: 13px;
  border-bottom-color: #fff;
  border-bottom-width: ${({ hasBorder }) => hasBorder ? '2px' : '0px'};
`;

export const ActionPay = styled.Text`
  font-weight: 700;
  color: #fff;
  margin-right: 20px;
  font-size: 16px;
  border-bottom-color: #fff;
  border-bottom-width: ${({ hasBorder }) => hasBorder ? '2px' : '0px'};
`;

export const Option = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))`
  width: 80px;
  align-items: center;
  margin-right: 3px;
`;

export const Img = styled.Image.attrs(() => ({
  resizeMode: 'cover'
}))`
  border-color: #fff;
  border-width: 2px;
  border-radius: 60px;
`;

export const Label = styled.Text`
  text-align: center;
  color: #fff;
  margin-top: 8px;
  font-size: 11px;
`;