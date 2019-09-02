import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar style={{backgroundColor:'silver'}}>
            <Toolbar>
                
                <Link to='/' component={RouterLink}>
                    <Button> Home </Button>
                </Link>

                <Link to='/login' component={RouterLink}>
                    <Button> Login </Button>
                </Link>

            </Toolbar>
        </AppBar>
    )
};

export default Header;