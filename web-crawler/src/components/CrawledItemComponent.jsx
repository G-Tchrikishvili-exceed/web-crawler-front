import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { Container } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import DialogComponent from './DialogComponent';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function CrawledItemComponent() {
  const classes = useStyles();
  return (
    <div className='crawled-item'>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='h1s'>
          <TableHead>
            <TableRow className='header'>
              <TableCell>H1-s Crawled</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={uuidv4()}>
              <TableCell component='th' scope='row'>
                Standard form attributes are supported
              </TableCell>
            </TableRow>
            <TableRow key={uuidv4()}>
              <TableCell component='th' scope='row'>
                Standard form attributes are supported
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='h1s'>
          <TableHead>
            <TableRow className='header'>
              <TableCell>H2-s Crawled</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={uuidv4()}>
              <TableCell component='th' scope='row'>
                Standard form attributes are supported
              </TableCell>
            </TableRow>
            <TableRow key={uuidv4()}>
              <TableCell component='th' scope='row'>
                Standard form attributes are supported
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='h3s'>
          <TableHead>
            <TableRow className='header'>
              <TableCell>H3-s Crawled</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={uuidv4()}>
              <TableCell component='th' scope='row'>
                Standard form attributes are supported
              </TableCell>
            </TableRow>
            <TableRow key={uuidv4()}>
              <TableCell component='th' scope='row'>
                Standard form attributes are supported
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='h1s'>
          <TableHead>
            <TableRow className='header'>
              <TableCell>Links Crawled</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={uuidv4()}>
              <TableCell component='th' scope='row'>
                <a href='http://' target='_blank' rel='noopener noreferrer'>
                  Standard form attributes are supported
                </a>
              </TableCell>
            </TableRow>
            <TableRow key={uuidv4()}>
              <TableCell component='th' scope='row'>
                <a href='http://' target='_blank' rel='noopener noreferrer'>
                  Standard form attributes are supported
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
