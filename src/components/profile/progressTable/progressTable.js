import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 300,
        maxWidth: 600,
    },
});

function createData(name, current, last) {
    return { name, current, last };
}



function setViewRows(window){
    const rows = [
        [
            createData('Distance', 21.0, 30.0),
            createData('Avg. Pace', '8:04', '8:13'),
            createData('Activities', 4, 7),
        ],
        [
            createData('Distance', 51.4, 109.1),
            createData('Avg. Pace', '8:09', '8:21'),
            createData('Activities', 1, 21),
        ],
        [
            createData('Distance', 485.3, 336.2),
            createData('Avg. Pace', '8:13', '8:34'),
            createData('Activities', 119, 101),
        ]

    ];
    const map = new Map();
    map.set('weekly',0);
    map.set('monthly', 1);
    map.set('yearly', 2);
    return rows[map.get(window.toLowerCase())];
}


export default function SimpleTable(props) {
    const classes = useStyles();
    const {view}  = props;

    let viewRows = setViewRows(view);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Metric</TableCell>
                        <TableCell align="right">This Period</TableCell>
                        <TableCell align="right">Last Period</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {viewRows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.current}</TableCell>
                            <TableCell align="right">{row.last}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}