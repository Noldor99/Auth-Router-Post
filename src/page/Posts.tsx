import { Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import { FC, useEffect, useState } from 'react'
import AddPost from '../components/AddPost'
import SimplePosts from '../components/SimplePosts'
import { IPosts } from '../models/models'
import { useGetPostsQuery, usePostPostsMutation } from '../store/redusers/placeholderApi'

const Posts:FC = () => {

  const [allPost, setAllPost] = useState<IPosts[]>([]);

  const { data: Posts, isLoading: isLoadingPosts } = useGetPostsQuery()
    
  useEffect(() => {
    if(Posts)
    setAllPost(Posts)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingPosts]);

  const [createPost, {data:newPost}] = usePostPostsMutation(undefined)

  useEffect(() => {
    if(newPost)
    setAllPost([...allPost, newPost])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newPost]);


  const postFetchAdd = async (post:IPosts) => {
    await createPost(post)
  }

  if( isLoadingPosts ) return(<p>Loading</p>)

  return (
    <Container sx={{ pt: 3, mb: '40px' }}>
      <Toolbar/>
      <AddPost
        handlePost={postFetchAdd}
      />

      
      <SimplePosts
        title = "Posts"
        posts={allPost}
      />
      
    </Container>
  )
}

export default Posts