import React from 'react';
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

const Politics= () =>{
    return(
        <div className={styles.container}>
            <header >
                <h1>TEACHlearn</h1>
            </header>
            <div>
                <h1>Políticas de uso</h1>
                <p>La presente Política de Privacidad establece los términos en que TEACHlearn</p>
            </div>
                Hola Mundo
            <footer>
                <Navigation/>
            </footer>
        </div>
    );
};
export default Politics