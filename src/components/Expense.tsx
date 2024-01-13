import { Box, IconButton, Typography, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from './CustomButton';
import { editCost } from '../handler-functions/buttons';

function Expense() {
  return (
    <Box sx={{ display: 'flex', borderBottom: '2px solid #613F75', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 1 }}>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* close button */}
        <IconButton sx={{
          color: "#613F75"
        }}>
          <CloseIcon fontSize='small' />
        </IconButton>
        {/* expense name */}
        <Typography>
          HEB
        </Typography>
      </Box>
      {/* cost */}
      <Typography>
        $124
      </Typography>
      {/*purchase date */}
      <Typography>
        12/13/23
      </Typography>
      <CustomButton name='Edit' width='100px' onClick={editCost}></CustomButton>
    </Box>
  )
}

export default Expense