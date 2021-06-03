import React from 'react';

// import { Container } from './styles';

import Template from '../../components/template';
import EditarContent from '../../components/cadastrocontent/editar';

const EditarCadastro: React.FC = params => {
  return (
    <Template
      childComp={<EditarContent data={params} />}
      childText="Editar Cadastro"
    />
  );
};

export default EditarCadastro;
