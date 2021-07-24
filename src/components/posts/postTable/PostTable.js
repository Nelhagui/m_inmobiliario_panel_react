import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import "./PostTable.css";

export const PostTable = ({ data }) => {
    return (
        <>
            <Table className="postTable" stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>Título</TableCell>
                        <TableCell>Url</TableCell>
                        <TableCell>Usuario</TableCell>
                        <TableCell>Tags</TableCell>
                        <TableCell>Estado</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((fila) => {
                        return (
                            <TableRow key={fila.id} className="animate-opacity">
                                <TableCell>{fila.title}</TableCell>
                                <TableCell>{fila.permanent_link}</TableCell>
                                <TableCell>{fila.user.name}</TableCell>
                                <TableCell>{fila.tags}</TableCell>
                                <TableCell>
                                    {
                                        (fila.state = 0
                                            ? "Borrador"
                                            : (fila.state = 1
                                                  ? "Pendiente revisión"
                                                  : "Publicado"))
                                    }
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </>
    );
};
