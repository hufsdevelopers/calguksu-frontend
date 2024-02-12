import React from 'react';

import { PolicyContent } from '@/components/common/Modal/PrivacyPolicyModal/PrivacyPolicyModal.styles';
import Modal from '@/components/common/Modal';
import { ModalContainer, ModalTitle } from '@/components/common/Modal/Modal.styles';

import policyData from '@/constants/policies/privacy.json';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContainer>
        <ModalTitle>개인정보 처리방침</ModalTitle>
        <PolicyContent style={{ marginTop: '42px' }}>
          {policyData.sections.map((section, index: number) => (
            <div key={index}>
              <strong>{section.title}</strong><br /><br />
              {section.description}<br />
              <ul>
                {section.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
              </ul>
              <br />
            </div>
          ))}
        </PolicyContent>
      </ModalContainer>
    </Modal>
  );
};

export default PrivacyPolicyModal;