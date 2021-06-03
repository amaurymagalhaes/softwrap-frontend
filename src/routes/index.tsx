import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CriarCadastro from '../pages/Criar';
import EditarCadastro from '../pages/Editar';
import Visualizar from '../pages/Visualizar';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Visualizar} />
      <Route path="/criar-cadastro" component={CriarCadastro} />
      <Route path="/editar-cadastro" component={EditarCadastro} />
    </Switch>
  );
};

export default Routes;
