import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  padding: 0px 20px;
  padding-top: 20px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const ActionLabel = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  padding: 2px 15px;
  margin-left: 15px;
  border-bottom-width: ${({ hasBorder }) => hasBorder ? '1px' : '0px'};
  border-bottom-color: #10c86e;
`;

export const Card = styled.View`
  background: #1c1c1e;
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  margin-top: 0px;
  margin-bottom: 10px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
`;

export const Bold = styled.Text`
  color: #fff;
  font-weight: 500;
`;

export const Description = styled.Text`
  color: rgba(255,255,255, 0.5);
  margin-left: 13px;
`;

export const CardBody = styled.View`
  margin-top: 20px;
`;

export const Username = styled.Text`
  color: rgba(255,255,255,0.5);
  font-weight: 100;
`;

export const CardFooter = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #f75175;
  font-size: 12px;
`;

export const Divider = styled.View`
  width: 1px;
  height: 10px;
  background: rgba(255,255,255,0.5);
  margin: 0px 6px;
`;

export const Date = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const FooterActions = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 14px;
`;

export const OptionLabel = styled.Text`
  color: #fff;
  font-size: 12px;
  padding-left: 5px;
`;