import React from 'react';
import styles from '../styles/contact.module.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from 'next/image'
import {LinkedinOutlined, MailOutlined, WhatsAppOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";

const Contact= () =>{
    return (
        <div>
            <Navigation/>

            <div><h1 style={{textAlign: 'Center'}}>CONTÁCTANOS</h1></div>
                <div className={styles.container}>
                    <p style={{margin: '0px'}}>
                        Bienvenido a nuestro sitio web. Estamos contentos de atender tu requerimiento.
                    </p>
                    <div className="row">
                        <div className="col-md-8" style={{float:'left'}}>
                            <img src="https://suempresa.com/wp-content/uploads/2020/03/asesoria-personalizada.png" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="col-md-4" style={{float:'right'}}>
                            <ul>
                                <li><a href='https://web.whatsapp.com/' target="_blank" rel="noopener noreferrer"><WhatsAppOutlined/> 02-201010 / 0961628542</a></li>
                                <li><a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer"><LinkedinOutlined/> 0961628542 / 0997918338 </a></li>
                                <li><a href='https://mail.google.com/' target="_blank" rel="noopener noreferrer"><MailOutlined/> yomara.diaz@epn.edu.ec</a></li>
                                <li><a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><InstagramOutlined/> Teachleanr2021</a></li>
                                <li><a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><YoutubeOutlined/> JEGY Empresa de Desarrollo de Software</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
};
export default Contact