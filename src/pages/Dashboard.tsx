import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import Greeting from '../components/Greeting';
import CustomButton from '../components/CustomButton';
import { addCategory, addExpense } from '../handler-functions/buttons';
import CategoryTable from '../components/CategoryTable';
import BudgetTable from '../components/BudgetTable';

const Dashboard = () => {
  return (
    // dashboard - under header
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 3 }}>
      <Greeting />
      {/* under greeting */}
      <Box sx={{ width: '100%', display: 'flex', mt: 2, gap: 4 }}>

        {/* categories column*/}
        <Box sx={{ width: '50%', background: "#F0EFF4", borderRadius: '5px', p: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CustomButton expense='Add Expense' width='170px' icon={<AddIcon sx={{ pr: 1, color: "#613F75" }} />} onClick={addExpense} />
            <CustomButton expense='Add Category' width='190px' icon={<AddIcon sx={{ pr: 1, color: "#613F75" }} />} onClick={addCategory} />
          </Box>
          <Box sx={{ mt: 6 }}>
            <CategoryTable />
          </Box>
        </Box>

        {/* budgets column*/}
        <Box sx={{ width: '50%', background: '#F0EFF4', borderRadius: '5px', p: 1 }}>
          <BudgetTable />
        </Box>

      </Box>
    </Box>
  );
}

export default Dashboard;