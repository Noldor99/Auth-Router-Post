import { Box, Container, Toolbar } from '@mui/material';
import { useGetTodosQuery, useGetUsersQuery } from '../store/redusers/placeholderApi';
import SimpleTodos from '../components/SimpleTodos';
import SimpleUsers from '../components/SimpleUsers';
import ListAccordion from '../components/ListAccordion';
import { Stack } from '@mui/system';

const Home = () => {

  const { data: Todos, isLoading: isLoadingTodos } = useGetTodosQuery()
  const { data: Users, isLoading: isLoadingUsers } = useGetUsersQuery()


  if( isLoadingTodos || isLoadingUsers) return(<p>Loading</p>)
 

  return (  
    <Container>
      <Box component="main" sx={{ pt: 3 }}>
      <Toolbar />
        <Stack spacing={2}>
        <SimpleUsers
          title='Users'
          users={Users}
        />
          <ListAccordion
            title='Accordion (simple_1)'
            renderItem = {
              <SimpleTodos
                title = "Todos"
                todos = {Todos}
            />
            }
          />
        </Stack>
      </Box>
    </Container>
  )
}

export default Home