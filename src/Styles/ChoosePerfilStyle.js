import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f5f5f5;
`;

export const Imagem = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px;
  border: 5px solid ${({ selecionado }) => (selecionado ? '#2B439C' : 'transparent')};
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #2B439C;
  }
`;

export const BotaoContinuar = styled.button`
  background-color: #2B439C;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background-color: #1a2b5e;
  }
`;
