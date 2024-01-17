// import { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import CustomButton from './CustomButton'
import { addBudget } from '../handler-functions/buttons'
// import { DataContext } from '../context/DataContext'
import Budget from './Budget'
import { budgets } from '../assets/placeholderData'

const BudgetTable = () => {
  // // uncomment when ready to use real data as well as the two imports needed
  // const dataContext = useContext(DataContext);
  // const budgets = dataContext.budgets;

  const getBudgetTotal = () => {
    const initialValue = 0;
    return budgets.reduce(
      (accumulator, currentValue) => accumulator + currentValue.total,
      initialValue,
    );
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, m: 0.5 }}>
        <Typography variant='h5' component='h3' sx={{ textDecoration: 'underline' }}>
          Budget Totals:
        </Typography>
        <Typography variant='h5' component='h3'>
          ${getBudgetTotal().toString()}
        </Typography>
      </Box>
      <Box sx={{ my: 3 }}>
        {
          budgets.map(budget => {
            return (
              <Budget name={budget.name} total={budget.total} key={budget.id} />
            )
          })
        }
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CustomButton expense='Add Budget' width='170px' icon={<AddIcon sx={{ pr: 1, color: "#613F75" }} />} onClick={addBudget} />
      </Box>
    </Box>

  )
}

export default BudgetTable