import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from "../components/Navigation";

export default function Home() {
  return (
      <div className={styles.container}>
        <header>
          <h1>TEACHlearn</h1>
        </header>
        <footer>
          <h3>JEGY-Empresa de desarrollo</h3>
          <p>Acerca de</p>
          <p>Contáctanos</p>
          <p>Privacidad</p>
        </footer>
      </div>
  )
}
