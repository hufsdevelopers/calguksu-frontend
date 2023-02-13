import React from 'react';

import Introduce from '@/containers/Main/fragments/Introduce';
import SelectDialog from '@/containers/Main/fragments/SelectDialog';
import ReportDialog from '@/containers/Main/fragments/ReportDialog';

export default function Main() {
  return (
    <>
      <Introduce />
      <SelectDialog />
      <ReportDialog />
    </>
  );
}
