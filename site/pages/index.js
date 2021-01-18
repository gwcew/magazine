import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Magazine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Hello world</div>
    </div>
  )
}
