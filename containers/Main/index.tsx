import React from 'react';

import Introduce from '@/containers/Main/fragments/Introduce';
import SelectDialog from '@/containers/Main/fragments/SelectDialog';
import FeedbackDialog from '@/containers/Main/fragments/FeedbackDialog';
import DeliveryDialog from '@/containers/Main/fragments/DeliveryDialog';

export default function Main() {
  return (
    <>
      <Introduce />
      <SelectDialog />
      <FeedbackDialog />
      <DeliveryDialog />
    </>
  );
}
