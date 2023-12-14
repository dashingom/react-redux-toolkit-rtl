import React from 'react';
import {useOktaAuth} from '@okta/okta-react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar';
import Add from '@mui/icons-material/Add';
import {useHistory} from 'react-router-dom';

const Home = () => {
  const {authState} = useOktaAuth();
  const history = useHistory();

  const handleNavigateAddDevice = (): any => history.push('add-device');

  if (!authState) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Card>
              <div style={{padding: '16px'}}>
                <Typography>Devices</Typography>
              </div>

              <Divider />
              <CardContent>
                <Button
                  variant="outlined"
                  startIcon={<Add />}
                  sx={{
                    color: '#007BC1!important',
                    marginTop: '12px!important',
                    borderRadius: '4px!important',
                    backgroundColor: '#fff!important',
                  }}
                  onClick={handleNavigateAddDevice}>
                  Add a Device
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
