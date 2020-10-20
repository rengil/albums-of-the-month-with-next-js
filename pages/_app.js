import UserProvider from '../context/userContext'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
    </ThemeProvider>
  )
}
