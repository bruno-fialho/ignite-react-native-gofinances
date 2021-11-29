import React from 'react';
import { HightLightCard } from '../../components/HighlightCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HightLightCards
 } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri: 'https://avatars.githubusercontent.com/u/45835631?v=4' }} 
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Bruno</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HightLightCards >
        <HightLightCard
          type="up"
          title="Entradas" 
          amount="R$ 17.400,00" 
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HightLightCard
          type="down"
          title="Saídas" 
          amount="R$ 1.259,00" 
          lastTransaction="Última saída dia 03 de abril"
        />
        <HightLightCard
          type="total"
          title="Total" 
          amount="R$ 16.141,00" 
          lastTransaction="01 a 16 de abril"
        />
      </HightLightCards>
    </Container>
  );
}
