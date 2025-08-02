import React, { useCallback, useContext, useEffect } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter, ModalBasicLayout } from "@vibe/core/next"; 
import { Button, Flex, Heading } from '@vibe/core';
import { ICompany } from '../../../../models/company';
import { Form as FinalForm, Field } from "react-final-form";
import { combineValidators, isRequired } from 'revalidate';
import TextInput from '../../../../components/common/form/TextInput';
import { FORM_ERROR } from 'final-form';
import { RootStoreContext } from '../../../../stores/rootStore';
import { toast } from '../../../../components/common/toast/Toast'; 
import { v4 as uuid } from 'uuid';

interface ModalCProps {
  showModal: boolean;
  onClose: () => void;
  onCreateCompany: (company: ICompany) => void
}

const ModalC: React.FC<ModalCProps> = ({ showModal, onClose, onCreateCompany }) => {

  const validate = combineValidators({
      ruc: isRequired('ruc'),
      name : isRequired('name'),
      str_activity: isRequired('str_activity'),
      leg_representative: isRequired('leg_representative'),
      eco_activity: isRequired('eco_activity'),
  });

  const rootStore = useContext(RootStoreContext);
  const { createCompany } = rootStore.companyStore;

  const handleSubmitForm = async (values: ICompany) => {
    values.id = uuid();
    values.headquarters = [];
    //return createCompany(values).catch((error) => ({[FORM_ERROR]: error}));
    try {
      await createCompany(values);
      toast.push(`La empresa ${ values.name } se creo correctamente`, 'positive');      
      onCreateCompany(values);
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
                <Field name="ruc" maxLength={11} component={TextInput} type="text" title="RUC" size="medium" placeholder="Elejir un RUC para tu empresa" />
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

export default ModalC;
