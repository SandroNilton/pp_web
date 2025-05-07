import React, { ReactNode } from 'react';
import { Modal, ModalHeader, ModalContent, ModalMedia, ModalFooter, ModalFooterWizard, ModalBasicLayout, ModalSideBySideLayout, ModalMediaLayout } from "@vibe/core/next"; 
import { Link, Text } from '@vibe/core';

interface ModalCProps {
  showModal: boolean;
  size: string;
  id: string;
  
  onClose: () => void;
}

const ModalC: React.FC<ModalCProps> = ({ showModal, onClose }) => {
  return (
    <Modal size='full-view' id="modal-basic" onClose={onClose} show={showModal}>
      <ModalBasicLayout>
        <ModalHeader description={ <Text type="text1">Modal subtitle, can come with icon{' '}  <Link inheritFontSize inlineText text="and link."/></Text>} title="Modal title" />
        <ModalContent>
          <Text align="inherit" element="p" type="text1">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
      </ModalBasicLayout>
      <ModalFooter primaryButton={{ onClick: onClose, text: 'Close' }} secondaryButton={{ onClick: onClose, text: 'Cancel' }}></ModalFooter>
    </Modal>
  );
};

export default ModalC;
