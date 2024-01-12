import { Button, Typography } from '@mui/material';

type Props = {
  name: string,
  onClick: () => void
}

function CustomButton({ name, onClick }: Props) {
  return (
    <Button sx={{ border: "solid #613F75 2px" }} onClick={onClick}>
      <Typography>
        {name}
      </Typography>
    </Button>
  )
}

export default CustomButton