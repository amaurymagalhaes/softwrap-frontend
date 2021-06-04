import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputMask from 'react-input-mask';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Api from '../../services/api';

import {
  Container,
  InputsContainer,
  TextContainer,
  InputField,
  InputFieldRow,
  SubmitBar,
  SubmitButton,
  DeleteButton,
} from './styles';

interface ContentProps {
  data?: any;
}

const EditarContent: React.FC<ContentProps> = Params => {
  const history = useHistory();
  const { data } = Params;
  if (!data) {
    history.push('/');
  }
  const { state } = data.location;

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [estadocivil, setEstadoCivil] = useState('');
  const [cpf, setCPF] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setNome(state.nome);
    setIdade(state.idade);
    setEstadoCivil(state.estadocivil);
    setCPF(state.cpf);
    setCidade(state.cidade);
    setEstado(state.estado);
  }, [
    state.nome,
    state.idade,
    state.estadocivil,
    state.cpf,
    state.cidade,
    state.estado,
  ]);

  const handleEstadoCivil = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEstadoCivil(event.target.value as string);
  };

  const handleEstado = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEstado(event.target.value as string);
  };

  function handleNomeChange(event: string) {
    setNome(event);
  }

  function handleCPFChange(event: string) {
    setCPF(event);
  }

  function handleIdadeChange(event: number) {
    setIdade(event);
  }

  function handleCidadeChange(event: string) {
    setCidade(event);
  }

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  async function handleSubmit() {
    if (nome === '' || nome === ' ') {
      setMessage('Campo Nome é obrigatório');
      setOpen(true);
    }
    if (
      nome === state.nome &&
      idade === state.idade &&
      estadocivil === state.estadocivil &&
      cpf === state.cpf &&
      cidade === state.cidade &&
      estado === state.estado
    ) {
      setMessage('Você não modificou nada.');
      setOpen(true);
    } else {
      await Api.put(`/pessoas/${state.id}`, {
        nome,
        idade,
        estadocivil,
        cpf,
        cidade,
        estado,
      }).then(() => {
        setMessage('Cadastro modificado.');
        setOpen(true);
        setTimeout(() => {
          history.push('/');
        }, 2000);
      });
    }
  }

  async function handleDelete() {
    await Api.delete(`/pessoas/${state.id}`).then(() => {
      setMessage('Pessoa deletada.');
      setOpen(true);
      setTimeout(() => {
        history.push('/');
      }, 2000);
    });
  }

  return (
    <Container>
      <TextContainer>
        <h1>Informações Pessoais</h1>
        <h2>Adicione aqui as informações da nova pessoa.</h2>
      </TextContainer>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
      <InputsContainer>
        <InputFieldRow>
          <InputField>
            <h1>Nome</h1>
            <input
              style={{ width: '300px' }}
              placeholder="Nome"
              value={nome}
              onChange={e => {
                handleNomeChange(e.target.value);
              }}
            />
          </InputField>
          <InputField>
            <h1>Idade</h1>
            <input
              style={{ width: '100px' }}
              placeholder="Idade"
              type="number"
              value={idade}
              onChange={e => {
                handleIdadeChange(e.target.valueAsNumber);
              }}
            />
          </InputField>
        </InputFieldRow>
        <InputFieldRow>
          <InputField>
            <h1>Estado Civil</h1>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={estadocivil}
              onChange={handleEstadoCivil}
              style={{ width: '200px' }}
            >
              <MenuItem value="Solteiro(a)">Solteiro(a)</MenuItem>
              <MenuItem value="Casado(a)">Casado(a)</MenuItem>
              <MenuItem value="Divorciado(a)">Divorciado(a)</MenuItem>
              <MenuItem value="Viúvo(a)">Viúvo(a)</MenuItem>
              <MenuItem value="Separado(a)">Separado(a)</MenuItem>
              <MenuItem value="União Estável">União Estável</MenuItem>
            </Select>
          </InputField>
          <InputField>
            <h1>CPF</h1>
            <InputMask
              mask="999.999.999-99"
              placeholder="CPF"
              value={cpf}
              onChange={e => {
                handleCPFChange(e.target.value);
              }}
            />
          </InputField>
        </InputFieldRow>
        <InputFieldRow>
          <InputField>
            <h1>Cidade</h1>
            <input
              placeholder="Cidade"
              value={cidade}
              onChange={e => {
                handleCidadeChange(e.target.value);
              }}
            />
          </InputField>
          <InputField>
            <h1>Estado</h1>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={estado}
              onChange={handleEstado}
              style={{ width: '200px' }}
            >
              <MenuItem value="Acre">Acre</MenuItem>
              <MenuItem value="Alagoas">Alagoas</MenuItem>
              <MenuItem value="Amapá">Amapá</MenuItem>
              <MenuItem value="Amazonas">Amazonas</MenuItem>
              <MenuItem value="Bahia">Bahia</MenuItem>
              <MenuItem value="Ceará">Ceará</MenuItem>
              <MenuItem value="Distrito Federal">Distrito Federal</MenuItem>
              <MenuItem value="Espírito Santo">Espírito Santo</MenuItem>
              <MenuItem value="Goiás">Goiás</MenuItem>
              <MenuItem value="Maranhão">Maranhão</MenuItem>
              <MenuItem value="Mato Grosso">Mato Grosso</MenuItem>
              <MenuItem value="Mato Grosso do Sul">Mato Grosso do Sul</MenuItem>
              <MenuItem value="Minas Gerais">Minas Gerais</MenuItem>
              <MenuItem value="Pará">Pará</MenuItem>
              <MenuItem value="Paraíba">Paraíba</MenuItem>
              <MenuItem value="Paraná">Paraná</MenuItem>
              <MenuItem value="Pernambuco">Pernambuco</MenuItem>
              <MenuItem value="Piauí">Piauí</MenuItem>
              <MenuItem value="Rio de Janeiro">Rio de Janeiro</MenuItem>
              <MenuItem value="Rio Grande do Norte">
                Rio Grande do Norte
              </MenuItem>
              <MenuItem value="Rio Grande do Sul">Rio Grande do Sul</MenuItem>
              <MenuItem value="Rondônia">Rondônia</MenuItem>
              <MenuItem value="Roraima">Roraima</MenuItem>
              <MenuItem value="Santa Catarina">Santa Catarina</MenuItem>
              <MenuItem value="São Paulo">São Paulo</MenuItem>
              <MenuItem value="Sergipe">Sergipe</MenuItem>
              <MenuItem value="Tocantins">Tocantins</MenuItem>
            </Select>
          </InputField>
        </InputFieldRow>
        <SubmitBar>
          <SubmitButton
            onClick={() => {
              handleSubmit();
            }}
          >
            Modificar
          </SubmitButton>
          <DeleteButton
            onClick={() => {
              handleDelete();
            }}
          >
            Excluir Pessoa
          </DeleteButton>
        </SubmitBar>
      </InputsContainer>
    </Container>
  );
};

export default EditarContent;
