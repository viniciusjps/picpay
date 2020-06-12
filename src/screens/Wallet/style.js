import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const WrapperContainer = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false
}))`
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 260px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px;
`;

export const Currency = styled.Text`
  color: #fff;
  font-weight: 100;
  font-size: 38px;
  margin-right: 8px;
`;

export const Bold = styled.Text`
  font-weight: 700;
  font-size: 38px;
  color: #fff;
`;

export const Line = styled.View`
  background: #fff;
  height: 2px;
  width: 118px;
`;

export const EyeButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.5
}))`
`;

export const Info = styled.Text`
  color: #fff;
  margin-top: -5px;
  font-size: 12px;
  font-weight: 100;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid #fff;
  justify-content: center;
  padding: 7px 20px;
  margin: 8px 8px;
  height: 50px;
  width: 190px;
  border-radius: 50px;
`;

export const Label = styled.Text`
  color: #fff;
  padding-left: 10px;
`;

export const UserBalance = styled.View`
  background: #1c1c1e;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  height: 55px;
`;

export const UserBalanceText = styled.Text`
  color: #fff;
  padding-left: 10px;
`;

export const PaymentMethods = styled.View`
  padding: 0px 20px;
  padding-top: 20px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: gray;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1c1c1e;
  height: 200px;
  margin: 10px;
  border-radius: 5px;
  justify-content: space-between;
  padding: 20px;
`;

export const CardBody = styled.View`
  flex-direction: row;
  margin-top: 0px;
`;

export const CardDetails = styled.View`
  flex: 1;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  width: 140px;
  margin-bottom: 8px;
`;

export const CardInfo = styled.Text`
  color: rgba(255,255,255,0.6);
  width: 270px;
`;

export const CreditCardImg = styled.Image.attrs(() => ({
  resizeMode: 'contain'
}))`
  width: 60px;
  margin-left: 10px;
`;

export const CardAction = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconCircle = styled.View`
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 50px;
  height: 30px;
  width: 30px;
`;

export const ActionTitle = styled.Text`
  color: #0db060;
  margin-left: 10px;
  font-weight: bold;
`;

export const Ticket = styled.View`
  flex-direction: row;
  align-items: center;
  height: 100px;
  justify-content: center;
`;

export const TicketTitle = styled.Text`
  color: #0db060;
  margin-left: 8px;
  border-bottom-color: #0db060;
  border-bottom-width: 1px;
`;