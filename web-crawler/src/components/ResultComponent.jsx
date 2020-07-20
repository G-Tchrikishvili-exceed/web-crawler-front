import React from 'react';
import Grid from '@material-ui/core/Grid';
import CrawledItemComponent from './CrawledItemComponent';

export default function CrawlerComponent() {
  return (
    <Grid container spacing={0} className='result'>
      <Grid item xs={12}>
        <h1>Crawled Results:</h1>
        <div className='content'>
          <CrawledItemComponent />
        </div>
      </Grid>
    </Grid>
  );
}
