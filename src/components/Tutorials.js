import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import Loading from "@/components/Loading";
import withAuth from "@/hocs/withAuth";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import {Dialog, DialogContent, FormControlLabel, FormHelperText, FormLabel, RadioGroup} from '@material-ui/core';
import {
    Paper,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table,
    TablePagination,
    IconButton,
} from "@material-ui/core";
import BorderColorIcon from '@material-ui/icons/BorderColor';
//import EditComplaint from "@/components/EditComplaint";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 13,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 600,
    },
    textField: {
        width: '100%',
    }
}));


const Tutorials = ({ tutorialId }) => {
    const classes = useStyles();
    const {data, error} = useSWR(`/my-tutorials`, fetcher);


    console.log("data Complaints", data);

    if (error) return <div>No se pudo cargar los datos de la tutoria</div>;
    if (!data) return <Loading/>;


    return (
        <>
            <h2>Tutorias</h2>
            <div>
                {
                    data ?
                        <div>
                            <TableContainer component={Paper}>
                                <Table aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="center">Día</StyledTableCell>
                                            <StyledTableCell align="center">Hora</StyledTableCell>
                                            <StyledTableCell align="center">Tema</StyledTableCell>
                                            <StyledTableCell align="center">Observación</StyledTableCell>
                                            <StyledTableCell align="center">Imagen de Comprobante </StyledTableCell>
                                            <StyledTableCell align="center">Estudiante</StyledTableCell>
                                            <StyledTableCell align="center">Profesor</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.data.map((subject) => (
                                            <StyledTableRow key={subject.id}>
                                                <StyledTableCell align="justify">
                                                    {subject.date}
                                                </StyledTableCell>
                                                <StyledTableCell align="justify">
                                                    {subject.hour}
                                                </StyledTableCell>
                                                <StyledTableCell align="justify">
                                                    {subject.topic}
                                                </StyledTableCell>
                                                <StyledTableCell align="justify">
                                                    {subject.observation}
                                                </StyledTableCell>
                                                <StyledTableCell align="justify">
                                                    {subject.image}
                                                </StyledTableCell>
                                                <StyledTableCell align="justify">
                                                    {subject.student}
                                                </StyledTableCell>
                                                <StyledTableCell align="justify">
                                                    {subject.teacher}
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        :
                        <Loading/>
                }
            </div>
        </>
    );
};
export default withAuth(Tutorials);