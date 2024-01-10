import { Box, Typography } from '@mui/material';

function Greeting() {
  return (
    <Box>
      <Typography variant='h4' component='h2' sx={{ color: '#613F75' }}>
        {/* I want to dynamically change "morning" to either "afternoon" or "evening" */}
        Good Morning User!
      </Typography>
    </Box>
  )
}

export default Greeting