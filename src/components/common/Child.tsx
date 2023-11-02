import React from 'react';

interface ChildProps {
  children: React.ReactNode;
  [key: string]: any;
}

const Child: React.FC<ChildProps> = ({ children, ...props }) => {
  const child = React.Children.only(children);

  return React.isValidElement(child)
    ? React.cloneElement(child, props)
    : null;
};

export default Child;
