import { Button, Typography } from '@mui/material';
import { ReactNode } from 'react';


type Props = {
  name: string,
  onClick: () => void,
  width: string
  icon?: ReactNode
}

function CustomButton({ name, onClick, width, icon }: Props) {
  return (
    <Button sx={{ border: "solid #613F75 2px", width: width, height: '40px', m: 1 }} onClick={onClick}>
      <Typography>
        {name}
      </Typography>
      {icon}
    </Button>
  )
}

export default CustomButton