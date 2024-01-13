import { Box, Typography } from '@mui/material';
import Expense from './Expense';

function Category() {
  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', gap: 2, p: 1 }}>
          <Typography variant='h5' component='h3' sx={{ textDecoration: 'underline' }}>
            Groceries
          </Typography>
          <Typography variant='h5' component='h3'>
            $78
          </Typography>
        </Box>
        <Expense />
      </Box>
    </Box >
  )
}

export default Category