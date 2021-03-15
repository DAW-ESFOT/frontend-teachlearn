import React from "react";
import withAuth from "@/hocs/withAuth";
import {useAuth} from "@/lib/auth";
import Subject from "@/components/Subject";
import {Button, Link} from "@material-ui/core";
import Routes from "../constants/routes";
import Footer from "@/components/Footer";

const Materias=()=>{
    return (
      <>
          <div>
              <h2>Agrega una nueva Materia en Teachlearn</h2>
              <Button>
                  <Link href={Routes.ADDSUBJECT}><Button variant="contained" color="secondary">Registrar una materia</Button></Link>
              </Button>
          </div>
          <Subject/>
      </>
    );
}
export default Materias;