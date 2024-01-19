import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Expense from './Expense';
import CustomButton from './CustomButton';
import { addExpense } from '../handler-functions/buttons';
import { categories } from '../assets/placeholderData';
import { Category } from '../context/DataContext';

function CategoryTable() {

  const getCategoryTotal = (category: Category) => {
    const initialValue = 0;
    return category.expenses.reduce(
      (accumulator, currentValue) => accumulator + currentValue.cost,
      initialValue,
    );
  }

  const displayAllCategories = categories.map((category) => {
    return (
      <Box key={category.id}>
        <Box sx={{ display: 'flex', gap: 2, p: 1 }}>
          <Typography variant='h5' component='h3' sx={{ textDecoration: 'underline' }}>
            {category.name}:
          </Typography>
          <Typography variant='h5' component='h3'>
            ${getCategoryTotal(category)}
          </Typography>
        </Box>
        <Box>
          {category.expenses.map(expense => {
            return <Expense name={expense.name} cost={expense.cost} key={expense.id} />
          })}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CustomButton expense='Add Expense' width='180px' icon={<AddIcon sx={{ pr: 1, color: "#613F75" }} />} onClick={addExpense} />
        </Box>
      </Box>
    )
  });

  return (
    displayAllCategories
  )
}

export default CategoryTable