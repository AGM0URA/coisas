import styled from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: -5px;
    color: #333;
  }

  input {
    background-image: url(${props => props.backgroundImageUrl});
  background-repeat: no-repeat;
  background-position: left;
  background-size: 1.3em;
  padding: 10px 10px 10px 40px;
  font-size: 16px;
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  }
`;
export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
`;
