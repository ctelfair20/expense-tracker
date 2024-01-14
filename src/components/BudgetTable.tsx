import { Box, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Budget from "./Budget"
import CustomButton from './CustomButton'
import { addBudget } from '../handler-functions/buttons'

const BudgetTable = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, m: 0.5 }}>
        <Typography variant='h5' component='h3' sx={{ textDecoration: 'underline' }}>
          Budget Totals:
        </Typography>
        <Typography variant='h5' component='h3'>
          $1000
        </Typography>
      </Box>
      <Box sx={{ my: 3 }}>
        <Budget />
        <Budget />
        <Budget />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CustomButton expense='Add Budget' width='170px' icon={<AddIcon sx={{ pr: 1, color: "#613F75" }} />} onClick={addBudget} />
      </Box>
    </Box>

  )
}

export default BudgetTable