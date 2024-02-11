import Modal from '@/components/common/Modal';
import {
  ModalButtonContainer, ModalCloseButton, ModalContainer, ModalContent, ModalPositiveButton, ModalSubtitle,
  ModalTextareaCounter, ModalTitle,
} from '@/styles/modal.styles';
import Input from '@/components/common/Input';
import { rem } from '@/styles/globals';
import Textarea from '@/components/common/Textarea';
import { useState } from 'react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const FeedbackModal = ({ isOpen, onClose, onSuccess }: FeedbackModalProps) => {
  const [email, setEmail] = useState<string>('');
  const [content, setContent] = useState<string>('');

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContainer>
        <ModalTitle>의견보내기</ModalTitle>
        <ModalSubtitle>일정 추가 요청, 버그 리포트, 건의사항 심지어 시시콜콜한 잡담이라도 좋아요.<br />여러분들의 소중한 의견을 들려주세요.</ModalSubtitle>
        <ModalContent>
          <Input label="답변 받을 이메일 주소" value={email} onChange={e => setEmail(e.target.value)} invalid={false}
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
          <ModalCloseButton onClick={onClose}>닫기</ModalCloseButton>
          <ModalPositiveButton onClick={onSuccess}>보내기</ModalPositiveButton>
        </ModalButtonContainer>
      </ModalContainer>
    </Modal>

  );
};

export default FeedbackModal;
