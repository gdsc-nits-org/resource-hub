import '@/styles/globals.scss'
import Provider from '@/context/AuthContext'

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}
