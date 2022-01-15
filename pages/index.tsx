import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Esflow Technologies B.V.</title>
        <meta name="description" content="Welcome to Esflow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Esflow
        </h1>

        <div className={styles.grid}>
          <a href="https://www.relocify.nl" className={styles.card}>
            <h2>Relocify &rarr;</h2>
            <p>Employee relocation service</p>
          </a>
        </div>
      </main>

    </div>
  )
}

export default Home
