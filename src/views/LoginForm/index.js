import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { spacing } from '@material-ui/system';
import './index.css';

const LoginForm = ({ state, handleChange }) => (
  <Grid
    container
    alignItems='center'
    justify='center'
  >
    <form className='login-form' >
      <TextField
	name='email'
	type='email'
	label='Email Address'
	value={state.values.email}
	onChange={handleChange}
	fullWidth
      />
	
      <TextField
	name='password'
	type='password'
	label='Password'
	value={state.values.password}
	onChange={handleChange}
	fullWidth
      />
      
      <FormControlLabel
        control={
          <Checkbox
	    name='rememberMe'
            type='checkbox'
	    onChange={handleChange}
            value={state.values.rememberMe}
	  />
        }
        label='Remember me'
      />

      <Button
        type='submit'
        variant='contained'
        size='large'
	fullWidth
      >
        Login
      </Button>

    </form>
  </Grid>
);
export default LoginForm;
