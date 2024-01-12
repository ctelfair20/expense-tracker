import { Button, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


type Props = {
  name: string,
  onClick: () => void
}

function CustomButton({ name, onClick }: Props) {
  return (
    <Button sx={{ border: "solid #613F75 2px", width: '200px', height: '40px', m: 1 }} onClick={onClick}>
      <Typography>
        {name}
      </Typography>
      <IconButton sx={{
        color: "#613F75",
        pr: 0,
        "&.MuiButtonBase-root:hover": {
          bgcolor: "transparent"
        }
      }}>
        <AddIcon sx={{ pr: 0 }} />
      </IconButton>
    </Button>
  )
}

export default CustomButton