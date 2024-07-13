import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            console.log(res);
            setRows(res.data);
        });
    }, []);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Image</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">${row.price}</TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                                <TableCell align="right"><img src={row.image} alt={row.title} style={{ height: 100, width: 100 }} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
