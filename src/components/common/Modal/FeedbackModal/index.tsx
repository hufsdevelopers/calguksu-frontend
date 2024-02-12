'use client';
import React, { useState } from 'react';
import { submitFeedback } from '@/utils/api-utils';
import { validateEmail } from '@/utils/calguksu-util';

import { rem } from '@/styles/globals';
import {
  ModalButtonContainer, ModalCloseButton,  ModalContainer,  ModalContent,  ModalSubtitle,  ModalTitle,
} from '@/components/common/Modal/Modal.styles';
import { ModalTextareaCounter } from '@/components/common/Modal/FeedbackModal/FeedbackModal.styles';
import Modal from '@/components/common/Modal';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';
import Button from '@/components/common/Button';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal = ({ isOpen, onClose }: FeedbackModalProps) => {
  const [replyEmail, setReplyEmail] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const isEmailInvalid = replyEmail.length > 0 && !validateEmail(replyEmail);

  const handleSubmit = async () => {
    if (!validateEmail(replyEmail)) return;

    submitFeedback(replyEmail, content).then(() => {
      alert('의견이 성공적으로 전송되었습니다.');
    });
    setReplyEmail('');
    setContent('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContainer>
        <ModalTitle>의견보내기</ModalTitle>
        <ModalSubtitle>일정 추가 요청, 버그 리포트, 건의사항 심지어 시시콜콜한 잡담이라도 좋아요.<br />당신의 소중한 의견을 들려주세요.</ModalSubtitle>
        <ModalContent>
          <Input label={isEmailInvalid ? '잘못된 이메일 형식이에요' : '답변 받을 이메일 주소'} invalid={isEmailInvalid}
                 value={replyEmail} onChange={e => setReplyEmail(e.target.value)}
                 backgroundColor="var(--calguksu-background-color)" />
          <Textarea placeholder="내용" value={content} onChange={e => setContent(e.target.value)}
                    style={{
                      flex: 1,
                      minHeight: rem(150),
                      marginTop: rem(29),
                      backgroundColor: 'var(--calguksu-background-color)',
                    }} />
          <ModalTextareaCounter>{content.length}/300</ModalTextareaCounter>
        </ModalContent>
        <ModalButtonContainer>
          <ModalCloseButton onClick={onClose} $width={rem(92)}>닫기</ModalCloseButton>
          <Button onClick={handleSubmit} aria-invalid={!validateEmail(replyEmail)}
                  style={{ width: rem(92) }}>보내기</Button>
        </ModalButtonContainer>
      </ModalContainer>
    </Modal>
  );
};

export default FeedbackModal;
