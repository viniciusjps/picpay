import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 5,
  }
}))`
  height: 190px;
  padding: 0px 5px;
`;

export const Option = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1
}))`
  background: ${({ bgColor }) => bgColor};
  width: 135px;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #fff;
  padding: 15px 10px;
`;

export const Img = styled.Image`
  margin-bottom: 25px;
`;