import * as React from 'react';
import useForm from '@hooks/useForm';
import validate from '@validations/LoginFormValidation';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './index.css';

const LoginForm = () => {
    const {
      values,
      errors,
      handleChange,
      handleSubmit
    } = useForm(login, validate);

    function login() {
        console.log("login here");
    }

    return (
        <Grid
            container
            alignItems='center'
            justify='center'
        >
            <form className='loginForm' onSubmit={handleSubmit}>
                <h1> 
                    Welcome
                </h1>

                <TextField
                    name='email'
                    type='email'
                    label='Email Address'
                    helperText={errors.email || ' '}
                    error={!errors.email ? false : true}
                    value={values.email || ''}
                    onChange={handleChange}
                    autoComplete='off'
                    noValidate
                    fullWidth
                />

                <TextField
                    name='password'
                    type='password'
                    label='Password'
                    helperText={errors.password || ' '}
                    error={!errors.password ? false : true}
                    value={values.password || ''}
                    onChange={handleChange}
                    fullWidth
                />

                <Button
                    type='submit'
                    variant='contained'
                    size='medium'
                    fullWidth
                >
                  Login
                </Button>

            </form>
        </Grid>
    );
}

export default LoginForm;
