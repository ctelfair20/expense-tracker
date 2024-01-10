import { Box, Typography } from '@mui/material';

function Greeting() {
  return (
    <Box sx={{}}>
      <Typography variant='h4' component='h2'>
        {/* I want to dynamically change "morning" to either "afternoon" or "evening" and show the currently logging in user's name*/}
        Good Morning User!
      </Typography>
    </Box>
  )
}

export default Greeting