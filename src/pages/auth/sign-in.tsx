import { Button, Flex, Heading, Link, Text, TextField } from "@vibe/core"
import { MoveArrowRight } from "@vibe/icons";
import { Link as Links } from "react-router-dom";
import { Form as FinalForm, Field } from "react-final-form";
import TextInput from "../../components/common/form/TextInput";
import React, { useContext } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import { ISessionFormValues } from "../../models/auth/session";
import { FORM_ERROR } from "final-form";
import { combineValidators, isRequired } from "revalidate";

const signIn = () => {

  const validate = combineValidators({
    email : isRequired('email'),
    password : isRequired('password'),
  });

  const rootStore = useContext(RootStoreContext);
  const { login } = rootStore.sessionStore;

  const handleSubmitForm = async (values: ISessionFormValues) => {
    return login(values).catch((error) => ({[FORM_ERROR]: error}));
  }

  return (
    <Flex direction="column" align="center" gap={6} className="h-full">
      <Flex className="flex-1 flex p-5" align="center" justify="center" direction="column" gap={10}>
        <Heading type="h1" weight="normal" align="center" className="whitespace-normal">Te damos la bienvenida a preventiva.com</Heading>
        <Heading type="h3" align="center" className="whitespace-normal font-normal">Inicia sesión en tu cuenta.</Heading>
        <div className="lg:w-[400px]">
          <FinalForm onSubmit={handleSubmitForm} validate={validate} render={({ handleSubmit, submitting, form }) => (
            <form onSubmit={handleSubmit} className="p-5 rounded-lg flex flex-col gap-4">
              <Flex direction="column" gap={8}>
                <Field name="email" component={TextInput} type="text" size="medium" placeholder="nombre@empresa.com" />
                <Field name="password" component={TextInput} type="text" size="medium" placeholder="contraseña" />
                <Link text="¿Olvidaste tu contraseña?" className="w-auto" href="/"></Link>
                <Button type="submit" loaderClassName="" size="medium" className="flex w-full" disabled={submitting} rightIcon={MoveArrowRight}>Iniciar sesión</Button>
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


/*<!--<Field name="password" placeholder="Contraseña" type="text" validate={(value) => (value ? undefined : 'Required')} >
                  {({ input, meta }) => (
                    <TextField size="medium" name="email" type="password" title="Contraseña" placeholder=""></TextField>
                  )}
                </Field>*/ 