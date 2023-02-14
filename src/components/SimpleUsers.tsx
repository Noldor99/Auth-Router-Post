import { FC } from 'react'
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { IUsers } from '../models/models';

interface UsersProps {
  title: string,
  users: IUsers[]
}

const SimpleUsers: FC<UsersProps> = ({ title, users }: UsersProps) => {

  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h4" textAlign='center'>{title}</Typography>
      {users.map(item => (
        <Box key={item.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Typography >
            {item.username} || {item.name}
          </Typography>
          <Button onClick={() => navigate(`cart/${item.id}`)}>
            Single
          </Button>
        </Box>
      ))}
    </Box>
  )
}

export default SimpleUsers