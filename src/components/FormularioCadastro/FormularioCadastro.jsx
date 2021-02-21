import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'
//import TextField from '@material-ui/core/TextField'

function FormularioCadastro({onSend, validarCPF}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErro] = useState({cpf:{valido: true, mensagem: ""}});
    
    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onSend({nome, sobrenome, cpf, promocoes, novidades});
            }}
        >
            <TextField 
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome" 
                label="Nome"
                variant="outlined" 
                fullWidth 
                margin="normal" 
            />
            <TextField
                value={sobrenome} 
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
            />

            <TextField 
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={(evento) => {
                    const isValid = validarCPF(evento.target.value);

                    setErro({cpf:isValid})
                }}
                id="cpf" 
                label="CPF"
                variant="outlined" 
                fullWidth 
                margin="normal" 
                error={!erros.cpf.valido}
                helperText={erros.cpf.mensagem}                
            />
            
            <FormControlLabel 
                label="Promoções" 
                control={
                    <Switch 
                        checked={promocoes}
                        onChange={(evento) => {
                            setPromocoes(evento.target.checked);
                        }}
                        name="promocoes" 
                        color="primary" 
                    />
                } 
            />

            <FormControlLabel 
                label="Novidades" 
                control={
                    <Switch 
                        checked={novidades}
                        onChange={(evento) => {
                            setNovidades(evento.target.checked);
                        }}
                        name="novidades" 
                        color="primary" 
                    />
                } 
            />
            
            <Button 
                variant="contained" 
                color="primary" 
                type="submit">
                    Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro;