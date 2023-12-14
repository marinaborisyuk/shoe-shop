// mui
import {Typography } from '@mui/material';

// layout
import ErrorLayout from '@/components/Layout/ErrorLayout/ErrorLayout';
import { mockData500 } from'@/constants/mockedData';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { gtmVirtualPageView } from '@/utils/gtm';

export default function Error500() {
  const router = useRouter();

  useEffect(() => {
    const pageData = {
      url: router.pathname,
    }
    
    gtmVirtualPageView(pageData);
  }, []);

  return (
    <ErrorLayout title='Error 500'>
      <Typography variant="h2">{mockData500.title}</Typography>
      <Typography variant="h5Gray" sx={{ fontSize: { xs: '12px' } }}>{mockData500.description}</Typography>
    </ErrorLayout>
  );
}
