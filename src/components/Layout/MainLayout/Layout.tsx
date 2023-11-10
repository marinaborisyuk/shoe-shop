import Head from 'next/head';
import Header from '@/components/UI/Header';
import * as styles from './styles';
import Script from 'next/script';

interface ILayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: ILayoutProps) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Head>
        <title>{title ? title : 'Shoes Shop'}</title>
        <meta name="description" content="Shoes Shop. The best solution for your comfort" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <styles.Layout>
        <Header />
        <styles.Main>{children}</styles.Main>
      </styles.Layout>
    </>
  );
}
