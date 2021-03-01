import React, {useEffect, useState} from "react";
import Link from "next/link"
import {Button, Col, Layout, Row} from "antd";
import {LinkedinOutlined, MailOutlined, WhatsAppOutlined} from "@ant-design/icons";


const {Footer} = Layout;

const GeneralFooter = () => {

    return (
        <div className={"row"} style={{padding:"10px"}}>
            <div className={"col-md-12"}>
                <div styles={{display: 'inline-block'}}>
                <div>
                    <Link href="/"><span>©Teachlearn WorldWide 2021</span></Link>
                </div>
                <div>
                    <Link href="/vision-mission" style={{margin:"10px"}}>Misión y Visión</Link>
                    <Link href="/politics" style={{margin:"10px"}}>Privacidad</Link>
                    <Link href="/contact" style={{margin:"10px"}}>Contáctanos</Link>
                </div>
                <div>
                    <a href='https://web.whatsapp.com/' target="_blank" rel="noopener noreferrer"><WhatsAppOutlined/></a>
                    <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer"><LinkedinOutlined/></a>
                    <a href='https://mail.google.com/' target="_blank" rel="noopener noreferrer"><MailOutlined/></a>
                </div>
                </div>
            </div>
        </div>
    );
}
export default GeneralFooter;