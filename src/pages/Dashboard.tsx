import { Box } from '@mui/material';
import Greeting from '../components/Greeting';

const Dashboard = () => {
  return <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
    <Greeting />
  </Box>;
}

export default Dashboard;