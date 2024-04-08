'use client';
import { ReactElement, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import UAParser from 'ua-parser-js';

import Header from '@/components/Header';
import { ContentSection } from '@/app/subscription/page.styles';
import AppleCalendarGuide from '@/app/subscription/_sections/AppleCalendarGuide';
import GoogleCalendarGuide from '@/app/subscription/_sections/GoogleCalendarGuide';

export default function SubscriptionPage(): ReactElement {
  const searchParams = useSearchParams();

  const [isAppleDevice, setIsAppleDevice] = useState<boolean | undefined>(undefined);

  const cn = searchParams.get('cn');
  const ct = searchParams.get('ct');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = new UAParser().getResult();
      const osName = result.os.name;

      if (osName === 'iOS' || osName === 'Mac OS') setIsAppleDevice(true);
      else setIsAppleDevice(false);
    }
  }, []);

  const calendarChangeToggle = () => {
    setIsAppleDevice(!isAppleDevice);
  };

  if (isAppleDevice === undefined) return <></>;
  if (!cn || !ct) return <div style={{ color: 'white' }}>Invalid query params</div>;

  return (
    <>
      <Header />
      <ContentSection style={{ justifyContent: isAppleDevice ? 'center' : 'start' }}>
        {isAppleDevice ? (
          <AppleCalendarGuide cn={cn} ct={ct} calendarChangeToggle={calendarChangeToggle} />
        ) : (
          <GoogleCalendarGuide cn={cn} ct={ct} calendarChangeToggle={calendarChangeToggle} />
        )}
      </ContentSection>
    </>
  );
}
