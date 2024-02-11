'use client';
import { ReactElement, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SubscriptionPage(): ReactElement {
  const searchParams = useSearchParams();

  const [isQueryParamInvalid, setIsQueryParamInvalid] = useState(false);

  const cn = searchParams.get('cn');
  const ct = searchParams.get('ct');

  useEffect(() => {
    if (!cn || !ct) setIsQueryParamInvalid(true);
  }, [cn, ct]);

  return (
    <>{cn}</>
  );
};