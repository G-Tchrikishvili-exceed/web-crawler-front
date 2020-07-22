import React from 'react';
import TableComponent from './TableComponent';

export default function CrawledItemComponent({ crawledItem }) {
  const { h1, h2, h3, links } = crawledItem;
  return (
    <div className='crawled-item'>
      <TableComponent array={h1} text={'h1'} />
      <TableComponent array={h2} text={'h2'} />
      <TableComponent array={h3} text={'h3'} />
      <TableComponent array={links} text={'links'} />
    </div>
  );
}
