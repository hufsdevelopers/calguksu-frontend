import { TextareaBlock } from '@/components/common/Textarea/textarea.styles';
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

const Textarea = ({ ...props }: TextareaProps) => {
  return (
    <TextareaBlock {...props} />
  );
};

export default Textarea;