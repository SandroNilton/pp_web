import React, { useCallback, useEffect } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter, ModalBasicLayout } from "@vibe/core/next"; 
import { Flex, Heading, TextField } from '@vibe/core';
import { ICompany } from '../../../../models/company';
import axios from 'axios';

interface ModalCProps {
  showModal: boolean;
  onClose: () => void;
  onCreateCompany: (company: ICompany) => void
}


const ModalC: React.FC<ModalCProps> = ({ showModal, onClose, onCreateCompany }) => {

  const initialCompany = {
    id: '',
    name: '',
    group: ''
  }

  const onSubmit = useCallback((data: ICompany) => {
    axios.post<ICompany[]>('http://localhost:5099/api/companies', data)
    .then((response) => {
      onClose();
      onCreateCompany(data)
      console.log(response);
    })
    .catch((error) => {
      console.error('Error al obtener las empresas', error);
    });
  }, []);

  const validationRules = {
    name: {
      required: 'El nombre es obligatorio',
    },
  };

  return (
    <Modal size='large' id="modal-basic" onClose={onClose} show={showModal} className='lg:w-[505px] md:w-[380px] sm:w-[380px] w-full'>
      <ModalBasicLayout>
        <ModalHeader title description={ <Heading type='h1'>Empresa</Heading>} />
        <ModalContent>
          <form>
            
            
          </form>
        </ModalContent>
      </ModalBasicLayout>
    </Modal>
  );
};

/**/

export default ModalC;
