import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/swiper.css';

import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from 'src/config';
import { theme } from 'src/common/theme';
import { Box, ThemeProvider } from '@mui/material';
import { AuthCtx } from '../src/common/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthCtx>
        <ApolloProvider client={client}>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            {/*<HeaderFeature />*/}
            <Box {...pageProps} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Component />
            </Box>
            {/*<FooterFeature />*/}
          </Box>
        </ApolloProvider>
      </AuthCtx>
    </ThemeProvider>
  );
}

export default MyApp;
