import { Box } from '@mui/material';
import Greeting from '../components/Greeting';

const Dashboard = () => {
  return <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <Greeting />
  </Box>;
}

export default Dashboard;