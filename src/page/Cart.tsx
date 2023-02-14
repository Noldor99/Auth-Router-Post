import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Container } from '@mui/system';
import { Toolbar } from '@mui/material';
import { useGetOneUsersQuery } from '../store/redusers/placeholderApi';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WebIcon from '@mui/icons-material/Web';


const Cart = () => {

  const navigate = useNavigate();

  const { id } = useParams<string | any>()
  const { data, isLoading } = useGetOneUsersQuery(id, { refetchOnFocus: true })

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <Container style={{ paddingTop: '30px' }}>
      <Toolbar />
      <Box display='flex' justifyContent='center'>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${data.name}`} secondary="user" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <EmailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.email} secondary="email" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocalPhoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.phone} secondary="phone" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${data.address.city} ${data.address.street} `} secondary="Location" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WebIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${data.website}`} secondary="website" />
          </ListItem>

          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Button
                size="small"
                onClick={() => navigate(`/userdetails/${id}`)}
              >UserDetails</Button>
              <Button
                size="small"
                onClick={() => navigate(`/mockdetails/${id}`)}
              >MockDetails</Button>
            </Box>
            <Button
              size="small"
              onClick={() => navigate(-1)}
            >Go bask</Button>
          </Box>
        </List>
      </Box>
    </Container>
  );
}

export default Cart