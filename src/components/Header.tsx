// import { Link } from "react-router-dom"
import { Box, Avatar, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar position="static" sx={{ display: "flex", boxShadow: "none", height: "100px", width: "100%", p: 2, background: "#F0EFF4" }}>
      <Toolbar sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}>
        {/* <Box>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </Box> */}
        <Typography sx={{ color: "#613F75" }} variant="h3" component="h1">Expense Tracker</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton>
            <MenuIcon sx={{ width: "35px", height: "35px", color: "#613F75", }} />
          </IconButton>
          <Avatar sx={{ color: "#613F75", background: "none", border: "#613F75 2px solid", width: "50px", height: "50px" }} />
        </Box>
      </Toolbar>



    </AppBar>
  )
}

export default Header