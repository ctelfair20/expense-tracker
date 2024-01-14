import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Expense from './Expense';
import CustomButton from './CustomButton';
import { addExpense } from '../handler-functions/buttons';

function CategoryTable() {
  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, p: 1 }}>
        <Typography variant='h5' component='h3' sx={{ textDecoration: 'underline' }}>
          Groceries
        </Typography>
        <Typography variant='h5' component='h3'>
          $78
        </Typography>
      </Box>
      <Box>
        <Expense />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CustomButton name='Add Expense' width='180px' icon={<AddIcon sx={{ pr: 1, color: "#613F75" }} />} onClick={addExpense} />
      </Box>
    </Box>
  )
}

export default CategoryTable