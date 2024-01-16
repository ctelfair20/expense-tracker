import { Box, TextField, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ m: 2, border: '2px solid black', width: '100%', height: '100%' }}>
      <Typography>Home</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '300px', border: '2px solid black', m: 1, p: 1 }}>
        <TextField sx={{ mb: 1 }} id="login" label="login" />
        <TextField sx={{ mb: 1 }} id="password" label="password" />
      </Box>
    </Box>
  )
}

export default Home;