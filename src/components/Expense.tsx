import { Box, IconButton, Typography, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Expense() {
  return (
    <Box sx={{ border: '2p solid #613F75' }}>
      {/* close button */}
      <IconButton sx={{
        color: "#613F75",
        pr: 0,
        "&.MuiButtonBase-root:hover": {
          bgcolor: "transparent"
        }
      }}>
        <CloseIcon />
      </IconButton>
      {/* expense name */}
      <Typography>
        HEB
      </Typography>
    </Box>
  )
}

export default Expense