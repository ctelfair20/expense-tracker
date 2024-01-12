import { Button, Typography } from '@mui/material';

type Props = {
  name: string
}

function CustomButton({ name }: Props) {
  return (
    <Button sx={{ border: "solid #613F75 2px" }} onClick={ }>
      <Typography>
        {name}
      </Typography>
    </Button>
  )
}

export default CustomButton