import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FC } from 'react';
import { IAlbums } from '../models/models';

interface getAlbumsProps{
  getAlbums?: IAlbums[]
}


const AlbumList:FC<getAlbumsProps> = ({getAlbums}:getAlbumsProps) => {
  return (<List>
    {getAlbums?.map(album => <ListItem disablePadding key={album.id}>
        <ListItemButton>
          <ListItemText primary={album.title} />
        </ListItemButton>
      </ListItem>)}
  </List>);
}

export default AlbumList