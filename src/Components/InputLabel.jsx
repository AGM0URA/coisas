import React from "react";
import { InputContainer, ErrorMessage } from "../Styles/InputLabel";

const InputWithLabel = ({
  backgroundImageUrl,
  label,
  name,
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <InputContainer backgroundImageUrl={backgroundImageUrl}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  );
};

export default InputWithLabel;
