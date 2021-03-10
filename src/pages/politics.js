import React from 'react';
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/Footer";

const Politics= () =>{
    return(
        <div className={styles.container}>
            <div>
                <h1>Políticas de uso</h1>
                <p>
                    La presente Política de Privacidad establece los términos en que TEACHlearn usa y protege la información que es
                    proporcionada por sus usuarios al momento de utilizar el sitio web respectivo. Esta empresa de desarrollo está
                    comprometida con la seguridad de los datos de los usuarios. Cuando le pedimos llenar los campos de información
                    personal con la cual usted puede ser identificado, se lo hace asegurando que sólo se empleará de acuerdo con los
                    términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada
                    por lo que se le recomienda al usuario revisar de manera continua ésta política de uso para asegurarse que está
                    de acuerdo con dichos cambios
                </p>
                <h2>Información que es recogida</h2>
                <p>
                    El presente sitio web podrá recoger información personal como: Nombre, información de contacto como la dirección
                    de correo electrónico e informaicón demográfica. De igual manera cuando se requiera información específica.
                </p>
                <h3>Uso de la información recogida</h3>
                <p>
                    El presente sitio web emplea la información con el fin de proporcionar un buen servicio. Es posible que sean
                    enviados correos electrónicos periódicamente a través del sitio como ofertas de tutorías y demás información publicitaria
                    que se considere relevante para usted o que pueda brindarle algún tipo de beneficio, estos correos elecrónicos serán
                    enviados a la dirección que el usuario proporcione y podrán ser cancelados en cualquier momento.
                </p>
                <p>
                    TEACHlearn está altamente comprometido a cumplir con el compromiso de mantener su información segura. Se usan sistemas
                    más avanzados y se los actualiza de forma constante para asegurar que no existe ningpun tipo de acceso no autorizado
                </p>
                <h3>
                    Enlaces a terceros
                </h3>
                <p>
                    El presente sitio web podría contener accesos a otros sitios web que pueden ser de interés del usuario. Una vez
                    que se haga clic en los enlaces y se abandone la página, ya no se tendrá control sobre el sitio al que se redirigió
                    y por lo tanto TEACHlearn y su empresa de desarrollo no se hace responsable de los términos o privacidad ni de la
                    protección de los datos que el usuario ingrese en dichos sitios. Aquellos sitios están sujetos a sus propias políticas
                    de privacidad y uso por lo cual es recomendable que el usuario los consulte y revise para confirmar que está de
                    acuerdo con aquellos términos.
                </p>
                <h3>
                    Control de su información personal
                </h3>
                <p>
                    Ésta empresa no venderá, cederá ni distribuirá la información personal que se recopile sin su consentimiento, salvo
                    que sea requerido por un juez ante un orden judicial.
                    TEACHlearn se reserva el derecho de modificar los términos de uso en cualquier momento
                </p>
            </div>
        </div>
    );
};
export default Politics