import styled from 'styled-components/native';

export const Container = styled.View`
  background: #1e222b;
  height: 195px;
`;

export const Scroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
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

export const Action = styled.Text.attrs(({ border }) => ({
  contentContainerStyle: {
    borderBottomWidth:
      border
        ? 1
        : 0
  }
}))`
  font-weight: 700;
  color: #fff;
  margin-right: 20px;
  padding-bottom: 10px;
  font-size: 13px;
  border-bottom-width: 2px;
  border-bottom-color: #fff;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  align-items: center;
  margin-right: 3px;
`;

export const Img = styled.Image`
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