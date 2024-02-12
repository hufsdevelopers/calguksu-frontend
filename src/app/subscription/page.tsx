'use client';
import { ReactElement, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Modal from '@/components/common/Modal';
import Header from '../../components/layout/Header';
import FeedbackModal from '../../components/common/Modal/FeedbackModal';

export default function SubscriptionPage(): ReactElement {
  const searchParams = useSearchParams();

  const [isQueryParamInvalid, setIsQueryParamInvalid] = useState(false);

  const cn = searchParams.get('cn');
  const ct = searchParams.get('ct');

  useEffect(() => {
    if (!cn || !ct) setIsQueryParamInvalid(true);
  }, [cn, ct]);

  return (
    <>
      <Header />
      {cn}
      <FeedbackModal isOpen={isQueryParamInvalid} onClose={() => setIsQueryParamInvalid(false)}
                     onSuccess={() => undefined} />
    </>
  );
};