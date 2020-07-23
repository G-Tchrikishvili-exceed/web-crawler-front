import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import LoaderComponent from './LoaderComponent';
import ResultComponent from './ResultComponent';
import axios from 'axios';
import { apiUrl } from '../url';

export default function CrawlerComponent({ updateSingleCrawl, crawledItem }) {
  const [InputValue, setInputValue] = useState('');
  const [InputError, setInputError] = useState('');
  const [HasCrawled, setHasCrawled] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [ButtonAccess, setButtonAccess] = useState(false);
  const input = useRef(null);

  function validURL(url) {
    var pattern = new RegExp(
      '^$|s-|' +
      '^(https?:\\/\\/)' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    return !!pattern.test(url);
  }

  const checkInput = () => {
    if (!validURL(InputValue) && InputValue) {
      setInputError('invalid url');
      setButtonAccess(false);
      input.current.focus();
    } else {
      setInputError('');
      setButtonAccess(true);
    }

    if (InputValue.length === 0) {
      setInputError('');
      setButtonAccess(false);
    }
  };

  const CrawlUrl = async (e) => {
    try {
      setHasCrawled(false);
      e.preventDefault();
      input.current.focus();
      if (InputError !== 'invalid url' && InputValue.trim() !== '') {
        setLoading(true);
        axios
          .post(
            `${apiUrl}/`,
            {
              url: InputValue,
            },
            { timeout: 10000 }
          )
          .then((res) => {
            updateSingleCrawl(res.data.result);
            setHasCrawled(true);
            setLoading(false);
            setInputValue('');
            setButtonAccess(false);
          })
          .catch((err) => {
            setLoading(false);
            if (err.message === 'Request failed with status code 500') {
              return setInputError('nothing found on this url');
            }
            setInputError(`sorry... :( no response from server`);
          });
      } else {
        setInputValue('');
        setInputError('');
      }
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <form onSubmit={(e) => CrawlUrl(e)}>
      <div className='crawler-box-parent'>
        <Container
          className={HasCrawled ? 'crawler-box crawled' : 'crawler-box'}
        >
          {Loading && <LoaderComponent />}
          <Grid container spacing={2}>
            <Grid item xs={7} md={10}>
              <TextField
                id='crawler'
                inputRef={input}
                label='Crawl Url'
                autoComplete='off'
                fullWidth
                value={InputValue}
                error={InputError.length === 0 ? false : true}
                helperText={InputError}
                onKeyUp={(e) => {
                  checkInput(e.target.value);
                }}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={5} md={2}>
              <Button
                disabled={!ButtonAccess ? true : false}
                type='submit'
                className='submit-crawl'
                variant='contained'
                color='secondary'
              >
                Crawl It !!!
              </Button>
            </Grid>
          </Grid>
          {HasCrawled && <ResultComponent crawledItem={crawledItem} />}
        </Container>
      </div>
    </form>
  );
}
