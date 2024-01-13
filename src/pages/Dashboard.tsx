import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import Greeting from '../components/Greeting';
import CustomButton from '../components/CustomButton';
import { addCategory, addExpense } from '../handler-functions/buttons';
import Category from '../components/Category';

const Dashboard = () => {
  return (
    // dashboard - under header
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 3 }}>
      <Greeting />
      {/* under greeting */}
      <Box sx={{ width: '100%', display: 'flex', mt: 2, gap: 4 }}>

        {/* categories column*/}
        <Box sx={{ width: '50%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CustomButton name='Add Expense' width='200px' icon={<AddIcon sx={{ pl: 2, color: "#613F75" }} />} onClick={addExpense} />
            <CustomButton name='Add Category' width='200px' icon={<AddIcon sx={{ pl: 2, color: "#613F75" }} />} onClick={addCategory} />
          </Box>
          <Box>
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