import { Button, Typography } from '@mui/material';
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
      <AddIcon sx={{ pl: 2, color: "#613F75" }} />
    </Button>
  )
}

export default CustomButton