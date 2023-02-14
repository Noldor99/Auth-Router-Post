import { useNavigate, useParams } from "react-router-dom";
import { useGetAlbumsUsersQuery, useGetPostsUsersQuery, useGetTodosUsersQuery } from "../store/redusers/placeholderApi";
import Box from '@mui/material/Box';

import { Button } from "@mui/material";
import SimplePosts from "../components/SimplePosts";
import AlbumList from "../components/AlbumList";
import UserTodoList from "../components/UserTodoList";
import FullWidthTabs from "../components/FullWidthTabs";

const UserDetails = () => {
  const navigate = useNavigate();


  const { id } = useParams<string | any>()
  const { data: getAlbums } = useGetAlbumsUsersQuery(id, { refetchOnFocus: false })
  const { data: getTodos } = useGetTodosUsersQuery(id, { refetchOnFocus: false })
  const { data: getPosts } = useGetPostsUsersQuery(id, { refetchOnFocus: false })


  return (
    <Box>
      <FullWidthTabs
        renderAlbum={
          <AlbumList
            getAlbums={getAlbums} />
        }
        renderUserTodo={
          <UserTodoList
            getTodos={getTodos} />
        }
        renderSimplePosts={
          <SimplePosts
            title="UserPosts"
            posts={getPosts}
          />
        }
      />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Button
          size="small"
          onClick={() => navigate(-1)}
        >Go bask</Button>
      </Box>
    </Box>
  )
}

export default UserDetails