import { Box, Button, TextField } from '@mui/material'
import   { useState } from 'react'
import { IPosts } from '../models/models'
 

interface addPostProps{
  handlePost: (post:IPosts)=>void
}


const AddPost = ({handlePost}:addPostProps) => {
  let post:IPosts = {
    userId: 1,
    id: 1,
    title: "simple",
    body: "next"
  }
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  
  return (
    <Box sx = {{
                padding: '20px',
                display: 'flex',
                gap: '30px',
                flexDirection: 'column'
                }}>
    <Box sx = {{
            display: 'flex',
            gap: '30px',
            justifyContent: 'center'
            }}>
        <TextField
          fullWidth = {false}
          value={title}
          onChange = {e=>setTitle(e.target.value)}
          label ="title"
        />
        <TextField
          fullWidth = {false}
          value={body}
          onChange = {e=>setBody(e.target.value)}
          label ="body"
        />
    </Box>          
        <Button onClick={() => {
          handlePost(post = {...post, title, body})
          setTitle("")
          setBody("")
          }}>post request</Button>
 
    </Box>
  )
}

export default AddPost