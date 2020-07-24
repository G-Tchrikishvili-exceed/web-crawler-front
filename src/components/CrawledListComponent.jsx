import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
import LoaderComponent from './LoaderComponent';

export default function CrawledListComponent({
  updateSingleCrawl,
  crawledItems,
  crawledItem,
  isLoading,
}) {
  const [IsDialogOPen, setIsDialogOPen] = useState(false);

  const toggleDialog = (id) => {
    const crawledSingleitem = crawledItems.filter((item) => item._id === id);
    setIsDialogOPen(!IsDialogOPen);
    updateSingleCrawl(crawledSingleitem[0], false);
  };
  return (
    <Container className='crawled-list'>
      {isLoading && <LoaderComponent />}
      {crawledItems && crawledItems.length > 0 && (
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow className='header'>
                <TableCell>Crawled URLS</TableCell>
                <TableCell align='right'>Results</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {crawledItems.map((row) => (
                <TableRow key={uuidv4()}>
                  <TableCell component='th' scope='row'>
                    <a href={row.url} rel='noopener noreferrer' target='_blank'>
                      {row.url}
                    </a>
                  </TableCell>
                  <TableCell align='right'>
                    <Button
                      className='see-more'
                      variant='outlined'
                      color='primary'
                      onClick={() => toggleDialog(row._id)}
                    >
                      See More
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {!isLoading && crawledItems && crawledItems.length === 0 && (
        <div className='empty-result-container'>
          <div className='not-found'> nothing crawled yet </div>
        </div>
      )}
      <DialogComponent
        setIsDialogOPen={setIsDialogOPen}
        IsDialogOPen={IsDialogOPen}
        crawledItem={crawledItem}
      />
    </Container>
  );
}
