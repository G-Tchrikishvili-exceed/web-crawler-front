import React from 'react';
import Grid from '@material-ui/core/Grid';
import CrawledItemComponent from './CrawledItemComponent';

export default function CrawlerComponent({ crawledItem }) {
  return (
    <Grid container spacing={0} className='result'>
      <Grid item xs={12}>
        <h1>
          Results for:<span> {crawledItem.url}</span>
        </h1>
        <div className='content'>
          <CrawledItemComponent crawledItem={crawledItem} />
        </div>
      </Grid>
    </Grid>
  );
}
