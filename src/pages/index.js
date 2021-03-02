import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from "../components/Navigation";
import React from "react";
import {StepForwardOutlined} from '@ant-design/icons';
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
        <h1>TEACHlearn</h1>
        <div>
            <Navigation/>
        </div>
        <div className={styles.container}><h3>JEGY-Empresa de desarrollo</h3></div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}
