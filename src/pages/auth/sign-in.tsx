import { Button, Flex, Heading, Link, Text, TextField } from "@vibe/core"
import { MoveArrowRight } from "@vibe/icons";
import { SingIn } from "../../models/auth/sign-in";
import { Link as Links } from "react-router-dom";
import { Form as FormFF, Field } from "react-final-form";
import React from "react";

const signIn = () => {

  const showResult = async (values: SingIn) => {
    console.log('Formulario enviado', values);
  }

  return (
    <Flex direction="column" align="center" gap={6} className="h-full">
      <Flex className="flex-1 flex p-5" align="center" justify="center" direction="column" gap={10}>
        <Heading type="h1" weight="normal" align="center" className="whitespace-normal">Te damos la bienvenida a preventiva.com</Heading>
        <Heading type="h3" align="center" className="whitespace-normal font-normal mb-12">Inicia sesión en tu cuenta.</Heading>
        <div className="lg:w-[400px]">
          <FormFF onSubmit={showResult} render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="p-5 rounded-lg flex flex-col gap-4">
              <Flex direction="column" gap={8}>
                <Field name="email" component="input"/>
               
                <Link text="¿Olvidaste tu contraseña?" className="w-auto" href="/"></Link>
                <Button type="submit" loaderClassName="" size="medium" className="flex w-full" rightIcon={MoveArrowRight}>Iniciar sesión</Button>
                <Flex gap="small" direction="row" justify="center">
                  <Text>¿Aún no tienes una cuenta?</Text>
                  <Links to="/auth/sign-up" className="text-[16px]">
                    Registrarse
                  </Links>
                </Flex>
              </Flex>
            </form>
          )} />
      </div>
      </Flex><Flex direction="row" gap={8} className="mb-16">
        <Text className="text-[16px]">¿Ya tienes cuenta?</Text>
        <Link text="Iniciar sesión" className="text-[16px]" href="/"></Link>
      </Flex>
    </Flex>
  );
};

export default signIn