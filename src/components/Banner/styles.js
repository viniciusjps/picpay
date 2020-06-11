import styled from 'styled-components/native';

export const Container = styled.View`
  background: #6882bb;
  height: 130px;
  margin: 10px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const Details = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Img = styled.Image`
`;


export const Description = styled.Text`
  color: #fff;
  font-weight: 100;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const Action = styled.Text`
  margin-top: 20px;
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  font-weight: bold;
  margin-right: auto;
  color: #fff;
`;