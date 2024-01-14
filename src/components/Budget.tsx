import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from './CustomButton';
import { editCost } from '../handler-functions/buttons';

const Budget = () => {
  return (
    <Box sx={{ display: 'flex', borderBottom: '2px solid #613F75', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* close button */}
        <IconButton sx={{
          color: "#613F75"
        }}>
          <CloseIcon fontSize='small' />
        </IconButton>
        {/* budget name */}
        <Typography>
          Groceries
        </Typography>
      </Box>

      {/* cost */}
      <Typography>
        $300
      </Typography>
      <CustomButton name='Edit' width='70px' onClick={editCost}></CustomButton>
    </Box>
  );
}

export default Budget;