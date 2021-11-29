import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: ${RFValue(300)}px;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
`;

export const Header = styled.View`

`;

export const Title = styled.Text`

`;

export const Icon = styled(Feather)`

`;

export const Footer = styled.View`

`;

export const Amount = styled.Text`

`;

export const LastTransaction = styled.Text`

`;
