import React, { useEffect, useState } from 'react';

import { DataGrid } from '@material-ui/data-grid';

import { useHistory } from 'react-router-dom';

import Api from '../../services/api';

import Container from './styles';

const VisualizarContent: React.FC = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      nome: '',
      idade: null,
      estadocivil: '',
      cpf: '',
      cidade: '',
      estado: '',
    },
  ]);

  const history = useHistory();

  const columns = [
    { field: 'nome', headerName: 'NOME', width: 250 },
    { field: 'idade', headerName: 'IDADE', width: 120, type: 'number' },
    { field: 'estadocivil', headerName: 'ESTADO CIVIL', width: 180 },
    { field: 'cpf', headerName: 'CPF', width: 120 },
    { field: 'cidade', headerName: 'CIDADE', width: 150 },
    { field: 'estado', headerName: 'ESTADO', width: 150 },
  ];

  async function getData(): Promise<void> {
    const response = await Api.get('/pessoas');
    const { data } = response;
    setRows(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <div style={{ height: 400, width: '65%', backgroundColor: '#FFFFFF' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={20}
          onRowClick={params => {
            const state = params.row;
            history.push('/editar-cadastro', state);
          }}
        />
      </div>
    </Container>
  );
};

export default VisualizarContent;
