import { Box, Typography } from '@mui/material';
import Expense from './Expense';

function Category() {
  return (
    <Box>
      <Box>
        <Typography variant='h5' component='h3'>
          Groceries
        </Typography>
        <Expense />
      </Box>
    </Box>
  )
}

export default Category