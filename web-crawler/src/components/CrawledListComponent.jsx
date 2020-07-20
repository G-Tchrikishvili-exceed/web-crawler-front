import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
import DialogComponent from './DialogComponent';

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
  const [IsDialogOPen, setIsDialogOPen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOPen(!IsDialogOPen);
  };
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
              <TableRow key={uuidv4()}>
                <TableCell component='th' scope='row'>
                  <a href={row.url} rel='noopener noreferrer' target='_blank'>
                    {row.url}
                  </a>
                </TableCell>
                <TableCell align='right'>
                  <Button
                    variant='outlined'
                    color='primary'
                    onClick={toggleDialog}
                  >
                    See More
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <DialogComponent
        setIsDialogOPen={setIsDialogOPen}
        IsDialogOPen={IsDialogOPen}
      />
    </Container>
  );
}
