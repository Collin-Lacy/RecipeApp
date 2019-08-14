import * as React from 'react';
import Props from 'prop-types';

import Authenticate from '../../components/Authenticate';
import LoginForm from '../../views/LoginForm';

const AuthenticateService = props => {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  }
  
  return <Authenticate initialValues={initialValues}> 
      <LoginForm/>
    </Authenticate>
}

export default AuthenticateService;
