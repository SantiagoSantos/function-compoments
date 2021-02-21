import React, { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

class App extends Component {
  render(){
    return (
      <Container component='article' maxWidth="sm">
        <Typography variant="h3" align="center" component="h1" >
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro onSend={send} validarCPF={validarCpf} />
      </Container>
      
    );
  }
  
}

function send(dados){
  console.log(dados);
}

function validarCpf(cpf){
  if (cpf.trim().length !== 11) {
    return {valido: false, mensagem: "CPF deve conter 11 dígitos!"};
  }

  return {valido: true, mensagem: ""};
}

export default App;
