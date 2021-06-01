import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>People List | Homepage</title>
        <meta name="keywords" content="Poletto.dev" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Culpa proident veniam quis dolore cupidatat et nulla.</p>
        <Link href="/people">
          <a className={styles.btn}>See people listing</a>
        </Link>
      </div>
    </>
  )
}
