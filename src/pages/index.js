import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from "../components/Navigation";
import React from "react";
import {StepForwardOutlined} from '@ant-design/icons';

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <h1>TEACHlearn</h1>
      </header>
        <div>
            <Navigation/>
        </div>
        <footer>
            <h3>JEGY-Empresa de desarrollo</h3>
            <p>Acerca de</p>
            <p>Contáctanos</p>
            <p><StepForwardOutlined />Privacidad</p>

        </footer>
    </div>
  )
}
