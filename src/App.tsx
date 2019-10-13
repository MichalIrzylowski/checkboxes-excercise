import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
      <Paper style={{marginTop: '100px'}}>
        <Toolbar>
          <Typography variant='h3'>
            Checkboxes
          </Typography>
        </Toolbar>
      </Paper>
    </>
  );
}

export default App;
