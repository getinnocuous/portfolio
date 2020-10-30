import { GlobalStyle, Theme } from '../styles/GlobalStyles';
import { DocumentHead } from '../components/DocumentHead/DocumentHead';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <DocumentHead />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
