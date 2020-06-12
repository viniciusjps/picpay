import styled from 'styled-components/native';

export const Header = styled.View`
  background: #131313;
  height: 105px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255,255,255,0.1);
`;

export const HeaderBody = styled.View`
  padding: 12px;
`;

export const HeaderBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderAction = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.2);
  border-radius: 50px;
  padding: 3px 10px;
  flex: 1;
  margin-left: 15px;
`;

export const HeaderInput = styled.TextInput`
  margin-left: 8px;
`;

export const HeaderActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLabel = styled.Text`
  color: #fff;
  padding: 20px 25px;
  height: 60px;
  font-weight: ${({ selected }) => selected ? 'bold' : 'normal'};
  border-bottom-color: ${({ selected }) => selected ? '#10c86e' : '#000'};
  border-bottom-width: ${({ selected }) => selected ? '2px' : '0px'};
`;