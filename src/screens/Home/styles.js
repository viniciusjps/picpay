import styled from 'styled-components/native';

export const Container = styled.ScrollView`

`;

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Header = styled.View`
  padding: 12px;
  height: 55px;
  background: #131313;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View`
  padding: 0px 8px;
  height: 50px;
  align-items: center;
`;

export const BalanceTitle = styled.Text`
  color: rgba(255,255,255,0.8);
  font-size: 11px;
  text-align: center;
  font-weight: 100;
  margin-top: 5px;
`;

export const Balance = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 18px;
  margin-top: -3px;
`;
