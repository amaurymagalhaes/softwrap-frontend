import React from 'react';

// import { Container } from './styles';

import Template from '../../components/template';
import CriarContent from '../../components/cadastrocontent/criar';

const CriarCadastro: React.FC = () => {
  return <Template childComp={<CriarContent />} childText="Novo Cadastro" />;
};

export default CriarCadastro;
