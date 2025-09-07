import React, { useCallback, useContext, useEffect } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter, ModalBasicLayout } from "@vibe/core/next"; 
import { Button, Flex, Heading } from '@vibe/core';
import { Form as FinalForm, Field } from "react-final-form";
import { combineValidators, isRequired } from 'revalidate';
import TextInput from '../../../../components/common/form/TextInput';
import { FORM_ERROR } from 'final-form';
import { RootStoreContext } from '../../../../stores/rootStore';
import { toast } from '../../../../components/common/toast/Toast'; 
import { v4 as uuid } from 'uuid';
import { IHeadquarter } from '../../../../models/company/headquarter';

interface ModalHProps {
  company: string;
  showModal: boolean;
  onClose: () => void;
  onCreateHeadquarter: (headquarter: IHeadquarter) => void
}

const ModalH: React.FC<ModalHProps> = ({ company, showModal, onClose, onCreateHeadquarter }) => {

  const validate = combineValidators({
      code: isRequired('code'),
      address : isRequired('address'),
      pahs: isRequired('pahs'),
      icn: isRequired('icn'),
      phone: isRequired('phone'),
      email: isRequired('email')
  });

  const rootStore = useContext(RootStoreContext);
  const { createHeadquarter } = rootStore.headquarterStore;

  const handleSubmitForm = async (values: IHeadquarter) => {
    values.id = uuid();
    values.companyId = company;
    values.areas = [];

    try {
      await createHeadquarter(values);
      toast.push(`La sede ${ values.code } se creo correctamente`, 'positive');      
      onCreateHeadquarter(values);
      onClose();
    } catch (error) {
      return { [FORM_ERROR]: error };
    }
  }

  return (
    <Modal size='large' id="modal-basic" onClose={onClose} show={showModal} className='lg:w-[505px] md:w-[380px] sm:w-[380px] w-full'>
      <ModalBasicLayout>
        <ModalHeader title description={ <Heading type='h1'>Agregar Empresa</Heading> } />
        <ModalContent>
          {/*<div>
            <div className="mt-4 mb-8"> 
              <div className='rounded-3xl flex items-center justify-center relative'>
                <Button>Editar</Button>
              </div>
            </div>
          </div>*/}
          <FinalForm onSubmit={handleSubmitForm} validate={validate} render={({ handleSubmit, submitting, form }) => (
            <form onSubmit={handleSubmit} className="p-5 rounded-lg flex flex-col gap-4">
              <Flex direction="column" gap={8}>
                <Field name="code" maxLength={11} component={TextInput} type="text" title="RUC" size="medium" placeholder="Elejir un RUC para tu empresa" />
                <Field name="name" component={TextInput} type="text" title="Nombre de la empresa" size="medium" placeholder="Elejir un nombre para tu empresa" />
              </Flex>
              <Flex direction='column' gap={8}>
                <Field name="str_activity" component={TextInput} type="text" title="Inicio de actividad" size="medium" placeholder="Elejir un inicio de actividad para tu empresa" />
                <Field name="leg_representative" component={TextInput} type="text" title="Representante legal" size="medium" placeholder="Elejir un representante legal para tu empresa" />
                <Field name="eco_activity" component={TextInput} type="text" title="Actividad económica" size="medium" placeholder="Elejir una actividad económica para tu empresa" />
              </Flex>
              <div className='justify-end flex items-center gap-2'>
                <Button type="button" kind='tertiary' onClick={onClose} className="flex">Cancelar</Button>
                <Button type="submit" kind='primary' className="flex" disabled={submitting}>Agregar empresa</Button>
              </div>
            </form>
          )} />
        </ModalContent>
      </ModalBasicLayout>
    </Modal>
  );
};

/**/

export default ModalH;
