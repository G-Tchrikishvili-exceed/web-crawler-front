import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function CrawlerComponent() {
  return (
    <Grid container spacing={0} className='result'>
      <Grid item xs={12}>
        <h1>Crawled Results:</h1>
        <div className='content'>
          <p>NOTHING FOUND</p>
        </div>
      </Grid>
    </Grid>
  );
}
