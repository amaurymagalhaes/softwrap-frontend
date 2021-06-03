import React from 'react';

import { Container, Button } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Button to="/">Visualizar</Button>
      <Button to="/criar-cadastro">Novo Cadastro</Button>
    </Container>
  );
};

export default Header;
