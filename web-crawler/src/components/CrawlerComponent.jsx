import React, { useState, useRef } from 'react';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import LoaderComponent from './LoaderComponent';
import ResultComponent from './ResultComponent';

export default function CrawlerComponent() {
  const [InputValue, setInputValue] = useState('');
  const [InputError, setInputError] = useState('');
  const [HasCrawled, setHasCrawled] = useState(false);
  const [Loading, setLoading] = useState(false);
  const input = useRef(null);

  function validURL(url) {
    var pattern = new RegExp(
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

  const checkInput = (text) => {
    console.log(text);
    if (text && !text.trim('')) return setInputError('');

    if (!validURL(InputValue) && InputValue) {
      setInputError('invalid url');
    } else {
      setInputError('');
      return true;
    }
  };

  const CrawlUrl = (e) => {
    setHasCrawled(false);
    e.preventDefault();
    input.current.focus();
    if (InputError === '' && InputValue.trim() !== '') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setHasCrawled(true);
      }, 5000);
    } else {
      setInputValue('');
      setInputError('');
    }
  };
  return (
    <form onSubmit={(e) => CrawlUrl(e)}>
      <div className='crawler-box-parent'>
        <Container
          className={HasCrawled ? 'crawler-box crawled' : 'crawler-box'}
        >
          {Loading && <LoaderComponent />}
          <Grid container spacing={0}>
            <Grid item xs={10}>
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
            <Grid item xs={2}>
              <Button
                type='submit'
                className='submit-crawl'
                variant='contained'
                color='secondary'
              >
                Crawl It !!!
              </Button>
            </Grid>
          </Grid>
          {HasCrawled && <ResultComponent />}
        </Container>
      </div>
    </form>
  );
}
