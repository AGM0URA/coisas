import React, { useState } from 'react';
import { Container, Imagem, BotaoContinuar } from '../Styles/ChoosePerfilStyle';
import admImg from '../img/adm.png';
import funcionarioImg from '../img/funcionario.png';

const BoxChoosePerfil = () => {
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);

  const selecionarPerfil = (perfil) => {
    setPerfilSelecionado(perfil);
  };

  return (
    <Container>
      <h1>Escolha o seu perfil</h1>
      <div>
        <Imagem
          src={admImg}
          alt="Administrador"
          selecionado={perfilSelecionado === 'adm'}
          onClick={() => selecionarPerfil('adm')}
        />
        <Imagem
          src={funcionarioImg}
          alt="Funcionário"
          selecionado={perfilSelecionado === 'funcionario'}
          onClick={() => selecionarPerfil('funcionario')}
        />
      </div>
      <BotaoContinuar disabled={!perfilSelecionado}>
        Continuar
      </BotaoContinuar>
    </Container>
  );
};

export default BoxChoosePerfil;
