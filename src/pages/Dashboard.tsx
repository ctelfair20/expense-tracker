import { Box } from '@mui/material';
import Greeting from '../components/Greeting';
import CustomButton from '../components/CustomButton';
import { addCategory, addExpense } from '../handler-functions/buttons';

const Dashboard = () => {
  return (
    // dashboard - under header
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 3, backgroundColor: 'blue' }}>
      <Greeting />
      {/* under greeting */}
      <Box sx={{ backgroundColor: 'pink', width: '100%', display: 'flex' }}>

        {/* categories column*/}
        <Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'red' }}>
            <CustomButton name='addExpene +' onClick={addExpense} />
            <CustomButton name='addCategory +' onClick={addCategory} />
          </Box>
          <Box sx={{ backgroundColor: 'purple', }}>categories</Box>
        </Box>

        {/* budgets column*/}
        <Box sx={{ backgroundColor: 'purple', }}>budgets</Box>

      </Box>
    </Box>
  );
}

export default Dashboard;