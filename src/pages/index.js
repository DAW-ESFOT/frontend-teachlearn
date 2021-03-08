import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from "../components/Navigation";
import React from "react";
import {StepForwardOutlined} from '@ant-design/icons';
import Footer from "../components/Footer";
import Link from "next/link";


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

    <div>

        <div className={styles.container}>
            <div className="row">
                <h1 id='bnv'>¡Te damos la bienvenida a la mejor comunidad para tutorías del Ecuador!</h1>
                <div className="col-md-6">
                    <div id="carousel-inner" className={styles.main}>
                        <div className="carousel-item active">
                            <img src="https://cursosmultimedia.es/tutoresformacion/wp-content/uploads/2020/01/tutoria-2-300x190.png" className="d-block w-100" alt="..."/>
                        </div>
                        <Link href="/contact"><button type="button" className="btn btn-primary">Registro</button></Link>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}
