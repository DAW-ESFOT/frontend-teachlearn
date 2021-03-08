import React, {useEffect, useState} from "react";
import Link from "next/link"
import styles from "../styles/footer.module.css"
import {Button, Col, Layout, Row} from "antd";
import {LinkedinOutlined, MailOutlined, WhatsAppOutlined} from "@ant-design/icons";


const {Footer} = Layout;

const GeneralFooter = () => {

    return (
        <div className={styles.footer}>
            <div className={"col-md-12"}>
                <div><Link href="/"><span>©Teachlearn WorldWide 2021</span></Link></div>

                <div className={styles.iconos}>
                    <a href='https://web.whatsapp.com/' target="_blank" rel="noopener noreferrer"><WhatsAppOutlined/></a>
                    <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer"><LinkedinOutlined/></a>
                    <a href='https://mail.google.com/' target="_blank" rel="noopener noreferrer"><MailOutlined/></a>
                </div>
            </div>
        </div>
    );
}
export default GeneralFooter;