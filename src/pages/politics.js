import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Politics = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: 1250,
      textAlign: "center",
    },
    container: {
      maxHeight: "100%",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1>Políticas de uso</h1>
        La presente Política de Privacidad establece los términos en que
        TEACHlearn usa y protege la información que es proporcionada por sus
        usuarios al momento de utilizar el sitio web respectivo. Esta empresa de
        desarrollo está comprometida con la seguridad de los datos de los
        usuarios. Cuando le pedimos llenar los campos de información personal
        con la cual usted puede ser identificado, se lo hace asegurando que sólo
        se empleará de acuerdo con los términos de este documento. Sin embargo
        esta Política de Privacidad puede cambiar con el tiempo o ser
        actualizada por lo que se le recomienda al usuario revisar de manera
        continua ésta política de uso para asegurarse que está de acuerdo con
        dichos cambios
        <h2>Información que es recogida</h2>
        El presente sitio web podrá recoger información personal como: Nombre,
        información de contacto como la dirección de correo electrónico e
        informaicón demográfica. De igual manera cuando se requiera información
        específica.
        <h2>Uso de la información recogida</h2>
        El presente sitio web emplea la información con el fin de proporcionar
        un buen servicio. Es posible que sean enviados correos electrónicos
        periódicamente a través del sitio como ofertas de tutorías y demás
        información publicitaria que se considere relevante para usted o que
        pueda brindarle algún tipo de beneficio, estos correos elecrónicos serán
        enviados a la dirección que el usuario proporcione y podrán ser
        cancelados en cualquier momento. TEACHlearn está altamente comprometido
        a cumplir con el compromiso de mantener su información segura. Se usan
        sistemas más avanzados y se los actualiza de forma constante para
        asegurar que no existe ningpun tipo de acceso no autorizado
        <h2>Enlaces a terceros</h2>
        El presente sitio web podría contener accesos a otros sitios web que
        pueden ser de interés del usuario. Una vez que se haga clic en los
        enlaces y se abandone la página, ya no se tendrá control sobre el sitio
        al que se redirigió y por lo tanto TEACHlearn y su empresa de desarrollo
        no se hace responsable de los términos o privacidad ni de la protección
        de los datos que el usuario ingrese en dichos sitios. Aquellos sitios
        están sujetos a sus propias políticas de privacidad y uso por lo cual es
        recomendable que el usuario los consulte y revise para confirmar que
        está de acuerdo con aquellos términos.
        <h2>Control de su información personal</h2>
        Ésta empresa no venderá, cederá ni distribuirá la información personal
        que se recopile sin su consentimiento, salvo que sea requerido por un
        juez ante un orden judicial. TEACHlearn se reserva el derecho de
        modificar los términos de uso en cualquier momento
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default Politics;
