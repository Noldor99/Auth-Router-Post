import { FC } from 'react'
import { Box, Typography } from '@mui/material';
import { IPosts } from '../models/models';
 


interface PostsProps{
  title:string,
  posts?:IPosts[]
}

const SimplePosts:FC<PostsProps> = ({title, posts}:PostsProps) => {


  return (
    <>
      <Typography variant="h4" textAlign = 'center'>{title}</Typography>
 
        {posts?.map(item=>(
          <Box sx={{pb: '20px'}} key={item.id}>
            <Typography>
              Title: {item.title}  
            </Typography>
            <Typography>
              Body: {item.body}  
            </Typography>
          </Box>
        ))}
    </>
  )
}

export default SimplePosts