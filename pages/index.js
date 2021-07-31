import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/containers/Container'
import Header from '../components/Header'
import ListaAutores from '../components/secciones/listaAutores'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>NextJS Blog. Prensa Obrera</title>
    </Head>
    <Container>
      <div className={styles.container}>
        <ListaAutores />
        <h1>Hello Next World!</h1>
      </div>
    </Container>
    </>
  )
}
