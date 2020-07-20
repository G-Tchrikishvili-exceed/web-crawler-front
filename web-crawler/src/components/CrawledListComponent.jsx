import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(url) {
  return { url };
}

const rows = [
  createData('https://material-ui.com/components/text-fields/'),
  createData(
    'https://blog.logrocket.com/how-to-build-a-web-crawler-with-node/'
  ),
  createData(
    'https://blog.logrocket.com/how-to-build-a-web-crawler-with-node/'
  ),
];

export default function CrawledListComponent() {
  const classes = useStyles();

  return (
    <Container className='crawled-list'>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow className='header'>
              <TableCell>Crawled URLS</TableCell>
              <TableCell align='right'>Results</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  <a href={row.url}>{row.url}</a>
                </TableCell>
                <TableCell align='right'>
                  <Button
                    variant='outlined'
                    color='primary'
                    onClick={(e) => e.preventDefault()}
                  >
                    See More
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
