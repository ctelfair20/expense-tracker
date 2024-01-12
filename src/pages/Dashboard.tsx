import { Box } from '@mui/material';
import Greeting from '../components/Greeting';
import CustomButton from '../components/CustomButton';

const Dashboard = () => {
  return <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
    <Greeting />
    <CustomButton name='addExpene +' />
  </Box>;
}

export default Dashboard;