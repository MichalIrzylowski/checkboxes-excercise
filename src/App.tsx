import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Main} from './main';

const App: React.FC = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant='h6'>
            Checkboxes
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar>
        <Typography variant='h3'>
          Checkboxes
        </Typography>
      </Toolbar>
      <Main />
    </>
  );
}

export default App;
