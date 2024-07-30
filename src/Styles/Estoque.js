// Styles/Estoque.js

import styled from "styled-components";

export const ContainerEstoque = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 430px;
  height: 932px;
  text-align: center;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: absolute;
  top: 77%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const EstoqueH1 = styled.h1`
  color: #2b439c;
  margin: 0px 0px 0px 30px;
  padding: 0;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
`;

export const AdicionarProduto = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  position: absolute;
  top: 20px;
  right: 50px;
  cursor: pointer;
  z-index: 2;
`;

export const PesquisaEstoque = styled.div`
  width: 373px;
  height: 50px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  margin-top: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 10px; /* Adicionado espaçamento interno */
  z-index: 1;
`;

export const TextPesquisa = styled.span`
  margin-left: 10px; /* Espaçamento entre o texto e a borda */
  flex-grow: 1; /* Para ocupar o espaço disponível */
  text-align: left; /* Alinhamento do texto à esquerda */
`;

export const ImagemPesquisa = styled.img`
  width: 23px;
  height: 23px;
  object-fit: cover;
  margin-left: 10px; /* Adicionado espaçamento à esquerda da imagem */
  margin-right: 10px; /* Adicionado espaçamento à direita da imagem */
`;

export const ProdutosWrapper = styled.div`
  width: 373px;
  margin-top: 20px;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  position: relative;
`;

export const Produto = styled.div`
  width: 372px;
  height: 130px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
  padding: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const ProdutoInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const TextProduto = styled.h3`
  margin: 0;
`;

export const Textquantidade = styled.span`
  margin: 0;
  margin-top: 5px;
`;

export const ImagemProduto = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-left: 30px;
`;

export const EditarProduto = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: absolute;
  right: 55px;
  top: 50%;
  transform: translateY(-50%);
`;

export const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  z-index: 3;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const FileInputWrapper = styled.div`
  position: relative;
  margin-top: 10px;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const CustomFileButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #2b439c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1a2e6c;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #2b439c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #1a2e6c;
  }
`;
