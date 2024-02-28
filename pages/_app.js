import '@/styles/globals.scss'
import Provider from '@/context/AuthContext'
import MainSection from '@/components/MainSection/MainSection'
import styles from '@/styles/Home.module.scss'

export default function App({ Component, pageProps, components }) {
  return (
    <div className={styles.wholeWrapper}>
      <MainSection />
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </div>
  )
}
