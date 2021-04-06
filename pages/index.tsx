import Head from 'next/head'
import Header from '@components/header'
import Navigation from '@components/navigation'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <Header />
      </main>
    </>
  )
}
