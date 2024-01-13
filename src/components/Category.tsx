import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Expense from './Expense';
import CustomButton from './CustomButton';
import { addExpense } from '../handler-functions/buttons';

function Category() {
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
      <Box sx={{ background: 'green', display: 'flex', justifyContent: 'flex-end' }}>
        <CustomButton name='Add Expense' width='200px' icon={<AddIcon sx={{ pl: 2, color: "#613F75" }} />} onClick={addExpense} />
      </Box>
    </Box>
  )
}

export default Category