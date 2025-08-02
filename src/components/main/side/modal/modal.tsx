import React, { useContext } from 'react';
import { Modal, ModalHeader, ModalContent, ModalBasicLayout } from "@vibe/core/next"; 
import { Button, Flex, Heading } from '@vibe/core';
import { Form as FinalForm, Field } from "react-final-form";
import { combineValidators, isRequired } from 'revalidate';
import TextInput from '../../../../components/common/form/TextInput';
import { FORM_ERROR } from 'final-form';
import { RootStoreContext } from '../../../../stores/rootStore';
import { toast } from '../../../../components/common/toast/Toast'; 
import { v4 as uuid } from 'uuid';
import { IBoard } from '../../../../models/board/board';

interface ModalBProps {
  showModal: boolean;
  onClose: () => void;
  onCreateBoard: (board: IBoard) => void
}

const ModalB: React.FC<ModalBProps> = ({ showModal, onClose, onCreateBoard }) => {

  const validate = combineValidators({
    name : isRequired('name'),
  });

  const rootStore = useContext(RootStoreContext);
  const { createBoard } = rootStore.boardStore;

  const handleSubmitForm = async (values: IBoard) => {
    try {
      await createBoard(values);
      toast.push(`El tablero ${ values.name } se creo correctamente`, 'positive');      
      onCreateBoard(values);
      onClose();
    } catch (error) {
      return { [FORM_ERROR]: error };
    }
  }

  return (
    <Modal size='large' id="modal-basic" onClose={onClose} show={showModal} className='lg:w-[505px] md:w-[380px] sm:w-[380px] w-full'>
      <ModalBasicLayout>
        <ModalHeader title description={ <Heading type='h1'>Agregar Programa</Heading> } />
        <ModalContent>
          <FinalForm onSubmit={handleSubmitForm} validate={validate} render={({ handleSubmit, submitting, form }) => (
            <form onSubmit={handleSubmit} className="p-5 rounded-lg flex flex-col gap-4">
              <Flex direction="column" gap={8}>
                <Field name="name" component={TextInput} type="text" title="Nombre del programa" size="medium" placeholder="Elejir un nombre para tu programa" />
              </Flex>
              <div className='justify-end flex items-center gap-2'>
                <Button type="button" kind='tertiary' onClick={onClose} className="flex">Cancelar</Button>
                <Button type="submit" kind='primary' className="flex" disabled={submitting}>Agregar programa</Button>
              </div>
            </form>
          )} />
        </ModalContent>
      </ModalBasicLayout>
    </Modal>
  );
};

export default ModalB;
