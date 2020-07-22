import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';

export default function TableComponent({ text, array }) {
  console.log(text, array);
  return (
    <TableContainer component={Paper}>
      <Table aria-label={`${text}s`}>
        <TableHead>
          <TableRow className='header'>
            <TableCell>{text}-s Crawled</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='scroll'>
          {array &&
            array.length > 0 &&
            array.map((item) => (
              <TableRow key={uuidv4()}>
                <TableCell component='th' scope='row'>
                  {item}
                </TableCell>
              </TableRow>
            ))}
          {array && array.length === 0 && (
            <TableRow key={uuidv4()}>
              <TableCell component='th' scope='row'>
                <span className='not-found'>no {text} tags found</span>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
