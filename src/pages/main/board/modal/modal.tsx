import React, { useCallback, useContext, useEffect } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter, ModalBasicLayout } from "@vibe/core/next"; 
import { Button, Flex, Heading } from '@vibe/core';
import { ICompany } from '../../../../models/company/company';
import { Form as FinalForm, Field } from "react-final-form";
import { combineValidators, isRequired } from 'revalidate';
import TextInput from '../../../../components/common/form/TextInput';
import { FORM_ERROR } from 'final-form';
import { RootStoreContext } from '../../../../stores/rootStore';
import { toast } from '../../../../components/common/toast/Toast'; 
import { v4 as uuid } from 'uuid';
import { IGeneralObjective } from '../../../../models/board/generalObjective';

interface ModalGOProps {
  showModal: boolean;
  board: string;
  onClose: () => void;
  onCreateGeneralObjective: (generalObjective: IGeneralObjective) => void
}

const ModalGO: React.FC<ModalGOProps> = ({ showModal, board, onClose, onCreateGeneralObjective }) => {

  const validate = combineValidators({
      name : isRequired('name'),
  });

  const rootStore = useContext(RootStoreContext);
  const { createGeneralObjective } = rootStore.generalObjectiveStore;

  const handleSubmitForm = async (values: IGeneralObjective) => {
    values.id = uuid();
    values.boardId = board;
    //return createCompany(values).catch((error) => ({[FORM_ERROR]: error}));
    try {
      await createGeneralObjective(values);
      toast.push(`El objetivo general ${ values.name } se creo correctamente`, 'positive');      
      onCreateGeneralObjective(values);
      onClose();
    } catch (error) {
      return { [FORM_ERROR]: error };
    }
  }

  return (
    <Modal size='large' id="modal-basic" onClose={onClose} show={showModal} className='lg:w-[505px] md:w-[380px] sm:w-[380px] w-full'>
      <ModalBasicLayout>
        <ModalHeader title description={ <Heading type='h1'>Agregar Objetivo General</Heading> } />
        <ModalContent>
          <FinalForm onSubmit={handleSubmitForm} validate={validate} render={({ handleSubmit, submitting, form }) => (
            <form onSubmit={handleSubmit} className="p-5 rounded-lg flex flex-col gap-4">
              <Flex direction="column" gap={8}>
                <Field name="name" component={TextInput} type="text" title="Nombre de objetivo general" size="medium" placeholder="Elejir un nombre para su objetivo general" />
              </Flex>
              <div className='justify-end flex items-center gap-2'>
                <Button type="button" kind='tertiary' onClick={onClose} className="flex">Cancelar</Button>
                <Button type="submit" kind='primary' className="flex" disabled={submitting}>Agregar objetivo general</Button>
              </div>
            </form>
          )} />
        </ModalContent>
      </ModalBasicLayout>
    </Modal>
  );
};

/**/

export default ModalGO;
