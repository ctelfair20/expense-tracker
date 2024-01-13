import { Box } from '@mui/material';
import Greeting from '../components/Greeting';
import CustomButton from '../components/CustomButton';
import { addCategory, addExpense } from '../handler-functions/buttons';
import Category from '../components/Category';

const Dashboard = () => {
  return (
    // dashboard - under header
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 3, backgroundColor: 'blue' }}>
      <Greeting />
      {/* under greeting */}
      <Box sx={{ backgroundColor: 'pink', width: '100%', display: 'flex', mt: 2, gap: 4 }}>

        {/* categories column*/}
        <Box sx={{ width: '50%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CustomButton name='Add Expense' onClick={addExpense} />
            <CustomButton name='Add Category' onClick={addCategory} />
          </Box>
          <Box sx={{ backgroundColor: 'yellow', }}>
            <Category />
          </Box>
        </Box>

        {/* budgets column*/}
        <Box sx={{ width: '50%', backgroundColor: 'yellow', }}>budgets</Box>

      </Box>
    </Box>
  );
}

export default Dashboard;