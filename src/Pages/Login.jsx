import React from "react";
import { useForm } from "react-hook-form";
import InputWithLabel from "../Components/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { ContainerPaginaPerfil } from "../Styles/tela";

import userIcon from "../img/user.png"
import emailIcon from "../img/email.png"


const schema = object({
  Email: string()
    .required("Campo obrigatório")
    .email("Formato de e-mail inválido")
    .matches(/@/, "O e-mail deve conter '@'")
    .trim(),
  Password: string()
    .required("Campo obrigatório")
    .min(8, "A senha precisa ter pelo menos 8 caracteres"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <ContainerPaginaPerfil>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWithLabel
          backgroundImageUrl={userIcon}
          label="Email:"
          name="Email"
          type="text"
          placeholder="Digite seu email"
          register={register}
          error={errors.Email}
        />

        <InputWithLabel
        backgroundImageUrl={emailIcon}
          label="Senha:"
          name="Password"
          type="Password"
          placeholder="Digite sua senha"
          register={register}
          error={errors.Password}
        />

        <button type="submit">Enviar</button>
      </form>
    </ContainerPaginaPerfil>
  );
};

export default Login;
