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
      {/* <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`} /> */}
      <Head>
        <script>
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');
        `}
        </script>
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
