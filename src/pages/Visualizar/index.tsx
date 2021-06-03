import React from 'react';

// import { Container } from './styles';

import Template from '../../components/template';
import VisualizarContent from '../../components/visualizarcontent';

const Visualizar: React.FC = () => {
  return (
    <Template
      childComp={<VisualizarContent />}
      childText="Visualizar Cadastrados"
    />
  );
};

export default Visualizar;
