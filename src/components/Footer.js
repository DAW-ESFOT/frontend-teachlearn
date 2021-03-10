import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import Routes from "../constants/routes";
import {Box, Link as MuiLink} from "@material-ui/core";
import {LinkedinOutlined, MailOutlined, WhatsAppOutlined} from "@ant-design/icons";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#262626",
        color: "#FFFFFF",
        alignItems: "center",
        padding:"10px",
        fontSize:"20px"
    },
    iconos: {
        display: "-webkit-box",
    },
}))

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <footer className={classes.footer}>
                <Container>
                    <div className="row">
                        <div className="col-6">
                            <Box className={classes.iconos}  align="right">
                                <a href='https://web.whatsapp.com/' target="_blank" rel="noopener noreferrer"><WhatsAppOutlined/></a>
                                <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer" style={{margin:"10px"}}><LinkedinOutlined/></a>
                                <a href='https://mail.google.com/' target="_blank" rel="noopener noreferrer"><MailOutlined/></a>
                            </Box>
                        </div>
                        <Link href="/" aling="right">
                            <Typography variant="body2">
                                Copyright © TeachLearn {new Date().getFullYear()}
                            </Typography>
                        </Link>
                    </div>
                </Container>
            </footer>
        </div>
    );
}